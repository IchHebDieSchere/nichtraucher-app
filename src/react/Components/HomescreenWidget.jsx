import React from "react";

import { Stack, Avatar } from "@mui/material";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const HomescreenWidget = () => {
  const [isPressed, setIsPressed] = useState(false);
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
        sx={{
          width: "150px",
          height: "150px",
          fontSize: "40px",
          backgroundColor: "black",
          transform: "rotateX(45deg)",
        }}
      ></Avatar>
      <Avatar
        onMouseUp={() => {
          setTimeout(() => {
            setIsPressed(true);
          }, 100);
          setTimeout(() => {
            setIsPressed(false);
          }, 300);
          setTimeout(() => {
            navigate("/");
          }, 500);
        }}
        sx={{
          width: "150px",
          height: "150px",
          fontSize: "40px",
          transform: "rotateX(45deg)",
          backgroundColor: "red",
          marginTop: isPressed ? "-150px" : "-160px",
        }}
      >
        HELP
      </Avatar>
    </Stack>
  );
};

export default HomescreenWidget;
