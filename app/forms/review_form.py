from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, URLField, SubmitField
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    review = StringField("Review", validators=[DataRequired()])
    stars = IntegerField("Stars", validators=[DataRequired()])
    url1 = URLField("Image2")
    url2 = URLField("Image3")
    submit = SubmitField("Submit")
