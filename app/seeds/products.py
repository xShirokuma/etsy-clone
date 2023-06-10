from app.models import db, Product, User, environment, SCHEMA
from sqlalchemy.sql import text

# with app.app_context():
#     db.drop_all()
#     print("All tables dropped!")
#     db.create_all()
#     print("All tables created!!!")

def seed_products():

    user = User.query.get(1)

    product1 = Product(
        userId = 1,
        name = "Personalized cufflinks",
        description = "These Initial cufflinks will become a wonderful personalized accessory for the groom. You may choose any letters and color for the embroidered monograms.",
        price = 90.56,
        previewImage = "https://i.etsystatic.com/5977919/r/il/ce2b8c/2210427839/il_1588xN.2210427839_jnp9.jpg",
        available = 5,
        product_favorites = [user]
    )
    product2 = Product(
        userId = 1,
        name = "Custom Coffee Mug",
        description = "Ceramic Mug comes with white box. Permanently printed not vinyl",
        price = 10.50,
        previewImage = "https://i.etsystatic.com/17299734/r/il/9851cf/3405866237/il_1588xN.3405866237_tt7t.jpg",
        available = 10,
        product_favorites = [user]
    )
    product3 = Product(
        userId = 1,
        name = "Swarovski Crystal Bridal clutch ",
        description = "This exquisite hand crafted Swarovski Crystal Bridal clutch has been adorned in a multitude of crystals that all complement each other. The pattern is designed by hand and there are over 4000 crystals in a multitude of blue and silver colours that have been hand applied to this clutch. The pattern runs all the way around the purse. A truly striking purse to spruce up any outfit. The pictures do not do this item justice!",
        price = 733.11,
        previewImage = "https://i.etsystatic.com/7292566/r/il/4ab239/778890797/il_1588xN.778890797_dd2j.jpg",
        available = 15,
        
    )
    product4 = Product(
        userId = 1,
        name = "Candle Holder",
        description = "In homage to the richness and beauty of Buddhist, Hindu, and Egyptian art, this green candle holder is inspired by the lotus flower, a symbol of purity, and is nestled in a jewel encrusted case. Great gift for a friend, conversational piece, or personal keepsake.",
        price = 23.50,
        previewImage = "https://i.etsystatic.com/14397144/r/il/584642/1119687158/il_1588xN.1119687158_9pyg.jpg",
        available = 10,
        
    )
    product5 = Product(
        userId = 1,
        name = "DSLR / SLR body style camera",
        description = "This adorable camera strap is a stylish and comfortable way to personalize your camera. Charming camera strap for DSLR / SLR body style cameras with a focus on durability, strength, and comfort. Adjustable features for preferred positioning either around your neck or across your body.",
        price = 39.00,
        previewImage = "https://i.etsystatic.com/9083092/r/il/944664/1748926989/il_1588xN.1748926989_jcly.jpg",
        available = 15,
        product_favorites = [user]
    )
    
    product6 = Product(
        userId = 2,
        name = "Personalized Leather Jewelry Dish",
        description = "It's just a sweet personalized gift for every occasion such as birthday, graduation , bachelorette , wedding , 3rd anniversary, housewarming,Father's Day Gift",
        price = 35.90,
        previewImage = "https://i.etsystatic.com/9696294/r/il/f75bb3/3611273176/il_1588xN.3611273176_9lxh.jpg",
        available = 6,
        product_favorites = [user]
    )
    product7 = Product(
        userId = 2,
        name = "Glass painting Abstract art ",
        description = "This art work is made with transparent glass paints on the clear glass. The paints are transparent and do not fade. Some glitter and 3D dots make this piece really vibrant and juicy. The frame has a stand to place it against a window.",
        price = 140.00,
        previewImage = "https://i.etsystatic.com/11602422/r/il/ff4d71/4600501001/il_1588xN.4600501001_k95o.jpg",
        available = 6,
        product_favorites = [user]
    )
    product8 = Product(
        userId = 2,
        name = "Wooden House Incense Burner",
        description = "This dainty personalised wooden house incense burner is a handmade natural product that designed as a house with working chimney.Wooden house incense burner/ holder can be personalised with names, numbers, quotes or proverbs. With the handmade wooden house incense burner, we offer you a personalised and meaningful experience. These unique customised wooden house incense burners not only serve as eye-catching decorative pieces with their special design but also provide a tool to completely transform the atmosphere of your home with the incense smoke that emanates from the chimney.",
        price = 27.00,
        previewImage = "https://i.etsystatic.com/43992176/r/il/b4e6b6/4966823764/il_1588xN.4966823764_87py.jpg",
        available = 6,
       
    )
    product9 = Product(
        userId = 2,
        name = "The compact Owlbear Terrain Set",
        description = "The compact Owlbear Terrain Set is great for the traveling GM looking to add a little variety to their outdoor scenes. Easily stackable and collapsable hills, in addition to various rocks, trees, stumps, and item scatter can add dynamic elements to any outdoor encounter.",
        price = 94.98,
        previewImage = "https://i.etsystatic.com/25195323/r/il/f9f001/4325925836/il_1588xN.4325925836_auf4.jpg",
        available = 6,
        product_favorites = [user]
    )
    product10 = Product(
        userId = 2,
        name = "Samurai Swordsmen",
        description = "Samurai Swordsmen, Sculture made by Kyoushunek. Each scale will include an appropriate size base.Different scale or sizes available upon request.",
        price = 55.98,
        previewImage = "https://i.etsystatic.com/29995580/r/il/165632/3748596075/il_1588xN.3748596075_k5sv.jpg",
        available = 6,
        product_favorites = [user]
    )
    product11 = Product(
        userId = 3,
        name = "Christmas Married Ornament ",
        description = "This Our First Christmas Married Ornament 2022 will make a great keepsake ornament for your family! The name is glued on to the back piece.",
        price = 49,
        previewImage = "https://i.etsystatic.com/25960492/r/il/a905ac/4233743066/il_1588xN.4233743066_3h5u.jpg",
        available = 7
    )
    product12 = Product(
        userId = 3,
        name = "Silver Hand Stamped Personalized Music Page Holder",
        description = "Silver Personalized, Hand Stamped Music Book Holder Clip. The perfect gift for the musician in your life!",
        price = 65,
        previewImage = "https://i.etsystatic.com/9197180/r/il/cee997/3562526079/il_1588xN.3562526079_h3ge.jpg",
        available = 15
    )
    product13 = Product(
        userId = 3,
        name = "Custom logo wax seal stamp kit ",
        description = "🎉 Custom wax seal stamp kit for wedding invitation , There is a 50 percent discount today, please don't miss it !!!✨✨✨ Any Logo,initials,idea can be customized , If you have your own Logo or design (pdf , png ,jpg , AI , SVG) , send it to me via 'Message KAITLYN' or my email : beebluesix [!at] outlook.com 🎉 The standard size of stamp head is 25 mm , you can choose 2 to 5 different colors & freely mix/match colors . Five wax beads can make a wax seal (for 1 envelope) . Set B is highly recommended, and 600 wax beads are given away for free, which is enough for wedding invitations.",
        price = 9.90,
        previewImage = "https://i.etsystatic.com/27397386/r/il/7a8db7/4751622430/il_1588xN.4751622430_lq24.jpg",
        available = 20
    )
    product14 = Product(
        userId = 3,
        name = "Mermaid Jewellery Making Craft Kit for Children",
        description = "A cute little mermaid jewellery making kit, full of glass pearls, crystals and seed beads (tiny beads!). Easy to clip on (and swap around) charms include a silver mermaid charm, a mermaid scales charm, a silver starfish and shell charms.This kit makes three different bracelets - an adjustable friendship bracelet, stretchy bracelet and a festival style ribbon wristband. To finish off the kit, it also includes a ribbon necklace!",
        price = 15.74,
        previewImage = "https://i.etsystatic.com/8631847/r/il/ef8a3c/4014943604/il_1588xN.4014943604_gzis.jpg",
        available = 14
    )
    product15 = Product(
        userId = 3,
        name = "Owl Planter Pots",
        description = "Owl Planter Pots • 6 Pcs Flower Pots • Planter Pots For Succulent, Cactus, Flowers • Owl Home Decor • Owl Planter • Gifts For Her",
        price = 29.98,
        previewImage = "https://i.etsystatic.com/43426622/r/il/7adc8b/4925284132/il_1588xN.4925284132_as40.jpg",
        available = 25
    )
    product16 = Product(
        userId = 4,
        name = "Black Canvas Apron ",
        description = "The stylish and functional apron is handmade using a combination of durable non-waxed canvas and crazy horse full-grain leather. It protects your clothing and is perfect for hard use. The comfortable but durable feel of the apron makes it easy to move around in whilst protecting against scratches while you work.",
        price = 14.99,
        previewImage = "https://i.etsystatic.com/10149778/r/il/c5c8ba/1589758182/il_1588xN.1589758182_9g20.jpg",
        available = 7
    )
    product17 = Product(
        userId = 4,
        name = "Black and White Vase",
        description = "Looking for the perfect home accessory to spruce up your décor? Check out my handmade ceramic vase with intricate black and white starburst design. This playful piece is available in both wide and tall versions, so you can choose the perfect size for your space or get both for a cohesive look. Each vase is crafted with hard work and care, ensuring that it will last for years to come. So if you're looking for a quality piece that will make a big impact, this is the perfect option for you.",
        price = 48.74,
        previewImage = "https://i.etsystatic.com/35687226/r/il/d2e265/4293475779/il_1588xN.4293475779_gpd6.jpg",
        available = 15
    )
    product18 = Product(
        userId = 4,
        name = "EDC Docking Station ",
        description = "Treat him with the best unusual gifts! This wood docking station is a great dads gift, mens gift and boyfriend gift. Useful tech lover wood gift box for men. Use it as a home office organizer station or unusual phone stand and ta-da! everything is in its place! Equally perfect as a home-office docking station, Mens Valet Stand or Desk Organizer.",
        price = 35.99,
        previewImage = "https://i.etsystatic.com/16815222/r/il/52508e/4018087585/il_1588xN.4018087585_70k8.jpg",
        available = 20
    )
    product19 = Product(
        userId = 4,
        name = "The Whole Shebang",
        description = "Receive all current issues of Radical Domesticity (2 - 7)! You can also opt to have the issues gift wrapped with some extras added in (usually a mini-zine and/or stickers). I usually include a handmade card with a generic 'For You' written on it with a blank space for you to write a message. If you'd like it to say something more specific (ie: happy birthday!) please include that in the notes section.",
        price = 20.00,
        previewImage = "https://i.etsystatic.com/6495291/r/il/a5b0e5/886290617/il_1588xN.886290617_a940.jpg",
        available = 14
    )
    product20 = Product(
        userId = 4,
        name = "Digital and printable bullet journal ",
        description = "Color me pretty bullet journal with weekly planner, finished book library, gratitude, habit tracker, 5 minute journaling, morning questions, dots page. Edit this bullet journal to your liking. Color it draw it it. Use it on your ipad or print it! Digital product, digital download, planner and coloring book",
        price = 2.00,
        previewImage = "https://i.etsystatic.com/37271069/r/il/6e4a72/4225573448/il_1588xN.4225573448_f8lo.jpg",
        available = 25
    )
    product21 = Product(
        userId = 5,
        name = "Handcrafted Sun, Moon and Stars Metal Wall Art ",
        description = "For easy installation and hanging your new artwork, we highly recommend purchasing our Magnet Mounting Kit! Celebrating the beauty of the sun with its glorious rays and the moon with its mesmerizing charm, this fascinating celestial metal wall hanging adds stunning multi-color design to home décor, inside or outside.",
        price = 79.00,
        previewImage = "https://i.etsystatic.com/12198112/r/il/f4b433/4443323733/il_1588xN.4443323733_n37d.jpg",
        available = 25
    )
    product22 = Product(
        userId = 5,
        name = "Custom Neon Sign  ",
        description = "The listed price 15$ is only a deposit price as every sign is different and costs different. We encourage you to send us your sign details(text, font and color) in message to see a visual of your sign before purchasing. Know the size, price and delivery details before you make the purchase.",
        price = 15.00,
        previewImage = "https://i.etsystatic.com/26971380/r/il/702111/3483202701/il_1588xN.3483202701_bj16.jpg",
        available = 20
    )
    product23 = Product(
        userId = 5,
        name = "Custom Shaped Pet Pillow ",
        description = "Custom Shaped Pet Pillow, Graduation Gift, Going to college, College Student Gift, Dorm Room Décor, Dorm Gift, Moving Away Gift, Personalized Pet Loss Pillow, Memory Pillow, Father's Day gift A pillow to make the toughest long-distance relationship a bit easier. Get a custom pillow that looks like your BFF here.",
        price = 29.99,
        previewImage = "https://i.etsystatic.com/7404764/r/il/2d51cb/1215065462/il_1588xN.1215065462_bft6.jpg",
        available = 10
    )
    product24 = Product(
        userId = 5,
        name = "Kimono Wrap (Multiple Designs) - Long ",
        description = "The statement piece that will turn heads. With beautiful velvet trim and a modern design, this kimono is slightly heavier in weight and easy to clean and care for, making this flattering robe your elegant kimono cover up for delightful nights in or a festive short kimono cardigan for decadent nights out.",
        price = 170.00,
        previewImage = "https://i.etsystatic.com/21456429/r/il/170b1b/2625028071/il_1588xN.2625028071_5w4f.jpg",
        available = 8
    )
    product25 = Product(
        userId = 5,
        name = "Happy 60th Anniversary Cake Topper ",
        description = "The perfect cake topper for your special celebration! It will not only look beautiful on your cake, but can also be saved as a memory to be placed into your album or scrapbook.",
        price = 9.99,
        previewImage = "https://i.etsystatic.com/12627108/r/il/4bbcca/2726590608/il_1588xN.2726590608_fsby.jpg",
        available = 12
    )

    
    all_products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25 ]
    _ = [db.session.add(product) for product in all_products]
    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))
    db.session.commit()
