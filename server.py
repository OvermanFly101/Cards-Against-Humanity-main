# All good! Don't edit!

# Imports the controllers files.
from flask_app.controllers import cards, users
from flask_app import app

if __name__ == '__main__':
    app.run(debug=True)