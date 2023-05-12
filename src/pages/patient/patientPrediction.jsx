import React from "react";
import Sidenav from "../../components/sidenav";
import Navbar from "../../components/navbar";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { Typography } from "@mui/material";
import { useState } from "react";

function PatientPrediction({ initialValues = null }) {
  const [data, setData] = useState("");

  const formik = useFormik({
    initialValues: initialValues ?? {
      name: "",
      patientid: "",
      age: "",
      substance: "",
      alcohol: "",
      amphetamines: "",
      justice: "",
      dsm: "",
      empadmission: "",
      empdischarge: "",
      frequency: "",
      lengthstay: "",
      marijuana: "",
      methadone: "",
      other: "",
      discharge: "",
      treatment: "",
    },

    onSubmit: (values) => {
      console.log(values);
      fetch(
        "https://q8x543ybpk.execute-api.us-east-1.amazonaws.com/beta/send-data",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Prediction result:", data);
          // Do something with the prediction result
          setData(JSON.parse(data.body)["prediction"]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    // onSubmit: (values) => {
    //   console.log(values);
    //   fetch("https://q8x543ybpk.execute-api.us-east-1.amazonaws.com/beta/send-data", {
    //     method: "POST",
    //     mode: 'cors',
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Prediction result:", data);
    //       // Store the prediction result in the component state
    //       this.setState({ predictionResult: data });
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    // },
  });

  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <form onSubmit={formik.handleSubmit}>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div>Patient Prediction</div>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="name"
                label="Full Name"
                type="text"
                fullWidth
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="patientid"
                label="Patient ID"
                fullWidth
                value={formik.values.patientid}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="age"
                label="Age at admission"
                type="number"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={formik.values.age}
                onChange={formik.handleChange}
              />{" "}
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="substance"
                label="Substance use type"
                type="text"
                fullWidth
                value={formik.values.substance}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="alcohol"
                label="Alcohol reported"
                type="text"
                fullWidth
                value={formik.values.alcohol}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="amphetamines"
                label="Amphetamines reported"
                type="text"
                fullWidth
                value={formik.values.amphetamines}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="justice"
                label="Criminal justice referral"
                type="text"
                fullWidth
                value={formik.values.justice}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="dsm"
                label="DSM diagnosis"
                type="text"
                fullWidth
                value={formik.values.dsm}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="empadmission"
                label="Employemnt status at admission"
                type="text"
                fullWidth
                value={formik.values.empadmission}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="empdischarge"
                label="Employemnt status at discharge"
                type="text"
                fullWidth
                value={formik.values.empdischarge}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="frequency"
                label="Frequency of use at admission"
                type="text"
                fullWidth
                value={formik.values.frequency}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="lengthstay"
                label="Length of stay in treatment"
                type="number"
                fullWidth="true"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formik.values.lengthstay}
                onChange={formik.handleChange}
              />{" "}
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="marijuana"
                label="Marijuana/hashish reported"
                type="text"
                fullWidth
                value={formik.values.marijuana}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="methadone"
                label="Non-rx methadone reported"
                type="text"
                fullWidth
                value={formik.values.methadone}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="other"
                label="Other opiates/synthetics reported"
                type="text"
                fullWidth
                value={formik.values.other}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="discharge"
                label="Reason for discharge"
                type="text"
                fullWidth
                value={formik.values.discharge}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <TextField
                id="treatment"
                label="Type of treatment service"
                type="text"
                fullWidth
                value={formik.values.treatment}
                onChange={formik.handleChange}
              />
            </Box>
            <Box height={30} />
            <Box width={500}>
              <Button type="submit" variant="contained" size="large" fullWidth>
                Predict
              </Button>
              <div>{data}</div>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default PatientPrediction;
