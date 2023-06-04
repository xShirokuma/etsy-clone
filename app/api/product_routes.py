from flask import Blueprint, jsonify, session, request
from app.models import db, Product, ProductImage
from flask_login import current_user, login_required


product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def get_products():
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}

@product_routes.route('/<int:productId>')
def get_productDetails(productId):
    product = Product.query.get(productId)
    return {'product': product.to_dict()}
