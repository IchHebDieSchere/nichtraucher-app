import React from "react";

import { Stack, Avatar, Typography } from "@mui/material";

const HomescreenButton = ({ label = "!missing" }) => (
  <Stack justifyContent="center" alignItems="center">
    <Avatar>{label[0]}</Avatar>
    <Typography>{label}</Typography>
  </Stack>
);

export default HomescreenButton;
