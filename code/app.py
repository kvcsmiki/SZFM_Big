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
@app.route('/create')
def create():
    return render_template('create.html')

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

if __name__ == '__main__':
    app.run(debug=True)