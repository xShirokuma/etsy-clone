from app.models import db, ProductImage, environment, SCHEMA
from sqlalchemy.sql import text

# with app.app_context():
#     db.drop_all()
#     db.create_all()
#     print("table made")

def seed_product_images():
    productImage1 = ProductImage(
        productId=1,
        image="https://i.etsystatic.com/5977919/r/il/ce2b8c/2210427839/il_1588xN.2210427839_jnp9.jpg"
    )
    productImage2 = ProductImage(
        productId=2,
        image="https://i.etsystatic.com/17299734/r/il/9851cf/3405866237/il_1588xN.3405866237_tt7t.jpg"
    )
    productImage3 = ProductImage(
        productId=3,
        image="https://i.etsystatic.com/9696294/r/il/f75bb3/3611273176/il_1588xN.3611273176_9lxh.jpg"
    )
    productImage4 = ProductImage(
        productId=4,
        image="https://i.etsystatic.com/25960492/r/il/a905ac/4233743066/il_1588xN.4233743066_3h5u.jpg"
    )
    productImage5 = ProductImage(
        productId=5,
        image="https://i.etsystatic.com/9197180/r/il/cee997/3562526079/il_1588xN.3562526079_h3ge.jpg"
    )

    productImages = [productImage1, 
                     productImage2,
                     productImage3,
                     productImage4,
                     productImage5]
    _ = [db.session.add(item) for item in productImages]
    db.session.commit()

def undo_product_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM product_images"))
        
    db.session.commit()