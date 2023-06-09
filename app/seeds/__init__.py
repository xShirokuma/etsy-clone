from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .product_images import seed_product_images, undo_product_images
from .reviews import seed_reviews, undo_reviews
from .review_images import seed_review_images, undo_review_images
from .cart_items import seed_cart_items, undo_cart_items
from .shopping_session import seed_shopping_session, undo_shopping_session

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_products()
        undo_product_images()
        undo_reviews()
        undo_review_images()
        undo_shopping_session()
        undo_cart_items()
    seed_users()
    seed_products()
    seed_product_images()
    seed_reviews()
    seed_review_images()
    seed_shopping_session()
    seed_cart_items()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_products()
    undo_product_images()
    undo_reviews()
    undo_review_images()
    undo_shopping_session()
    undo_cart_items()
    # Add other undo functions here
