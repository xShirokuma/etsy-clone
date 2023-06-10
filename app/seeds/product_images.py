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
        image="https://i.etsystatic.com/9083092/r/il/944664/1748926989/il_1588xN.1748926989_jcly.jpg"
    )
    productImage12 = ProductImage(
        productId=3,
        image="https://i.etsystatic.com/9083092/r/il/75596d/1031053226/il_1588xN.1031053226_7shf.jpg"
    )
    productImage13 = ProductImage(
        productId=3,
        image="https://i.etsystatic.com/9083092/r/il/f87490/1695971368/il_1588xN.1695971368_l678.jpg"
    )
    productImage14 = ProductImage(
        productId=3,
        image="https://i.etsystatic.com/9083092/r/il/2c9b3d/1825774924/il_1588xN.1825774924_asfr.jpg"
    )
    productImage15 = ProductImage(
        productId=3,
        image="https://i.etsystatic.com/9083092/r/il/fea28c/1743433511/il_1588xN.1743433511_m1it.jpg"
    )
    productImage16 = ProductImage(
        productId=4,
        image="https://i.etsystatic.com/9696294/r/il/f75bb3/3611273176/il_1588xN.3611273176_9lxh.jpg"
    )
    productImage17 = ProductImage(
        productId=4,
        image="https://i.etsystatic.com/9696294/r/il/515f44/4984095609/il_1588xN.4984095609_b2b7.jpg"
    )
    productImage18 = ProductImage(
        productId=4,
        image="https://i.etsystatic.com/9696294/r/il/4b9297/2585630651/il_1588xN.2585630651_2sgu.jpg"
    )
    productImage19 = ProductImage(
        productId=4,
        image="https://i.etsystatic.com/9696294/r/il/4fa76b/2585628239/il_1588xN.2585628239_kvnr.jpg"
    )
    productImage20 = ProductImage(
        productId=4,
        image="https://i.etsystatic.com/9696294/r/il/6d26c9/3658888539/il_1588xN.3658888539_bqs3.jpg"
    )
    productImage21 = ProductImage(
        productId=5,
        image="https://i.etsystatic.com/11602422/r/il/ff4d71/4600501001/il_1588xN.4600501001_k95o.jpg"
    )
    productImage22 = ProductImage(
        productId=5,
        image="https://i.etsystatic.com/11602422/r/il/66673d/4553114094/il_1588xN.4553114094_qze7.jpg"
    )
    productImage23 = ProductImage(
        productId=5,
        image="https://i.etsystatic.com/11602422/r/il/cdbc51/1998161670/il_1588xN.1998161670_siwj.jpg"
    )
    productImage24 = ProductImage(
        productId=5,
        image="https://i.etsystatic.com/11602422/r/il/cdbc51/1998161670/il_1588xN.1998161670_siwj.jpg"
    )
    productImage25 = ProductImage(
        productId=5,
        image="https://i.etsystatic.com/11602422/r/il/cdbc51/1998161670/il_1588xN.1998161670_siwj.jpg"
    )
    productImage26 = ProductImage(
        productId=6,
        image="https://i.etsystatic.com/25195323/r/il/f9f001/4325925836/il_1588xN.4325925836_auf4.jpg"
    )
    productImage27 = ProductImage(
        productId=6,
        image="https://i.etsystatic.com/25195323/r/il/013d2a/4982423233/il_1588xN.4982423233_1npd.jpg"
    )
    productImage28 = ProductImage(
        productId=6,
        image="https://i.etsystatic.com/25195323/r/il/5e1ebe/4373320415/il_1588xN.4373320415_aegq.jpg"
    )
    productImage29 = ProductImage(
        productId=6,
        image="https://i.etsystatic.com/25195323/r/il/53ce3d/4325923326/il_1588xN.4325923326_rnfc.jpg"
    )
    productImage30 = ProductImage(
        productId=6,
        image="https://i.etsystatic.com/25195323/r/il/9cd490/4325925690/il_1588xN.4325925690_4va2.jpg"
    )
    productImage31 = ProductImage(
        productId=7,
        image="https://i.etsystatic.com/29995580/r/il/165632/3748596075/il_1588xN.3748596075_k5sv.jpg"
    )
    productImage32 = ProductImage(
        productId=7,
        image="https://i.etsystatic.com/29995580/r/il/26a357/3748595959/il_1588xN.3748595959_bzwo.jpg"
    )
    productImage33 = ProductImage(
        productId=7,
        image="https://i.etsystatic.com/29995580/r/il/e2b214/3748595961/il_1588xN.3748595961_fqk2.jpg"
    )
    productImage34 = ProductImage(
        productId=7,
        image="https://i.etsystatic.com/29995580/r/il/26a357/3748595959/il_1588xN.3748595959_bzwo.jpg"
    )
    productImage35 = ProductImage(
        productId=7,
        image="https://i.etsystatic.com/29995580/r/il/e2b214/3748595961/il_1588xN.3748595961_fqk2.jpg"
    )
    productImage36 = ProductImage(
        productId=8,
        image="https://i.etsystatic.com/7292566/r/il/4ab239/778890797/il_1588xN.778890797_dd2j.jpg"
    )
    productImage37 = ProductImage(
        productId=8,
        image="https://i.etsystatic.com/7292566/r/il/a358b2/778890777/il_1588xN.778890777_p0ud.jpg"
    )
    productImage38 = ProductImage(
        productId=8,
        image="https://i.etsystatic.com/7292566/r/il/851b23/778854498/il_1588xN.778854498_eajk.jpg"
    )
    productImage39 = ProductImage(
        productId=8,
        image="https://i.etsystatic.com/7292566/r/il/a358b2/778890777/il_1588xN.778890777_p0ud.jpg"
    )
    productImage40 = ProductImage(
        productId=8,
        image="https://i.etsystatic.com/7292566/r/il/851b23/778854498/il_1588xN.778854498_eajk.jpg"
    )
    productImage41 = ProductImage(
        productId=9,
        image="https://i.etsystatic.com/14397144/r/il/584642/1119687158/il_1588xN.1119687158_9pyg.jpg"
    )
    productImage42 = ProductImage(
        productId=9,
        image="https://i.etsystatic.com/14397144/r/il/089c3e/1166290247/il_1588xN.1166290247_18p6.jpg"
    )
    productImage43 = ProductImage(
        productId=9,
        image="https://i.etsystatic.com/14397144/r/il/089c3e/1166290247/il_1588xN.1166290247_18p6.jpg"
    )
    productImage44 = ProductImage(
        productId=10,
        image="https://i.etsystatic.com/43992176/r/il/b4e6b6/4966823764/il_1588xN.4966823764_87py.jpg"
    )
    productImage45 = ProductImage(
        productId=10,
        image="https://i.etsystatic.com/43992176/r/il/2b013e/5000671725/il_1588xN.5000671725_kozm.jpg"
    )
    productImage46 = ProductImage(
        productId=10,
        image="https://i.etsystatic.com/43992176/r/il/2b7b2a/4952408038/il_1588xN.4952408038_tu22.jpg"
    )
    productImage47 = ProductImage(
        productId=11,
        image="https://i.etsystatic.com/25960492/r/il/a905ac/4233743066/il_1588xN.4233743066_3h5u.jpg"
    )
    productImage48 = ProductImage(
        productId=11,
        image="https://i.etsystatic.com/25960492/r/il/7dc434/4310473440/il_1588xN.4310473440_i20y.jpg"
    )
    productImage49 = ProductImage(
        productId=11,
        image="https://i.etsystatic.com/25960492/r/il/4a18c7/4188014510/il_1588xN.4188014510_pthg.jpg"
    )
    productImage50 = ProductImage(
        productId=12,
        image="https://i.etsystatic.com/9197180/r/il/cee997/3562526079/il_1588xN.3562526079_h3ge.jpg"
    )
    productImage51 = ProductImage(
        productId=12,
        image="https://i.etsystatic.com/9197180/r/il/46edad/3562488129/il_1588xN.3562488129_g7sb.jpg"
    )
    productImage52 = ProductImage(
        productId=12,
        image="https://i.etsystatic.com/9197180/r/il/fc2b01/1887704288/il_1588xN.1887704288_esy6.jpg"
    )
    productImage53 = ProductImage(
        productId=13,
        image="https://i.etsystatic.com/27397386/r/il/7a8db7/4751622430/il_1588xN.4751622430_lq24.jpg"
    )
    productImage54 = ProductImage(
        productId=13,
        image="https://i.etsystatic.com/27397386/r/il/2dd215/4745734526/il_1588xN.4745734526_80nv.jpg"
    )
    productImage55 = ProductImage(
        productId=14,
        image="https://i.etsystatic.com/8631847/r/il/ef8a3c/4014943604/il_1588xN.4014943604_gzis.jpg"
    )
    productImage56 = ProductImage(
        productId=14,
        image="https://i.etsystatic.com/8631847/r/il/1c335b/2641069540/il_1588xN.2641069540_anew.jpg"
    )
    productImage57 = ProductImage(
        productId=15,
        image="https://i.etsystatic.com/43426622/r/il/7adc8b/4925284132/il_1588xN.4925284132_as40.jpg"
    )
    productImage58 = ProductImage(
        productId=15,
        image="https://i.etsystatic.com/43426622/r/il/8dcad9/4925262714/il_1588xN.4925262714_l3t9.jpg"
    )
    productImage59 = ProductImage(
        productId=16,
        image="https://i.etsystatic.com/10149778/r/il/c5c8ba/1589758182/il_1588xN.1589758182_9g20.jpg"
    )
    productImage60 = ProductImage(
        productId=16,
        image="https://i.etsystatic.com/10149778/r/il/1e8c13/1770129764/il_1588xN.1770129764_def2.jpg"
    )
    productImage61 = ProductImage(
        productId=17,
        image="https://i.etsystatic.com/35687226/r/il/d2e265/4293475779/il_1588xN.4293475779_gpd6.jpg"
    )
    productImage62 = ProductImage(
        productId=17,
        image="https://i.etsystatic.com/35687226/r/il/cd6c9b/4252921723/il_1588xN.4252921723_gdr9.jpg"
    )
    productImage63 = ProductImage(
        productId=18,
        image="https://i.etsystatic.com/16815222/r/il/52508e/4018087585/il_1588xN.4018087585_70k8.jpg"
    )
    productImage64 = ProductImage(
        productId=18,
        image="https://i.etsystatic.com/16815222/r/il/7cf2a7/3883831541/il_1588xN.3883831541_b96x.jpg"
    )
    productImage65 = ProductImage(
        productId=19,
        image="https://i.etsystatic.com/6495291/r/il/a5b0e5/886290617/il_1588xN.886290617_a940.jpg"
    )
    productImage66 = ProductImage(
        productId=19,
        image="https://i.etsystatic.com/6495291/r/il/a5b0e5/886290617/il_1588xN.886290617_a940.jpg"
    )
    productImage67 = ProductImage(
        productId=20,
        image="https://i.etsystatic.com/37271069/r/il/6e4a72/4225573448/il_1588xN.4225573448_f8lo.jpg"
    )
    productImage68 = ProductImage(
        productId=20,
        image="https://i.etsystatic.com/37271069/r/il/44e061/4273226563/il_1588xN.4273226563_84l7.jpg"
    )
    productImage69 = ProductImage(
        productId=21,
        image="https://i.etsystatic.com/12198112/r/il/f4b433/4443323733/il_1588xN.4443323733_n37d.jpg"
    )
    productImage70 = ProductImage(
        productId=21,
        image="https://i.etsystatic.com/12198112/r/il/43c1e9/4357346233/il_1588xN.4357346233_6w0w.jpg"
    )
    productImage71 = ProductImage(
        productId=22,
        image="https://i.etsystatic.com/26971380/r/il/702111/3483202701/il_1588xN.3483202701_bj16.jpg"
    )
    productImage72 = ProductImage(
        productId=22,
        image="https://i.etsystatic.com/26971380/r/il/4edf98/3483202783/il_1588xN.3483202783_l3l1.jpg"
    )
    productImage73 = ProductImage(
        productId=23,
        image="https://i.etsystatic.com/7404764/r/il/2d51cb/1215065462/il_1588xN.1215065462_bft6.jpg"
    )
    productImage74 = ProductImage(
        productId=23,
        image="https://i.etsystatic.com/7404764/r/il/081a87/1935081432/il_1588xN.1935081432_bcih.jpg"
    )
    productImage75 = ProductImage(
        productId=24,
        image="https://i.etsystatic.com/21456429/r/il/170b1b/2625028071/il_1588xN.2625028071_5w4f.jpg"
    )
    productImage76 = ProductImage(
        productId=24,
        image="https://i.etsystatic.com/21456429/r/il/786cd7/3455244031/il_1588xN.3455244031_suvj.jpg"
    )
    productImage77 = ProductImage(
        productId=25,
        image="https://i.etsystatic.com/12627108/r/il/4bbcca/2726590608/il_1588xN.2726590608_fsby.jpg"
    )
    productImage78 = ProductImage(
        productId=25,
        image="https://i.etsystatic.com/12627108/r/il/31f7be/2516339944/il_1588xN.2516339944_1spp.jpg"
    )


    productImageId1 = [productImage1, productImage2, productImage3, productImage4, productImage5 ]
    productImageId2 = [productImage6, productImage7, productImage8, productImage9, productImage10 ]
    productImageId3 = [productImage11, productImage12, productImage13, productImage14, productImage15 ]
    productImageId4 = [productImage16, productImage17, productImage18, productImage19, productImage20 ]
    productImageId5 = [productImage21, productImage22, productImage23, productImage24, productImage25 ]
    productImageId6 = [productImage26, productImage27, productImage28, productImage29, productImage30 ]
    productImageId7 = [productImage31, productImage32, productImage33, productImage34, productImage35 ]
    productImageId8 = [productImage36, productImage37, productImage38, productImage39, productImage40 ]
    productImageId9 = [productImage41, productImage42, productImage43 ]
    productImageId10 = [productImage44, productImage45, productImage46 ]
    productImageId11 = [productImage47, productImage48, productImage49 ]
    productImageId12 = [productImage50, productImage51, productImage52 ]
    productImageId13 = [productImage53, productImage54 ]
    productImageId14 = [productImage55, productImage56 ]
    productImageId15 = [productImage57, productImage58 ]
    productImageId16 = [productImage59, productImage60 ]
    productImageId17 = [productImage61, productImage62 ]
    productImageId18 = [productImage63, productImage64 ]
    productImageId19 = [productImage65, productImage66 ]
    productImageId20 = [productImage67, productImage68 ]
    productImageId21 = [productImage69, productImage70 ]
    productImageId22 = [productImage71, productImage72 ]
    productImageId23 = [productImage73, productImage74 ]
    productImageId24 = [productImage75, productImage76 ]
    productImageId25 = [productImage77, productImage78 ]
    
    
    
    

    productImages = [productImageId1, 
                     productImageId2,
                     productImageId3,
                     productImageId4,
                     productImageId5,
                     productImageId6, 
                     productImageId7,
                     productImageId8,
                     productImageId9,
                     productImageId10,
                     productImageId11,
                     productImageId12,
                     productImageId13,
                     productImageId14, 
                     productImageId15,
                     productImageId16,
                     productImageId17,
                     productImageId18,
                     productImageId19,
                     productImageId20,
                     productImageId21,
                     productImageId22,
                     productImageId23,
                     productImageId24,
                     productImageId25,
                     ]

    for item in productImages:
        for i in item:
            db.session.add(i)
    
    # _ = [db.session.add(item) for item in productImageId1]
    # __ = [db.session.add(item) for item in productImageId2]
    # ___ = [db.session.add(item) for item in productImageId3]
    # ____ = [db.session.add(item) for item in productImageId4]
    # _____ = [db.session.add(item) for item in productImageId5]
    db.session.commit()

def undo_product_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM product_images"))
        
    db.session.commit()
