import os

from flask import Flask, send_from_directory, render_template, request, redirect, url_for

app = Flask(__name__, static_url_path='', static_folder='ui/build/')

@app.route('/')
def index():
    return send_from_directory('ui/build/', 'index.html')


@app.route('/checkin', methods=["POST", "GET"])
def checkIn_hardware(projectId, qty):
    if request.method == "POST":
        quant = request.form["qty"]

        return redirect(url_for("quantity", qty=quant))
    else:
        return render_template("./src/App.js")

@app.route("/<qty>")
def quantity(qty):
    return f"<h1>{qty} hardware checked in</h1>"
@app.route('/checkout', methods=["POST", "GET"])
def checkOut_hardware(projectid, qty):
    if request.method == "POST":
        quan = request.form["qty"]

        return redirect(url_for("quantity", qt=quan))
    else:
        return render_template("./src/App.js")

@app.route("/<qt>")
def quantit(qt):
    return f"<h2>{qt} hardware checked out</h2>"
@app.route('/joinProj', methods=["POST", "GET"])
def joinProject(projectid):
    return f"<h3>Joined {projectid}</h3>"

@app.route('/leaveProj', methods=["POST", "GET"])
def leaveProject(projectid):
    return f"<h4>Left {projectid}</h4>"

if __name__ == '__main__':
    # flask_app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))