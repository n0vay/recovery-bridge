import axios from "axios";
import React from "react";

function PatientPrediction2({ predictionNumber }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let config = {
      mode : "cors",
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:5000/predict",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <h1>Patient Status</h1>

      <form onSubmit={handleSubmit}>
        <input type="number" name="AGE" placeholder="AGE" required />
        <input type="number" name="ALCDRUG" placeholder="ALCDRUG" required />
        <input type="number" name="ALCFLG" placeholder="ALCFLG" required />
        <input type="number" name="AMPHFLG" placeholder="AMPHFLG" required />
        <input type="number" name="DETCRIM" placeholder="DETCRIM" required />
        <input type="number" name="DSMCRIT" placeholder="DSMCRIT" required />
        <input type="number" name="EMPLOY" placeholder="EMPLOY" required />
        <input type="number" name="EMPLOY_D" placeholder="EMPLOY_D" required />
        <input type="number" name="FREQ1" placeholder="FREQ1" required />
        <input type="number" name="LOS" placeholder="LOS" required />
        <input type="number" name="MARFLG" placeholder="MARFLG" required />
        <input type="number" name="METHFLG" placeholder="METHFLG" required />
        <input type="number" name="OPSYNFLG" placeholder="OPSYNFLG" required />
        <input type="number" name="SERVICES" placeholder="SERVICES" required />

        <button type="submit" className="btn btn-primary btn-block btn-large">
          Predict
        </button>
      </form>

      <br />
      <br />
      {predictionNumber}
    </div>
  );
}

export default PatientPrediction2;
