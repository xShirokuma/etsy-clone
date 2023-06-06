from flask import Blueprint, jsonify, session, request, redirect
from app.models import db, Product, ProductImage
from flask_login import current_user, login_required
from app.forms import ProductForm


product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def get_products():
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}

@product_routes.route('/<int:productId>')
def get_productDetails(productId):
    product = Product.query.get(productId)
    return {'product': product.to_dict()}

@product_routes.route('/', methods=["POST"])
def create_product():
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        product = Product(
            userId=3,
            name=form.data["name"],
            description=form.data["description"],
            price=form.data["price"],
            previewImage=form.data["previewImage"],
            available=form.data["available"])
        db.session.add(product)
        db.session.commit()
        return {'product': product.to_dict()}
    else:
        print(form.errors)
        return "<h1>Product Form<h1>"
    
    if form.errors:
        print(form.errors)
