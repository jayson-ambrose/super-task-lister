#!/usr/bin/env python3

# Standard library imports
from datetime import date

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

# Local imports
from config import app, db, api
from models import User, Task, List, DefaultBase

app.secret_key = "aggaba/434G.mgfYTad5sfh//,GF,vffa"

# Views go here!

class Login(Resource):    

    def post(self):

        req_data = request.get_json()
        user = User.query.filter(User.username == req_data['username']).first()

        try:
            if user.auth(req_data['password']) == False:
                print ('Incorrect password.')
                return make_response({"error":"wrong password enterred"}, 401)
            
            session['user_id'] = user.id

        except:
            return make_response({'error': 'user not found or incorrect password'}, 401)
        
class Logout(Resource):

    def get(self):
        session ['user_id'] = None
        return make_response({}, 204)
    
    def delete(self):
        print(session['user_id'])
        session ['user_id'] = None
        return make_response({}, 204)

        

api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')

if __name__ == '__main__':
    app.run(port=5555, debug=True)