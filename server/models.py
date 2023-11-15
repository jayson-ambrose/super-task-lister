from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

class DefaultBase(db.Model, SerializerMixin):
    __abstract__ = True

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    # serialize_rules = ('-created_at', '-updated_at') # put this line back in to remove all created_at/updated_at

    def __repr__(self):
        return f'<Instance of {self.__class__.__name__}, ID {self.id}'
    
class User(DefaultBase):
    __tablename__ = 'users'

    serialize_rules = ('-tasks.users', '-_password')

    username = db.Column(db.String, unique=True, nullable=False)
    _password = db.Column(db.String, nullable=True)

    tasks = db.relationship('Task', backref='user', cascade='all, delete-orphan')

    lists = association_proxy('tasks', 'list')

    @validates('password')
    def validate_password (self, key, password):
        if (4 > len(password) > 35):
            raise ValueError('Password must be between 5 and 34 characters long')
        return password
        
    @validates('username')
    def validate_username (self, key, username):
        if (4 > len(username) > 16):
            raise ValueError('Username must be between 5 and 15 characters long')
        return username
        
    @hybrid_property
    def password(self):
        return self._password
    
    @password.setter
    def password(self, password):
        password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
        self._password = password_hash

    def auth(self, password):
        return bcrypt.check_password_hash(self.password, password)

class Task(DefaultBase):
    __tablename__ = 'tasks'

    title = db.Column(db.String, nullable=False)
    description = db.Column(db.Text)
    completed = db.Column(db.Boolean)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    list_id = db.Column(db.Integer, db.ForeignKey('lists.id'))

class List(DefaultBase):
    __tablename__ = 'lists'

    title = db.Column(db.String, nullable=False)

    tasks = db.relationship('Task', backref='list', cascade='all, delete-orphan')

    users = association_proxy('tasks', 'user')
    
