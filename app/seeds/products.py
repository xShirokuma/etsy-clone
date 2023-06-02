from app.models.product import Product 
from app import app, db

with app.app_context():
    db.drop_all()
    print("All tables dropped!")
    db.create_all()
    print("All tables created!!!")

    product1 = Product(
        userId = 1,
        name = "Personalized cufflinks",
        description = "These Initial cufflinks will become a wonderful personalized accessory for the groom. You may choose any letters and color for the embroidered monograms.",
        price = 90.56 ,
        available = 5
    )
    product2 = Product(
        userId = 1,
        name = "Custom Coffee Mug",
        description = "Ceramic Mug comes with white box. Permanently printed not vinyl",
        price = 10.50,
        available = 10
    )
    product3 = Product(
        userId = 2,
        name = "Personalized Leather Jewelry Dish",
        description = "It's just a sweet personalized gift for every occasion such as birthday, graduation , bachelorette , wedding , 3rd anniversary, housewarming,Father's Day Gift",
        price = 35.90,
        available = 6
    )
    product4 = Product(
        userId = 3,
        name = "Christmas Married Ornament ",
        description = "This Our First Christmas Married Ornament 2022 will make a great keepsake ornament for your family! The name is glued on to the back piece.",
        price = 49,
        available = 7
    )
    product5 = Product(
        userId = 3,
        name = "Silver Hand Stamped Personalized Music Page Holder",
        description = "Silver Personalized, Hand Stamped Music Book Holder Clip. The perfect gift for the musician in your life!",
        price = 65,
        available = 15
    )


    all_products = [product1, product2, product3, product4, product5]
    add_products = [db.session.add(product) for product in all_products]
    db.session.commit()
    print("Products created!")

