import React from "react";
import { CharacterCard } from "./CharacterCard";
import { makeStyles } from "@mui/styles";
import { CircularProgress, Grid } from "@mui/material";
import { NotResults } from "./NotResults";


export const CharactersList = ({ data }) => {

  if (data?.length === 0) {
    return <NotResults />;
  }

  return (
    <Grid
      container
      justifyContent="flex-start"
      sx={{ width: "1500px", margin: "0 auto", paddingTop: 5 }}
    >
      {data?.map((item) => (
        <CharacterCard key={item.id} item={item} />
      ))}
    </Grid>
  );
};
