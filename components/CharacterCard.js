import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { theme } from "../config/theme/theme";

export const CharacterCard = ({ item }) => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        backgroundColor: theme.palette.cardBgColor,
        borderWidth: 2,
        borderRadius: 7,
        border: `1px solid ${theme.palette.cardBorderColor}`,
        display: "flex",
        flex: "0 0 30%",
        margin: "10px",
        padding: "10px",
      }}
    >
      <Image
        width={150}
        height={150}
        src={item.image}
        alt={item.name}
        sx={{ borderRadius: "50%" }}
      />
      <Typography sx={{ width: "100%", textAlign: "center" }}>
        {item.name}
      </Typography>
      <Grid container justifyContent="space-between">
        <p>Status: {item.status}</p>
        <p>Species: {item.species}</p>
      </Grid>
      <Grid container justifyContent="space-between">
        <p>Type: {item.type}</p>
        <p>Gender: {item.gender}</p>
      </Grid>
      <Grid container justifyContent="space-between">
        <p>Location: {item.location.name}</p>
      </Grid>
    </Grid>
  );
};
