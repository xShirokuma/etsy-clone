from app.models import db, Product, environment, SCHEMA
from sqlalchemy.sql import text

# with app.app_context():
#     db.drop_all()
#     print("All tables dropped!")
#     db.create_all()
#     print("All tables created!!!")

def seed_products():
    product1 = Product(
        userId = 1,
        name = "Personalized cufflinks",
        description = "These Initial cufflinks will become a wonderful personalized accessory for the groom. You may choose any letters and color for the embroidered monograms.",
        price = 90.56,
        previewImage = "https://i.etsystatic.com/5977919/r/il/ce2b8c/2210427839/il_1588xN.2210427839_jnp9.jpg",
        available = 5
    )
    product2 = Product(
        userId = 1,
        name = "Custom Coffee Mug",
        description = "Ceramic Mug comes with white box. Permanently printed not vinyl",
        price = 10.50,
        previewImage = "https://i.etsystatic.com/17299734/r/il/9851cf/3405866237/il_1588xN.3405866237_tt7t.jpg",
        available = 10
    )
    product3 = Product(
        userId = 2,
        name = "Personalized Leather Jewelry Dish",
        description = "It's just a sweet personalized gift for every occasion such as birthday, graduation , bachelorette , wedding , 3rd anniversary, housewarming,Father's Day Gift",
        price = 35.90,
        previewImage = "https://i.etsystatic.com/9696294/r/il/f75bb3/3611273176/il_1588xN.3611273176_9lxh.jpg",
        available = 6
    )
    product4 = Product(
        userId = 3,
        name = "Christmas Married Ornament ",
        description = "This Our First Christmas Married Ornament 2022 will make a great keepsake ornament for your family! The name is glued on to the back piece.",
        price = 49,
        previewImage = "https://i.etsystatic.com/25960492/r/il/a905ac/4233743066/il_1588xN.4233743066_3h5u.jpg",
        available = 7
    )
    product5 = Product(
        userId = 3,
        name = "Silver Hand Stamped Personalized Music Page Holder",
        description = "Silver Personalized, Hand Stamped Music Book Holder Clip. The perfect gift for the musician in your life!",
        price = 65,
        previewImage = "https://i.etsystatic.com/9197180/r/il/cee997/3562526079/il_1588xN.3562526079_h3ge.jpg",
        available = 15
    )

    all_products = [product1, product2, product3, product4, product5]
    _ = [db.session.add(product) for product in all_products]
    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))
    db.session.commit()