import React from "react";
import { Typography } from "@mui/material";
import { theme } from "../config/theme/theme";

export const NotResults = () => {
  return (
    <Typography
      sx={{
        textAlign: "center",
        paddingTop: "80px",
        fontSize: 26,
        color: theme.palette.notResultColor,
      }}
    >
      Sorry, but no results were found for your query
    </Typography>
  );
};
