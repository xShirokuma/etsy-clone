from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():
    review1 = Review(
        productId = 1,
        userId = 4,
        review = "Nice product!",
        stars = 5
    )
    review2 = Review(
        productId = 2,
        userId = 4,
        review = "Bad quality, wish I could return it",
        stars = 1
    )

    all_reviews = [review1,
                   review2]
    _ = [db.session.add(review) for review in all_reviews]
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
    db.session.commit()