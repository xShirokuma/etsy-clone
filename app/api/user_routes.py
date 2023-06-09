from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Product, db, CartItem

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/favorites/products/<int:productId>', methods=['PUT'])
def add_fav(id, productId):
    user = User.query.get(id)
    product = Product.query.get(productId)
    product.product_favorites.append(user)

    db.session.commit()
    return {'user': user.to_dict()}

@user_routes.route('/<int:id>/favorites/products/<int:productId>', methods=['DELETE'])
def delete_fav(id, productId):
    user = User.query.get(id)
    product = Product.query.get(productId)
    product.product_favorites.remove(user)

    db.session.commit()
    return {'user': user.to_dict()}

@user_routes.route('/<int:id>/cart/products/<int:productId>/<int:value>', methods=['PUT'])
def add_cart(id, productId, value):
    user = User.query.get(id)
    newCartItem = CartItem(
        sessionId=id,
        productId=productId,
        quantity=value
    )
    db.session.add(newCartItem)
    user.cart_session.cart.append(newCartItem)

    db.session.commit()
    return {'newCartItem': newCartItem.to_dict()}