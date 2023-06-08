from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from.favorties import favorites

class Product(db.Model):
    __tablename__ = "products"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    previewImage = db.Column(db.String, nullable=False)
    available = db.Column(db.Integer, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    images = db.relationship("ProductImage", back_populates="product", cascade="all, delete-orphan")
    user = db.relationship("User", back_populates="products")
    reviews = db.relationship("Review", back_populates="product", cascade="all, delete-orphan")
    cartItems = db.relationship("CartItem", back_populates="product", cascade="all, delete-orphan")

    product_favorites = db.relationship(
        "User",
        secondary='favorites',
        back_populates="user_favorites",
    )

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "previewImage": self.previewImage,
            "available": self.available,
            "images": [image.to_dict() for image in self.images],
            "user": self.user.to_dict(),
            "reviews": [review.to_dict() for review in self.reviews],
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
       }

    def to_dict_favorites(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "previewImage": self.previewImage,
            "cartItem": [cartItem.to_dict_favorites() for cartItem in self.cartItems],
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
       }
