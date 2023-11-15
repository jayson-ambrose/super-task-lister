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


        print('populating users...')

        u1 = User(username='Jayson', password='password')
        u2 = User(username='Kelsey', password='password')

        user_list = [u1, u2]

        db.session.add_all([u1, u2])

        try:
            db.session.commit()

        except:
            db.session.rollback()
            print('user seed failed!')

        print('populating lists...')

        l1 = List(title='Cleaning')
        l2 = List(title='Shopping')

        list_list = [l1, l2]

        db.session.add_all(list_list)

        try:
            db.session.commit()

        except:
            db.session.rollback()
            print('list seed failed!')
  
        print('populating tasks...')

        t1 = Task(title='Clean bathroom', description='Clean the bathroom its becoming a biohazard.',
                  completed=False, user_id=1, list_id=1)
        t2 = Task(title='Clean bedroom', description='What if the landlord stops by?',
                  completed=False, user_id=2, list_id=1)
        t3 = Task(title='Beef', description='87/13 lean for chili.',
                  completed=False, user_id=1, list_id=2)
        t4 = Task(title='Sweet Onion', description='Just to have on-hand.',
                  completed=False, user_id=2, list_id=2)
        
        db.session.add_all([t1, t2, t3, t4])
        
        try:
            db.session.commit()

        except:
            db.session.rollback()
            print('task seed failed')