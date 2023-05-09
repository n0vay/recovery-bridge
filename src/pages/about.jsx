import React from "react";
import Sidenav from "../components/sidenav";
import { Box } from "@mui/system";
import Navbar from "../components/navbar";

function About() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>About</div>
        </Box>
      </Box>
    </>
  );
}

export default About;
