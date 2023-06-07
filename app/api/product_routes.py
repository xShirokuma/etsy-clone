from flask import Blueprint, jsonify, session, request, redirect
from app.models import db, Product, ProductImage, Review, ReviewImage
from flask_login import current_user, login_required
from app.forms import ProductForm, ReviewForm


product_routes = Blueprint('products', __name__)

@product_routes.route('<int:productId>/reviews/<int:reviewId>', methods = ["PUT"])
def update_review(productId, reviewId):
    review = Review.query.get(reviewId)
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("review is ", review.review, review.stars)
    if form.validate_on_submit():
        if form.data["review"]:
            review.review = form.data["review"]
        if form.data["stars"]:
            review.stars = form.data["stars"]
        
        db.session.commit()
        return {'review': review.to_dict()}
    else:
        print(form.errors)
        return "Testing"

@product_routes.route('<int:productId>/reviews/<int:reviewId>', methods = ["DELETE"])
def delete_review(productId, reviewId):
    review = Review.query.get(reviewId)
    deleted_review = {'review': review.to_dict()}
    db.session.delete(review)
    db.session.commit()
    return deleted_review

@product_routes.route('<int:productId>/reviews',methods =['POST'])
def create_review(productId):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies.get('csrf_token')
    if form.validate_on_submit():
        review = Review(
            productId = productId,
            userId=current_user.id,
            # userId = 3,
            review=form.data["review"],
            stars=form.data["stars"]
        )
        db.session.add(review)
        db.session.commit()

        reviewUrls = [form.data["url1"], form.data["url2"]]
        for imageUrl in reviewUrls:
            reviewImage = ReviewImage(
                image = imageUrl,
                reviewId = review.id
            )
            db.session.add(reviewImage)
        db.session.commit()
        return {'review': review.to_dict()}

@product_routes.route('/<int:productId>')
def get_productDetails(productId):
    product = Product.query.get(productId)
    return {'product': product.to_dict()}

@product_routes.route('/new', methods=["POST"])
def create_product():
    form = ProductForm()
    form['csrf_token'].data = request.cookies.get('csrf_token')
    if form.validate_on_submit():
        product = Product(
            userId=current_user.id,
            name=form.data["name"],
            description=form.data["description"],
            price=form.data["price"],
            previewImage=form.data["previewImage"],
            available=form.data["available"])
        db.session.add(product)
        db.session.commit()

        imageUrls = [form.data["previewImage"], form.data["url1"], form.data["url2"], form.data["url3"], form.data["url4"]]
        for imageUrl in imageUrls:
            productImage = ProductImage(
                image = imageUrl,
                productId = product.id
            )
            db.session.add(productImage)
        db.session.commit()
        return {'product': product.to_dict()}
    
    if form.errors:
        print(form.errors)

@product_routes.route('/')
def get_products():
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}

@product_routes.route('/<int:productId>', methods=["PUT"])
def edit_product(productId):
    product = Product.query.get(productId)
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        if form.data["name"]:
            product.name = form.data["name"]
        if form.data["description"]:
            product.description = form.data["description"]
        if form.data["price"]:
            product.price = form.data["price"]
        if form.data["available"]:
            product.available = form.data["available"]
        
        db.session.commit()
        return {'product': product.to_dict()}
    else:
        print(form.errors)
        return "<h1>Product Form<h1>"

@product_routes.route('/<int:productId>', methods=["DELETE"])
def delete_product(productId):
    product = Product.query.get(productId)
    deleted_product = {'product': product.to_dict()}
    db.session.delete(product)
    db.session.commit()
    return deleted_product