#from crypt import methods
import sqlite3 as sql
import hashlib as hl
from flask import Flask, g, render_template, request, session, redirect

app = Flask(__name__, template_folder='html')
app.secret_key = '42069'

@app.route('/')
def index():
    return render_template('start.html')

@app.route('/back')
def back():
    return render_template('main.html')

@app.route('/logout')
def logout():
    return redirect("/")

@app.route('/answer')
def answer():
    name = session["questionnaire"]+'_solves'
    insert = 'INSERT INTO '+name+' VALUES ("'+session["user_name"]+'",'

    for i in request.args.items():
        tempstr = ''
        key=i[0]
        lista = request.args.getlist(key)
        if(len(lista) > 1):
            for i in lista:
                tempstr += i+' '
            tempstr = '"'+tempstr[0:-1]+'"'
        else:
            tempstr = lista[0]
            if(type(lista[0]) is not int):
                tempstr = '"'+tempstr+'"'
        
        insert += tempstr+','
    insert = insert[0:-1] + ');'

    try:
        db = getattr(g, '_database', None)
        if db is None:
            db = g._database = sql.connect('sample.db')
        cursor = db.cursor()


        print(insert)
        cursor.execute(insert)
        db.commit()
    except Exception as e:
        print(e)
        db.rollback()
        return
    finally:
        db.close()
        return redirect('/questionnaires')

@app.route('/goToQuestionnaire')
def goToQuestionnaire():
    try:
        db = getattr(g, '_database', None)
        if db is None:
            db = g._database = sql.connect('sample.db')
        cursor = db.cursor()
        print(request.values)
        print(list(dict(request.args.items()).keys()))
        choice = list(dict(request.args.items()).keys())[0]
        print(choice)
        session["questionnaire"] = choice
        cursor.execute('SELECT * FROM '+choice)
        result = []
        questions = cursor.fetchall()
        for i in questions:
            if len(i[2]) > 0:
                temp = i[2].split(":")
                l = list(i)
                l[2] = ''
                l.append(temp)

                i = tuple(l)

                result.append(i)
            else:
                result.append(i)
        print(result)
    except Exception as e:
        print(e)
        return
    finally:
        db.close()
        return render_template('solver.html',questions=result)

@app.route('/questionnaires')
def all():
    try:
        db = getattr(g, '_database', None)
        if db is None:
            db = g._database = sql.connect('sample.db')
        cursor = db.cursor()

        cursor.execute('SELECT id FROM forms WHERE status = ?',('created',))
        forms = cursor.fetchall()
    except Exception as e:
        print(e)
        return
    finally:
        db.close()
        return render_template('allQuestionnaires.html',forms=forms)

@app.route('/create', methods=['POST','GET'])
def create():
    try:
        db = getattr(g, '_database', None)
        if db is None:
            db = g._database = sql.connect('sample.db')
        cursor = db.cursor()

        cursor.execute('INSERT INTO forms (name,status) VALUES (?,?)',(session["user_name"],'none'))
        db.commit()
    except Exception as e:
        print(e)
        db.rollback()
        return
    finally:
        db.close()
        return render_template('create.html')

@app.route('/save', methods=['POST','GET'])
def save():
    try:
        db = getattr(g, '_database', None)
        if db is None:
            db = g._database = sql.connect('sample.db')
        cursor = db.cursor()

        cursor.execute('SELECT MAX(id) FROM forms')
        name = cursor.fetchone()[0]
        print(name)

        cursor.execute('CREATE TABLE questionnaire_'+ str(name) +' ("id" INTEGER, "question" TEXT, "options" TEXT, "type" TEXT, PRIMARY KEY("id"));')
        for i in request.args.items():
            value = i[1]
            splitted = i[0].split('_')
            number = splitted[1]
            type = splitted[3]
            if(splitted[2] == 'question'):
                options = ''
                for j in request.args.items():
                    optionValue = j[1]
                    splitted2 = j[0].split('_')
                    if(splitted2[1] == number and splitted2[2] == 'option'):
                        options += optionValue + ":"
                options = options[0:-1]
                cursor.execute('INSERT INTO questionnaire_'+str(name)+' (id, question, options, type) VALUES (?,?,?,?)',(number,value,options,type))
        
        
        cursor.execute('UPDATE forms SET status = ? WHERE id = ?', ('created',name))
        cursor.execute('DELETE FROM forms WHERE status <> ? OR status IS NULL',('created',))
        
        cursor.execute('SELECT * FROM questionnaire_'+str(name))
        questions = cursor.fetchall()

        builder = tableBuilder('questionnaire_'+str(name)+'_solves',questions)
        cursor.execute(builder)

        db.commit()
    except Exception as e:
        db.rollback()
        print(e)
        return render_template('create.html')
    finally:
        db.close()
        return redirect('/create')

@app.route('/add_user', methods=['POST'])
def new_user():
    try:
        db = getattr(g, '_database', None)
        if db is None:
            db = g._database = sql.connect('sample.db')
        cursor = db.cursor()

        e_mail = request.form['e_mail']
        if(len(e_mail) == 0):
            print('Please enter email')
            return redirect("/")
        user_name = request.form['user_name']
        if(len(user_name) < 3):
            print('User name must contain at least 3 characters')
            return redirect("/")
        user_psw = request.form['user_psw']
        if(len(user_name) == 0):
            print('Please enter password')
            return redirect("/")
        encrypted = hl.md5(user_psw.encode()).hexdigest()

        cursor.execute("INSERT INTO users (user_name, user_email, user_password) VALUES (?,?,?)",
        (user_name, e_mail, encrypted))

        db.commit()

    except:
        db.rollback()
    finally:
        db.close()

    return redirect("/")

@app.route('/login', methods=["POST","GET"])
def login():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sql.connect('sample.db')
    cursor = db.cursor()


    session["email"] = request.form['login_email']
    session["psw"] = request.form['login_psw']
    encrypted = hl.md5(session["psw"].encode()).hexdigest()

    cursor.execute("SELECT user_name FROM users WHERE user_email = ? AND user_password = ?",(session["email"],encrypted))
    record = cursor.fetchone()
    if record is not None:
        session["user_name"] = record[0]
        return render_template('main.html', user_name=session["user_name"])
    return index()

def tableBuilder(name, questions):

    string = 'CREATE TABLE '+str(name)+' ("solver" TEXT, '
    print(questions)
    for i in questions:
        if i[3] == 'scale':
            string += '"'+str(i[0])+'" INTEGER, '
        else:
            string += '"'+str(i[0])+'" TEXT, '

    string+='PRIMARY KEY("solver"));'

    return string

if __name__ == '__main__':
    app.run(debug=True)