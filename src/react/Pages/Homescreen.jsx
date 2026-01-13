import React from "react";

import { Stack, Grid2 } from "@mui/material";

import HomescreenButton from "../Components/HomescreenButton";
import HomescreenWidget from "../Components/HomescreenWidget";

const Homescreen = () => (
  <Stack
    sx={{
      height: "100%",
      backgroundColor: "lightgray",
    }}
  >
    <Stack
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        backgroundColor: "black",
        height: "50px",
      }}
    ></Stack>
    <Grid2
      container
      columns={4}
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={4}
      sx={{ marginTop: 4, paddingX: 4 }}
    >
      <Grid2 size={1}>
        <HomescreenButton label="Message"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Camera"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Gallery"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Maps"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Calendar"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Setting"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Weather"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Music"></HomescreenButton>
      </Grid2>
      <Grid2 size={2}>
        <HomescreenWidget></HomescreenWidget>
      </Grid2>
    </Grid2>
    <Stack></Stack>
    <Stack
      justifyContent="flex-end"
      alignItems="flex-end"
      sx={{
        backgroundColor: "black",
        height: "50px",
        marginTop: "auto",
      }}
    ></Stack>
  </Stack>
);

export default Homescreen;
