import React from "react";
import Sidenav from "../components/sidenav";
import { Box } from "@mui/system";
import Navbar from "../components/navbar";
import { Typography } from "@mui/material";
import Upload from "../components/upload";

function About() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4">File Upload Form</Typography>
          <Box height={10} />
          <Upload />
        </Box>
      </Box>
    </>
  );
}

export default About;
