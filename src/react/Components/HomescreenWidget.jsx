import React from "react";

import { Stack, Avatar, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const HomescreenWidget = () => {
  const navigate = useNavigate();

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "166px",
        backgroundColor: "#80808080", // Transparent Gray
        borderRadius: (theme) => theme.shape.borderRadius,
      }}
    >
      <Avatar
        onClick={() => navigate("/")}
        sx={{
          width: "150px",
          height: "150px",
          fontSize: "40px",
          backgroundColor: "red",
        }}
      >
        HELP
      </Avatar>
    </Stack>
  );
};

export default HomescreenWidget;
