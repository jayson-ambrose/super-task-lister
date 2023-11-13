from random import randint, choice as rc
import datetime
from faker import Faker

from app import app
from models import db, User, List, Task

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        
        
        print('deleting old data...')
        User.query.delete()
        Task.query.delete()
        List.query.delete()