from random import randint
from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text


def seed_reviews():
    review1 = Review(
        productId = 1,
        userId = randint(1, 5),
        review = "This product exceeded my expectations. It is high-quality and worth every penny.",
        stars = randint(1, 5)
    )
    review2 = Review(
        productId = 1,
        userId = randint(1, 5),
        review = "I am very impressed with the performance of this product. It delivers excellent results.",
        stars = randint(1, 5)
    )
    review3 = Review(
        productId = 1,
        userId = randint(1, 5),
        review = "The design of this product is sleek and modern. It adds a touch of elegance to any space.",
        stars = randint(1, 5)
    )
    review4 = Review(
        productId = 2,
        userId = randint(1, 5),
        review = "I love how easy it is to use this product. It simplifies my daily routine.",
        stars = randint(1, 5)
    )
    review5 = Review(
        productId = 2,
        userId = randint(1, 5),
        review = "The durability of this product is outstanding. It can withstand heavy use without any issues.",
        stars = randint(1, 5)
    )
    review6 = Review(
        productId = 3,
        userId = randint(1, 5),
        review = "This product has completely changed the way I do things. It is a game-changer.",
        stars = randint(1, 5)
    )
    review7 = Review(
        productId = 3,
        userId = randint(1, 5),
        review = "I appreciate the attention to detail in this product. It is evident in every aspect.",
        stars = randint(1, 5)
    )
    review8 = Review(
        productId = 4,
        userId = randint(1, 5),
        review = "The price of this product is incredibly reasonable for the value it provides.",
        stars = randint(1, 5)
    )
    review9 = Review(
        productId = 4,
        userId = randint(1, 5),
        review = "I have tried several similar products, but this one stands out from the rest.",
        stars = randint(1, 5)
    )
    review10 = Review(
        productId = 5,
        userId = randint(1, 5),
        review = "This product offers a wide range of features that make it versatile and convenient.",
        stars = randint(1, 5)
    )
    review11 = Review(
        productId = 5,
        userId = randint(1, 5),
        review = "The customer service provided by the company is exceptional. They go above and beyond to assist.",
        stars = randint(1, 5)
    )
    review12 = Review(
        productId = 5,
        userId = randint(1, 5),
        review = "The packaging of this product is secure and ensures that it arrives in perfect condition.",
        stars = randint(1, 5)
    )
    review13 = Review(
        productId = 6,
        userId = randint(1, 5),
        review = "I am amazed by the long-lasting battery life of this product. It exceeds my expectations.",
        stars = randint(1, 5)
    )
    review14 = Review(
        productId = 6,
        userId = randint(1, 5),
        review = "The size of this product is compact, making it easy to carry around.",
        stars = randint(1, 5)
    )
    review15 = Review(
        productId = 6,
        userId = randint(1, 5),
        review = "The instructions provided with this product are clear and easy to follow.",
        stars = randint(1, 5)
    )
    review16 = Review(
        productId = 7,
        userId = randint(1, 5),
        review = "The performance of this product is consistent, and it delivers reliable results every time.",
        stars = randint(1, 5)
    )
    review17 = Review(
        productId = 8,
        userId = randint(1, 5),
        review = "I appreciate the eco-friendly materials used in the production of this product.",
        stars = randint(1, 5)
    )
    review18 = Review(
        productId = 8,
        userId = randint(1, 5),
        review = "This product offers great value for the price. It is a cost-effective solution.",
        stars = randint(1, 5)
    )
    review19 = Review(
        productId = 10,
        userId = randint(1, 5),
        review = "I have recommended this product to my friends and family. It is that good!",
        stars = randint(1, 5)
    )
    review20 = Review(
        productId = 10,
        userId = randint(1, 5),
        review = "The user interface of this product is intuitive and user-friendly.",
        stars = randint(1, 5)
    )
    review21 = Review(
        productId = 10,
        userId = randint(1, 5),
        review = "I have been using this product for a while now, and it is still in excellent condition.",
        stars = randint(1, 5)
    )
    review22 = Review(
        productId = 11,
        userId = randint(1, 5),
        review = "The audio quality of this product is exceptional. It enhances my listening experience.",
        stars = randint(1, 5)
    )
    review23 = Review(
        productId = 11,
        userId = randint(1, 5),
        review = "The build quality of this product is outstanding. It feels sturdy and well-made.",
        stars = randint(1, 5)
    )
    review24 = Review(
        productId = 12,
        userId = randint(1, 5),
        review = "I love the variety of colors available for this product. It allows for personalization.",
        stars = randint(1, 5)
    )
    review25 = Review(
        productId = 13,
        userId = randint(1, 5),
        review = "This product has simplified my life. It performs its function effortlessly.",
        stars = randint(1, 5)
    )
    review26 = Review(
        productId = 13,
        userId = randint(1, 5),
        review = "The design of this product is ergonomic, providing comfort during use.",
        stars = randint(1, 5)
    )
    review27 = Review(
        productId = 14,
        userId = randint(1, 5),
        review = "The picture quality of this product is crystal clear. It enhances my viewing experience.",
        stars = randint(1, 5)
    )
    review28 = Review(
        productId = 15,
        userId = randint(1, 5),
        review = "I am impressed by the speed and efficiency of this product. It saves me time.",
        stars = randint(1, 5)
    )
    review29 = Review(
        productId = 15,
        userId = randint(1, 5),
        review = "The materials used in this product are of high quality, ensuring durability.",
        stars = randint(1, 5)
    )
    review30 = Review(
        productId = 16,
        userId = randint(1, 5),
        review = "I have noticed a significant improvement since using this product. It delivers results.",
        stars = randint(1, 5)
    )
    review31 = Review(
        productId = 16,
        userId = randint(1, 5),
        review = "The customer support team of this company is responsive and helpful.",
        stars = randint(1, 5)
    )
    review32 = Review(
        productId = 17,
        userId = randint(1, 5),
        review = "This product is versatile and can be used in various settings.",
        stars = randint(1, 5)
    )
    review33 = Review(
        productId = 17,
        userId = randint(1, 5),
        review = "I appreciate the warranty offered with this product. It gives me peace of mind.",
        stars = randint(1, 5)
    )
    review34 = Review(
        productId = 19,
        userId = randint(1, 5),
        review = "The packaging of this product is eco-friendly, which aligns with my values.",
        stars = randint(1, 5)
    )
    review35 = Review(
        productId = 19,
        userId = randint(1, 5),
        review = "I have received compliments from others on this product. It stands out.",
        stars = randint(1, 5)
    )
    review36 = Review(
        productId = 19,
        userId = randint(1, 5),
        review = "The functionality of this product is impressive. It performs multiple tasks effortlessly.",
        stars = randint(1, 5)
    )
    review37 = Review(
        productId = 20,
        userId = randint(1, 5),
        review = "This product is compact and space-saving, which is ideal for small areas.",
        stars = randint(1, 5)
    )
    review38 = Review(
        productId = 20,
        userId = randint(1, 5),
        review = "I am satisfied with the price I paid for this product. It is worth every penny.",
        stars = randint(1, 5)
    )
    review39 = Review(
        productId = 20,
        userId = randint(1, 5),
        review = "The user manual provided with this product is comprehensive and easy to understand.",
        stars = randint(1, 5)
    )
    review40 = Review(
        productId = 21,
        userId = randint(1, 5),
        review = "This product has improved my productivity. It is a valuable addition to my workflow.",
        stars = randint(1, 5)
    )
    review41 = Review(
        productId = 21,
        userId = randint(1, 5),
        review = "The wireless connectivity of this product is reliable and hassle-free.",
        stars = randint(1, 5)
    )
    review42 = Review(
        productId = 22,
        userId = randint(1, 5),
        review = "I have noticed a positive impact on my health since using this product.",
        stars = randint(1, 5)
    )
    review43 = Review(
        productId = 22,
        userId = randint(1, 5),
        review = "The app integration with this product is seamless and enhances the overall experience.",
        stars = randint(1, 5)
    )
    review44 = Review(
        productId = 23,
        userId = randint(1, 5),
        review = "I appreciate the energy efficiency of this product. It helps reduce my electricity bills.",
        stars = randint(1, 5)
    )
    review45 = Review(
        productId = 23,
        userId = randint(1, 5),
        review = "The customer reviews for this product were accurate. It lives up to the hype.",
        stars = randint(1, 5)
    )
    review46 = Review(
        productId = 24,
        userId = randint(1, 5),
        review = "This product arrived on time and in perfect condition. The shipping was prompt.",
        stars = randint(1, 5)
    )
    review47 = Review(
        productId = 25,
        userId = randint(1, 5),
        review = "I have had this product for a while, and it has not shown any signs of wear or tear.",
        stars = randint(1, 5)
    )
    review48 = Review(
        productId = 25,
        userId = randint(1, 5),
        review = "The intuitive controls of this product make it easy to adjust and customize.",
        stars = randint(1, 5)
    )
    all_reviews = [review1, review2, review3, review4, review5, review6, review7, review8, review9, review10,review11, review12, review13, review14, review15, review16, review17, review18, review19, review20, review21, review22, review23, review24,review25, review26,review27, review28, review29, review30, review31, review32, review33, review34,review35, review36,review37, review38, review39, review40, review41, review42, review43, review44 , review45, review46,review47, review48]
    _ = [db.session.add(review) for review in all_reviews]
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
    db.session.commit()
