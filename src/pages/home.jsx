import React from "react";
import NavbarHome from "../components/navbarhome";
import { Box } from "@mui/system";
import Image from "../media/hero.jpg";

function Home() {
  return (
    <>
      <NavbarHome />
      <Box
        class="candles"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
        }}
      ></Box>
    </>
  );
}

export default Home;
