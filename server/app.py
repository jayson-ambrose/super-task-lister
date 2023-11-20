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

class Users(Resource):

    def get(self):
        user_list = []
        for user in User.query.all():
            user_list.append(user.to_dict())

        return make_response(user_list, 200)
    
class Tasks(Resource):

    def get(self):
        task_list = []
        for task in Task.query.all():
            task_list.append(task.to_dict())

        return make_response(task_list, 200)
        
class Lists(Resource):
    def get(self):
        list_list = []
        for list in List.query.all():
            list_list.append(list.to_dict())

        return make_response(list_list, 200)

        

api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(Users, '/users')
api.add_resource(Tasks, '/tasks')
api.add_resource(Lists, '/lists')

if __name__ == '__main__':
    app.run(port=5555, debug=True)