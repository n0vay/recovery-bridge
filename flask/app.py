import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
from flask_cors import CORS, cross_origin

# Create flask app
flask_app = Flask(__name__)
model = pickle.load(open("model.pkl", "rb"))

@flask_app.route("/")
def Home():
    return render_template("index.html")

@flask_app.route("/predict", methods = ["POST"])
@cross_origin(origin='*',headers=['Content- Type','Authorization'])
def predict():
    print("Got request")
    print(request.form)
    float_features = [float(x) for x in request.form.values()]
    features = [np.array(float_features)]
    prediction = model.predict(features)
    if prediction==[0]:
        prediction = str('Not ready to discharge')
    else:
        prediction = str('ready to discharge')   
    return prediction 
    #return render_template("index.html", prediction_number = "Patient status is {}".format(prediction))

if __name__ == "__main__":
    flask_app.run(debug=True)