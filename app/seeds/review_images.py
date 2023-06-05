from app.models import db, ReviewImage, environment, SCHEMA
from sqlalchemy.sql import text

def seed_review_images():
    reviewImage1 = ReviewImage(
        reviewId = 1,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage2 = ReviewImage(
        reviewId = 2,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )

    reviewImages = [reviewImage1,
                    reviewImage2]
    _ = [db.session.add(reviewImage) for reviewImage in reviewImages]
    db.session.commit()

def undo_review_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM product_images"))
        
    db.session.commit()
