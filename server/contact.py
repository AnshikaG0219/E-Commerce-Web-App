from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contact.db'
db = SQLAlchemy(app)


class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    message = db.Column(db.String(2000), nullable=True)

    def __repr__(self):
        return f"Contact('{self.name},{self.email},{self.password},{self.message}')"


@app.route('/contact', methods=['POST'])
def contact_details():
    details = request.get_json()

    new_contact = Contact(
        name=details['name'],
        email=details['email'],
        password=details['password'],
        message=details['message']
    )

    db.session.add(new_contact)
    db.session.commit()

    return "Successfully sent message"


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
