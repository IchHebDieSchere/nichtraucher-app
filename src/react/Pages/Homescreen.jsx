import React from "react";

import { Stack, Grid2 } from "@mui/material";

import HomescreenButton from "../Components/HomescreenButton";

const Homescreen = () => (
  <Stack
    sx={{
      height: "100%",
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
        <HomescreenButton label="Google"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Google"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Google"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Google"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Google"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Google"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Google"></HomescreenButton>
      </Grid2>
      <Grid2 size={1}>
        <HomescreenButton label="Google"></HomescreenButton>
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
