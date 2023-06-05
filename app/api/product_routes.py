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

@product_routes.route('/new', methods=["GET", "POST"])
def create_product():
    form = ProductForm()
    if form.validate_on_submit():
        product = Product(
                          name=form.data["name"],
                          description=form.data["description"],
                          price=form.data["price"],
                          preivewImage=form.data["preivewImage"],
                          available=form.data["available"])
        db.session.add(product)
        db.session.commit()
        return redirect("/")
    
    if form.errors:
        print(form.errors)
        return redirect("/new")
    
    return "<h1>Product Form<h1>"