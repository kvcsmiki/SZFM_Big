from crypt import methods
import email
import sqlite3 as sql
import hashlib as hl
from flask import Flask, g, render_template, request, session

app = Flask(__name__, template_folder='html')
app.secret_key = '42069'

@app.route('/')
def index():
    return render_template('start.html')


if __name__ == '__main__':
    app.run(debug=True)