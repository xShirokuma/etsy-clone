from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, IntegerField, URLField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange

class ProductForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired(), Length(max=255)])
    description = StringField("Description", validators=[DataRequired()])
    price = FloatField("Price", validators=[DataRequired()])
    previewImage = URLField("PreviewImage", validators=[DataRequired()])
    url1 = URLField("Image2")
    url2 = URLField("Image3")
    url3 = URLField("Image4")
    url4 = URLField("Image5")
    available = IntegerField("Available", validators=[DataRequired(), NumberRange(min=1)])
    submit = SubmitField("Submit")