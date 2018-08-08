from flask import Flask, jsonify, request, render_template
from pprint import pprint
from main.services import contact
import os
import socket

# Setup

app = Flask(__name__)

class TemplateFix(Flask):
    jinja_options = Flask.jinja_options.copy()
    jinja_options.update(dict(
        variable_start_string="%%",
        variable_end_string="%%"
    ))

app = TemplateFix(__name__)

# Routes

@app.route("/")
def serve_app():
    return render_template("index.html")

@app.route("/api/contact", methods=["POST"])
def contacted():
    contact.add_contact(request.get_json())
    return "success"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
