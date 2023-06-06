from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    productId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    review = db.Column(db.String(1000), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now())

    images = db.relationship("ReviewImage", back_populates="review", cascade="all, delete-orphan")
    user = db.relationship("User", back_populates="reviews")
    product = db.relationship("Product", back_populates="reviews")

    def to_dict(self):
        return {
            "id": self.id,
            "productId": self.productId,
            "userId": self.userId,
            "review": self.review,
            "stars": self.stars,
            "user": self.user.to_dict(),
            "images": [image.to_dict() for image in self.images],
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
       }
