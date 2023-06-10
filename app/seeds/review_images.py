from app.models import db, ReviewImage, environment, SCHEMA
from sqlalchemy.sql import text

def seed_review_images():
    reviewImage1 = ReviewImage(
        reviewId = 1,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage2 = ReviewImage(
        reviewId = 1,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage3 = ReviewImage(
        reviewId = 2,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage4 = ReviewImage(
        reviewId = 3,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage5 = ReviewImage(
        reviewId = 4,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage6 = ReviewImage(
        reviewId = 4,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage7 = ReviewImage(
        reviewId = 5,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage8 = ReviewImage(
        reviewId = 5,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage9 = ReviewImage(
        reviewId = 7,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage10 = ReviewImage(
        reviewId = 7,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage11 = ReviewImage(
        reviewId = 8,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage12 = ReviewImage(
        reviewId = 9,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage13 = ReviewImage(
        reviewId = 11,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage14 = ReviewImage(
        reviewId = 11,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage15 = ReviewImage(
        reviewId = 13,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage16 = ReviewImage(
        reviewId = 14,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage17 = ReviewImage(
        reviewId = 14,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage18 = ReviewImage(
        reviewId = 15,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage19 = ReviewImage(
        reviewId = 15,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage20 = ReviewImage(
        reviewId = 17,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage21 = ReviewImage(
        reviewId = 18,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage22 = ReviewImage(
        reviewId = 20,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage23 = ReviewImage(
        reviewId = 20,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage24 = ReviewImage(
        reviewId = 21,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage25 = ReviewImage(
        reviewId = 21,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage26 = ReviewImage(
        reviewId = 22,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage27 = ReviewImage(
        reviewId = 22,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage28 = ReviewImage(
        reviewId = 24,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage29 = ReviewImage(
        reviewId = 25,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage30 = ReviewImage(
        reviewId = 26,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage31 = ReviewImage(
        reviewId = 26,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage32 = ReviewImage(
        reviewId = 28,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage33 = ReviewImage(
        reviewId = 28,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage34 = ReviewImage(
        reviewId = 29,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage35 = ReviewImage(
        reviewId = 29,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage36 = ReviewImage(
        reviewId = 30,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage37 = ReviewImage(
        reviewId = 31,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage38 = ReviewImage(
        reviewId = 32,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage39 = ReviewImage(
        reviewId = 32,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage40 = ReviewImage(
        reviewId = 33,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage41 = ReviewImage(
        reviewId = 33,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage42 = ReviewImage(
        reviewId = 34,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage43 = ReviewImage(
        reviewId = 35,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage44 = ReviewImage(
        reviewId = 35,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage45 = ReviewImage(
        reviewId = 36,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage46 = ReviewImage(
        reviewId = 37,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage47 = ReviewImage(
        reviewId = 37,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage48 = ReviewImage(
        reviewId = 38,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage49 = ReviewImage(
        reviewId = 38,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage50 = ReviewImage(
        reviewId = 39,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage51 = ReviewImage(
        reviewId = 40,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage52 = ReviewImage(
        reviewId = 42,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage53 = ReviewImage(
        reviewId = 43,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage54 = ReviewImage(
        reviewId = 44,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage55 = ReviewImage(
        reviewId = 44,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage56 = ReviewImage(
        reviewId = 45,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage57 = ReviewImage(
        reviewId = 46,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage58 = ReviewImage(
        reviewId = 46,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImage59 = ReviewImage(
        reviewId = 48,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage60 = ReviewImage(
        reviewId = 48,
        image = "https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_794xN.3405865469_2t2q.jpg"
    )
    reviewImages = [reviewImage1, reviewImage2, reviewImage3, reviewImage4, reviewImage5, reviewImage6, reviewImage7, reviewImage8, reviewImage9, reviewImage10, reviewImage11, reviewImage12, reviewImage13, reviewImage14, reviewImage15, reviewImage16, reviewImage17, reviewImage18, reviewImage19, reviewImage20, reviewImage21, reviewImage22, reviewImage23, reviewImage24, reviewImage25, reviewImage26, reviewImage27, reviewImage28, reviewImage29, reviewImage30, reviewImage31, reviewImage32, reviewImage33, reviewImage34, reviewImage35, reviewImage36, reviewImage37, reviewImage38, reviewImage39, reviewImage40, reviewImage41, reviewImage42, reviewImage43, reviewImage44, reviewImage45, reviewImage46, reviewImage47, reviewImage48, reviewImage49, reviewImage50, reviewImage51, reviewImage52, reviewImage53, reviewImage54, reviewImage55, reviewImage56, reviewImage57, reviewImage58, reviewImage59, reviewImage60]
    _ = [db.session.add(reviewImage) for reviewImage in reviewImages]
    db.session.commit()

def undo_review_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.review_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM review_images"))

    db.session.commit()
