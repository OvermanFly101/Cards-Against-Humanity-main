from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_bcrypt import Bcrypt
# bcrypt = Bcrypt(app)

DATABASE = "user_schema_cah"

# Card table with all of its attributes.
class Card:
    def __init__(self, data):
        self.id = data['id']
        self.card_name = data['card_name']
        self.card_statement = data['card_statement']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at'] 

    # Creates a user, and inserts their data in the users table.
    @classmethod
    def create_card(cls, data):
        query = 'INSERT INTO cards (card_statement, card_name) VALUES (%(card_statement)s, %(card_name)s);'
        result = connectToMySQL(DATABASE).query_db(query, data)
        return result

    # Selects all of the users in the users table.
    @classmethod
    def read_all_cards(cls):
        query = 'SELECT * FROM cards;'
        results = connectToMySQL(DATABASE).query_db(query)
        cards = []
        for row in results:
            cards.append(cls(row))
        return cards

    # Selects one user from the users table by their card_statement.
    @classmethod
    def read_by_card_name(cls, data):
        query = 'SELECT * FROM cards WHERE card_name = %(card_name)s;'
        result = connectToMySQL(DATABASE).query_db(query, data)
        if len(result) < 1:
            return False
        return cls(result[0])

    # Selects one user from the users table by their id.
    @classmethod
    def read_card_by_id(cls, data):
        query = 'SELECT * FROM cards WHERE id = %(id)s;'
        result = connectToMySQL(DATABASE).query_db(query, data)
        if len(result) < 1:
            return False
        return cls(result[0])

    # Generates a flash message on the registration/login page if certain requirements aren't met.
    @staticmethod
    def validate_card(card): 
        is_valid = True
        query = 'SELECT * FROM cards WHERE card_name = %(card_name)s;'
        result = connectToMySQL(DATABASE).query_db(query, card)
        if len(user['card_name']) < 2:
            flash('Card Name must be at least 3 characters.', 'card')
            is_valid = False 
        if len(user['card_description'] < 7:
            flash('Card description must be at least 7 characters.', 'card')
            is_valid = False
        return is_valid