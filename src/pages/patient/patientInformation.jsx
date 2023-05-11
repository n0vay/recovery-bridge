import React from "react";
import Sidenav from "../../components/sidenav";
import Navbar from "../../components/navbar";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={1}>
                <Avatar
                  alt="Salman"
                  srcSet="http://images.catchnews.com/upload/2015/10/09/salman-khan-in-tere-naam_127994.jpg"
                  sx={{ width: 150, height: 150 }}
                />
              </Grid>
              <Grid xs={5.5}>
                <Stack spacing={3}>
                  <TextField
                    id="name"
                    label="Full Name"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    id="adress"
                    label="Address"
                    type="text"
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid xs={5.5}>
                <Stack spacing={3}>
                <TextField
                    id="occupation"
                    label="Occupation"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    id="phone"
                    label="Phone Number"
                    type="text"
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid xs={6}>
                <Item>xs=6</Item>
              </Grid>
              <Grid xs={6}>
                <Item>xs=6</Item>
              </Grid>
              <Grid xs={6}>
                <Item>xs=6</Item>
              </Grid>
              <Grid xs={6}>
                <Item>xs=6</Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PatientInformation;
