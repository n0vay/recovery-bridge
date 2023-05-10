import React from "react";
import Sidenav from "../../components/sidenav";
import Navbar from "../../components/navbar";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function PatientInformation() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
            Patient Information
          </Typography>
          <Box height={10} />
          <Avatar
            alt='Salman'
            srcSet="http://images.catchnews.com/upload/2015/10/09/salman-khan-in-tere-naam_127994.jpg"
            sx={{ width: 150, height: 150 }}
          />
        </Box>
      </Box>
    </>
  );
}

export default PatientInformation;
