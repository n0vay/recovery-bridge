import React from "react";
import Sidenavdoc from "../../components/sidenavdoc";
import Navbar from "../../components/navbar";
import { Box } from "@mui/system";
import SearchName from "../../components/searchname";
import Button from "@mui/material/Button";
import SearchId from "../../components/searchid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import PatientPrediction from "../patient/patientPrediction";

function DoctorSearch() {
  const [patientID, setPatientID] = useState("");
  const [patientData, setPatientData] = useState(null);

  const handleSubmit = async () => {
    setPatientData(null);
    console.log("Search Patient", patientID);

    let config = {
      mode: "cors",
      method: "get",
      maxBodyLength: Infinity,
      url: `https://gdweta0cag.execute-api.us-east-1.amazonaws.com/default/search_data?q=${patientID}`,
      headers: {
        "Content-Type": "text/plain",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setPatientData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenavdoc />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>Doctor Search</div>
          <Box height={30} />
          <SearchName />
          <Box height={30} />
          <SearchId />
          <Box height={30} />
          <TextField
            required
            id="patientID"
            label="Paitient ID"
            name="patientID"
            onChange={(e) => setPatientID(e.target.value)}
          />
          <Box height={30} />
          <Button variant="contained" size="large" onClick={handleSubmit}>
            Search Patient
          </Button>
        </Box>
      </Box>
      {patientData && (
        <PatientPrediction
          initialValues={{
            ...patientData,
            patientid: patientID,
          }}
        ></PatientPrediction>
      )}
    </>
  );
}

export default DoctorSearch;
