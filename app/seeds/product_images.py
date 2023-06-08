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
        productId=1,
        image="https://i.etsystatic.com/5977919/r/il/323dd8/2210427867/il_794xN.2210427867_lfnj.jpg"
    )
    productImage3 = ProductImage(
        productId=1,
        image="https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    productImage4 = ProductImage(
        productId=1,
        image="https://i.etsystatic.com/5977919/r/il/6cd869/1901461861/il_794xN.1901461861_e83u.jpg"
    )
    productImage5 = ProductImage(
        productId=1,
        image="https://i.etsystatic.com/5977919/r/il/00fbce/2162864002/il_794xN.2162864002_nvsd.jpg"
    )
    productImage6 = ProductImage(
        productId=2,
        image="https://i.etsystatic.com/17299734/r/il/9851cf/3405866237/il_1588xN.3405866237_tt7t.jpg"
    )
    productImage7 = ProductImage(
        productId=2,
        image="https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_1588xN.3405865469_2t2q.jpg"
    )
    productImage8 = ProductImage(
        productId=2,
        image="https://i.etsystatic.com/17299734/r/il/ae919a/4132049593/il_1588xN.4132049593_1sml.jpg"
    )
    productImage9 = ProductImage(
        productId=2,
        image="https://i.etsystatic.com/18563400/r/il/133fdb/4651180412/il_1588xN.4651180412_kgco.jpg"
    )
    productImage10 = ProductImage(
        productId=2,
        image="https://i.etsystatic.com/18563400/r/il/5358bb/4699420193/il_1588xN.4699420193_5anz.jpg"
    )
    productImage11 = ProductImage(
        productId=3,
        image="https://i.etsystatic.com/9696294/r/il/f75bb3/3611273176/il_1588xN.3611273176_9lxh.jpg"
    )
    productImage12 = ProductImage(
        productId=3,
        image="https://i.etsystatic.com/9696294/r/il/515f44/4984095609/il_1588xN.4984095609_b2b7.jpg"
    )
    productImage13 = ProductImage(
        productId=3,
        image="https://i.etsystatic.com/9696294/r/il/71d288/3732788033/il_1588xN.3732788033_tlgf.jpg"
    )
    productImage14 = ProductImage(
        productId=3,
        image="https://i.etsystatic.com/9696294/r/il/6d26c9/3658888539/il_1588xN.3658888539_bqs3.jpg"
    )
    productImage15 = ProductImage(
        productId=3,
        image="https://i.etsystatic.com/9696294/r/il/71bd9a/4174024911/il_1588xN.4174024911_aa0k.jpg"
    )
    productImage16 = ProductImage(
        productId=4,
        image="https://i.etsystatic.com/25960492/r/il/a905ac/4233743066/il_1588xN.4233743066_3h5u.jpg"
    )
    productImage17 = ProductImage(
        productId=4,
        image="https://i.etsystatic.com/25960492/r/il/db7fec/4233742316/il_1588xN.4233742316_e0ma.jpg"
    )
    productImage18 = ProductImage(
        productId=4,
        image="https://i.etsystatic.com/25960492/r/il/4a18c7/4188014510/il_1588xN.4188014510_pthg.jpg"
    )
    productImage19 = ProductImage(
        productId=4,
        image="https://i.etsystatic.com/25960492/r/il/7dc434/4310473440/il_1588xN.4310473440_i20y.jpg"
    )
    productImage20 = ProductImage(
        productId=4,
        image="https://i.etsystatic.com/25960492/r/il/4611be/3444393231/il_1588xN.3444393231_6iy9.jpg"
    )
    productImage21 = ProductImage(
        productId=5,
        image="https://i.etsystatic.com/9197180/r/il/cee997/3562526079/il_1588xN.3562526079_h3ge.jpg"
    )
    productImage22 = ProductImage(
        productId=5,
        image="https://i.etsystatic.com/9197180/r/il/46edad/3562488129/il_1588xN.3562488129_g7sb.jpg"
    )
    productImage23 = ProductImage(
        productId=5,
        image="https://i.etsystatic.com/9197180/r/il/7847fe/3514856254/il_1588xN.3514856254_l6jt.jpg"
    )
    productImage24 = ProductImage(
        productId=5,
        image="https://i.etsystatic.com/9197180/r/il/507487/3514856326/il_1588xN.3514856326_p8n2.jpg"
    )
    productImage25 = ProductImage(
        productId=5,
        image="https://i.etsystatic.com/9197180/r/il/89d599/2721098383/il_1588xN.2721098383_rzxx.jpg"
    )

    productImageId1 = [productImage1, productImage2, productImage3, productImage4, productImage5 ]
    productImageId2 = [productImage6, productImage7, productImage8, productImage9, productImage10 ]
    productImageId3 = [productImage11, productImage12, productImage13, productImage14, productImage15 ]
    productImageId4 = [productImage16, productImage17, productImage18, productImage19, productImage20 ]
    productImageId5 = [productImage21, productImage22, productImage23, productImage24, productImage25 ]
    

    # productImages = [productImageId1, 
    #                  productImageId2,
    #                  productImageId3,
    #                  productImageId4,
    #                  productImageId5]
    
    _ = [db.session.add(item) for item in productImageId1]
    __ = [db.session.add(item) for item in productImageId2]
    ___ = [db.session.add(item) for item in productImageId3]
    ____ = [db.session.add(item) for item in productImageId4]
    _____ = [db.session.add(item) for item in productImageId5]
    db.session.commit()

def undo_product_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM product_images"))
        
    db.session.commit()
