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


if __name__ == '__main__':
    app.run(port=5555, debug=True)