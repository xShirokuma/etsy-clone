from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Product(db.Model):
    __tablename__ = "products"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    previewImage = db.Column(db.String, nullable=False)
    available = db.Column(db.Integer, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    images = db.relationship("ProductImage", back_populates="product")
    user = db.relationship("User", back_populates="products")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "previewImage": self.previewImage,
            "available": self.available,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
       }
