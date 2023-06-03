from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class Employee(db.Model, UserMixin):
    __tablename__ = "employees"

    id =  db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    employee_number = db.Column(db.Integer, nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    order = db.relationship("Order", back_populates="employee")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)


class Menu(db.Model):
    __tablename__ = "menus"

    id =  db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)

    items = db.relationship("MenuItem", back_populates="menu")


class MenuItemType(db.Model):
    __tablename__ = "menu_item_types"

    id =  db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)


class MenuItem(db.Model):
    __tablename__ = "menu_items"

    id =  db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)
    menu_id = db.Column(db.Integer, db.ForeignKey("menus.id"), nullable=False)
    menu_type_id = db.Column(db.Integer, db.ForeignKey("menu_item_types.id"), nullable=False)

    type = db.relationship("MenuItemType")
    menu = db.relationship("Menu", back_populates="items")
    order_detail = db.relationship("OrderDetail", back_populates="menu_item")

class Table(db.Model):
    __tablename__ = "tables"

    id =  db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer, nullable=False, unique=True)
    capacity = db.Column(db.Integer, nullable=False)

    order = db.relationship("Order", back_populates="table")

    def to_dict(self):
        orders = Order.query.filter(Order.table_id == self.id)
        orderDictsList = []
        for order in orders:
            orderDictsList.append(order.to_dict())
        return {
            "id": self.id,
            "number": self.number,
            "capacity": self.capacity,
            "orders": orderDictsList
        }
class Order(db.Model):
    __tablename__ = "orders"

    id =  db.Column(db.Integer, primary_key=True)
    employee_id =  db.Column(db.Integer, db.ForeignKey("employees.id"), nullable=False)
    table_id =  db.Column(db.Integer, db.ForeignKey("tables.id"), nullable=False)
    finished =  db.Column(db.Boolean, nullable=False)

    employee = db.relationship("Employee", back_populates="order")
    table = db.relationship("Table", back_populates="order")
    order_detail = db.relationship("OrderDetail", back_populates="order")

    def to_dict(self):
        return {
            "id": self.id,
            "employee_id": self.employee_id,
            "table_id": self.table_id,
            "finished": self.finished
        }
class OrderDetail(db.Model):
    __tablename__= "order_details"

    id =  db.Column(db.Integer, primary_key=True)
    order_id =  db.Column(db.Integer, db.ForeignKey("orders.id"), nullable=False)
    menu_item_id =  db.Column(db.Integer, db.ForeignKey("menu_items.id"), nullable=False)

    menu_item = db.relationship("MenuItem", back_populates="order_detail")
    order = db.relationship("Order", back_populates="order_detail")
