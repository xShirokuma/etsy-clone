from app.models import db, ReviewImage, environment, SCHEMA
from sqlalchemy.sql import text

def seed_review_images():
    reviewImage1 = ReviewImage(
        reviewId = 1,
        image="https://i.etsystatic.com/5977919/r/il/ce2b8c/2210427839/il_1588xN.2210427839_jnp9.jpg"
    )
    reviewImage2 = ReviewImage(
        reviewId = 1,
        image="https://i.etsystatic.com/5977919/r/il/323dd8/2210427867/il_794xN.2210427867_lfnj.jpg"
    )
    reviewImage3 = ReviewImage(
        reviewId = 2,
        image="https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage4 = ReviewImage(
        reviewId = 3,
        image="https://i.etsystatic.com/5977919/r/il/6cd869/1901461861/il_794xN.1901461861_e83u.jpg"
    )
    reviewImage5 = ReviewImage(
        reviewId = 4,
        image="https://i.etsystatic.com/17299734/r/il/9851cf/3405866237/il_1588xN.3405866237_tt7t.jpg"
    )
    reviewImage6 = ReviewImage(
        reviewId = 4,
        image="https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_1588xN.3405865469_2t2q.jpg"
    )
    reviewImage7 = ReviewImage(
        reviewId = 5,
        image="https://i.etsystatic.com/17299734/r/il/d1b8a3/3405865469/il_1588xN.3405865469_2t2q.jpg"
    )
    reviewImage8 = ReviewImage(
        reviewId = 5,
        image="https://i.etsystatic.com/17299734/r/il/ae919a/4132049593/il_1588xN.4132049593_1sml.jpg"
    )
    reviewImage9 = ReviewImage(
        reviewId = 7,
        image="https://i.etsystatic.com/9083092/r/il/944664/1748926989/il_1588xN.1748926989_jcly.jpg"
    )
    reviewImage10 = ReviewImage(
        reviewId = 7,
        image="https://i.etsystatic.com/9083092/r/il/fea28c/1743433511/il_1588xN.1743433511_m1it.jpg"
    )
    reviewImage11 = ReviewImage(
        reviewId = 8,
        image="https://i.etsystatic.com/9696294/r/il/6d26c9/3658888539/il_1588xN.3658888539_bqs3.jpg"
    )
    reviewImage12 = ReviewImage(
        reviewId = 9,
        image="https://i.etsystatic.com/9696294/r/il/4fa76b/2585628239/il_1588xN.2585628239_kvnr.jpg"
    )
    reviewImage13 = ReviewImage(
        reviewId = 11,
        image="https://i.etsystatic.com/11602422/r/il/ff4d71/4600501001/il_1588xN.4600501001_k95o.jpg"
    )
    reviewImage14 = ReviewImage(
        reviewId = 11,
        image="https://i.etsystatic.com/11602422/r/il/66673d/4553114094/il_1588xN.4553114094_qze7.jpg"
    )
    reviewImage15 = ReviewImage(
        reviewId = 13,
        image="https://i.etsystatic.com/25195323/r/il/f9f001/4325925836/il_1588xN.4325925836_auf4.jpg"
    )
    reviewImage16 = ReviewImage(
        reviewId = 14,
        image="https://i.etsystatic.com/25195323/r/il/5e1ebe/4373320415/il_1588xN.4373320415_aegq.jpg"
    )
    reviewImage17 = ReviewImage(
        reviewId = 14,
        image="https://i.etsystatic.com/25195323/r/il/013d2a/4982423233/il_1588xN.4982423233_1npd.jpg"
    )
    reviewImage18 = ReviewImage(
        reviewId = 15,
        image="https://i.etsystatic.com/25195323/r/il/53ce3d/4325923326/il_1588xN.4325923326_rnfc.jpg"
    )
    reviewImage19 = ReviewImage(
        reviewId = 15,
        image="https://i.etsystatic.com/25195323/r/il/9cd490/4325925690/il_1588xN.4325925690_4va2.jpg"
    )
    reviewImage20 = ReviewImage(
        reviewId = 17,
        image="https://i.etsystatic.com/7292566/r/il/4ab239/778890797/il_1588xN.778890797_dd2j.jpg"
    )
    reviewImage21 = ReviewImage(
        reviewId = 18,
        image="https://i.etsystatic.com/7292566/r/il/a358b2/778890777/il_1588xN.778890777_p0ud.jpg"
    )
    reviewImage22 = ReviewImage(
        reviewId = 20,
        image="https://i.etsystatic.com/43992176/r/il/b4e6b6/4966823764/il_1588xN.4966823764_87py.jpg"
    )
    reviewImage23 = ReviewImage(
        reviewId = 20,
        image="https://i.etsystatic.com/43992176/r/il/2b013e/5000671725/il_1588xN.5000671725_kozm.jpg"
    )
    reviewImage24 = ReviewImage(
        reviewId = 21,
        image="https://i.etsystatic.com/43992176/r/il/2b7b2a/4952408038/il_1588xN.4952408038_tu22.jpg"
    )
    reviewImage25 = ReviewImage(
        reviewId = 21,
        image="https://i.etsystatic.com/43992176/r/il/b4e6b6/4966823764/il_1588xN.4966823764_87py.jpg"
    )
    reviewImage26 = ReviewImage(
        reviewId = 22,
        image="https://i.etsystatic.com/25960492/r/il/a905ac/4233743066/il_1588xN.4233743066_3h5u.jpg"
    )
    reviewImage27 = ReviewImage(
        reviewId = 22,
        image="https://i.etsystatic.com/25960492/r/il/7dc434/4310473440/il_1588xN.4310473440_i20y.jpg"
    )
    reviewImage28 = ReviewImage(
        reviewId = 24,
        image="https://i.etsystatic.com/9197180/r/il/cee997/3562526079/il_1588xN.3562526079_h3ge.jpg"
    )
    reviewImage29 = ReviewImage(
        reviewId = 25,
        image="https://i.etsystatic.com/27397386/r/il/7a8db7/4751622430/il_1588xN.4751622430_lq24.jpg"
    )
    reviewImage30 = ReviewImage(
        reviewId = 26,
        image="https://i.etsystatic.com/27397386/r/il/7a8db7/4751622430/il_1588xN.4751622430_lq24.jpg"
    )
    reviewImage31 = ReviewImage(
        reviewId = 26,
        image="https://i.etsystatic.com/27397386/r/il/2dd215/4745734526/il_1588xN.4745734526_80nv.jpg"
    )
    reviewImage32 = ReviewImage(
        reviewId = 28,
        image="https://i.etsystatic.com/43426622/r/il/7adc8b/4925284132/il_1588xN.4925284132_as40.jpg"
    )
    reviewImage33 = ReviewImage(
        reviewId = 28,
        image="https://i.etsystatic.com/43426622/r/il/8dcad9/4925262714/il_1588xN.4925262714_l3t9.jpg"
    )
    reviewImage34 = ReviewImage(
        reviewId = 29,
        image="https://i.etsystatic.com/43426622/r/il/7adc8b/4925284132/il_1588xN.4925284132_as40.jpg"
    )
    reviewImage35 = ReviewImage(
        reviewId = 29,
        image="https://i.etsystatic.com/43426622/r/il/8dcad9/4925262714/il_1588xN.4925262714_l3t9.jpg"
    )
    reviewImage36 = ReviewImage(
        reviewId = 30,
        image="https://i.etsystatic.com/10149778/r/il/c5c8ba/1589758182/il_1588xN.1589758182_9g20.jpg"
    )
    reviewImage37 = ReviewImage(
        reviewId = 31,
        image="https://i.etsystatic.com/10149778/r/il/1e8c13/1770129764/il_1588xN.1770129764_def2.jpg"
    )
    reviewImage38 = ReviewImage(
        reviewId = 32,
        image="https://i.etsystatic.com/35687226/r/il/d2e265/4293475779/il_1588xN.4293475779_gpd6.jpg"
    )
    reviewImage39 = ReviewImage(
        reviewId = 32,
        image="https://i.etsystatic.com/35687226/r/il/cd6c9b/4252921723/il_1588xN.4252921723_gdr9.jpg"
    )
    reviewImage40 = ReviewImage(
        reviewId = 33,
        image="https://i.etsystatic.com/35687226/r/il/d2e265/4293475779/il_1588xN.4293475779_gpd6.jpg"
    )
    reviewImage41 = ReviewImage(
        reviewId = 33,
        image="https://i.etsystatic.com/35687226/r/il/cd6c9b/4252921723/il_1588xN.4252921723_gdr9.jpg"
    )
    reviewImage42 = ReviewImage(
        reviewId = 34,
        image="https://i.etsystatic.com/6495291/r/il/a5b0e5/886290617/il_1588xN.886290617_a940.jpg"
    )
    reviewImage43 = ReviewImage(
        reviewId = 35,
        image="https://i.etsystatic.com/6495291/r/il/a5b0e5/886290617/il_1588xN.886290617_a940.jpg"
    )
    reviewImage44 = ReviewImage(
        reviewId = 35,
        image="https://i.etsystatic.com/6495291/r/il/a5b0e5/886290617/il_1588xN.886290617_a940.jpg"
    )
    reviewImage45 = ReviewImage(
        reviewId = 36,
        image="https://i.etsystatic.com/6495291/r/il/a5b0e5/886290617/il_1588xN.886290617_a940.jpg"
    )
    reviewImage46 = ReviewImage(
        reviewId = 37,
        image="https://i.etsystatic.com/37271069/r/il/6e4a72/4225573448/il_1588xN.4225573448_f8lo.jpg"
    )
    reviewImage47 = ReviewImage(
        reviewId = 37,
        image="https://i.etsystatic.com/37271069/r/il/44e061/4273226563/il_1588xN.4273226563_84l7.jpg"
    )
    reviewImage48 = ReviewImage(
        reviewId = 38,
        image="https://i.etsystatic.com/37271069/r/il/6e4a72/4225573448/il_1588xN.4225573448_f8lo.jpg"
    )
    reviewImage49 = ReviewImage(
        reviewId = 38,
        image = "https://i.etsystatic.com/5977919/r/il/8d7d5d/2210427861/il_794xN.2210427861_3t4c.jpg"
    )
    reviewImage50 = ReviewImage(
        reviewId = 39,
        image="https://i.etsystatic.com/37271069/r/il/44e061/4273226563/il_1588xN.4273226563_84l7.jpg"
    )
    reviewImage51 = ReviewImage(
        reviewId = 40,
        image="https://i.etsystatic.com/12198112/r/il/f4b433/4443323733/il_1588xN.4443323733_n37d.jpg"
    )
    reviewImage52 = ReviewImage(
        reviewId = 42,
        image="https://i.etsystatic.com/12198112/r/il/43c1e9/4357346233/il_1588xN.4357346233_6w0w.jpg"
    )
    reviewImage53 = ReviewImage(
        reviewId = 43,
        image="https://i.etsystatic.com/26971380/r/il/702111/3483202701/il_1588xN.3483202701_bj16.jpg"
    )
    reviewImage54 = ReviewImage(
        reviewId = 44,
        image="https://i.etsystatic.com/7404764/r/il/2d51cb/1215065462/il_1588xN.1215065462_bft6.jpg"
    )
    reviewImage55 = ReviewImage(
        reviewId = 44,
        image="https://i.etsystatic.com/7404764/r/il/081a87/1935081432/il_1588xN.1935081432_bcih.jpg"
    )
    reviewImage56 = ReviewImage(
        reviewId = 45,
        image="https://i.etsystatic.com/7404764/r/il/2d51cb/1215065462/il_1588xN.1215065462_bft6.jpg"
    )
    reviewImage57 = ReviewImage(
        reviewId = 46,
        image="https://i.etsystatic.com/21456429/r/il/170b1b/2625028071/il_1588xN.2625028071_5w4f.jpg"
    )
    reviewImage58 = ReviewImage(
        reviewId = 46,
        image="https://i.etsystatic.com/21456429/r/il/786cd7/3455244031/il_1588xN.3455244031_suvj.jpg"
    )
    reviewImage59 = ReviewImage(
        reviewId = 48,
        image="https://i.etsystatic.com/12627108/r/il/4bbcca/2726590608/il_1588xN.2726590608_fsby.jpg"
    )
    reviewImage60 = ReviewImage(
        reviewId = 48,
        image="https://i.etsystatic.com/12627108/r/il/31f7be/2516339944/il_1588xN.2516339944_1spp.jpg"
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
