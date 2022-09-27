import React from "react";
import { CharacterCard } from "./CharacterCard";
import { makeStyles } from "@mui/styles";
import { CircularProgress, Grid } from "@mui/material";
import { NotResults } from "./NotResults";

const useStyles = makeStyles(() => ({
  container: {
    width: "80%",
    paddingTop: 20,
  },
}));

export const CharactersList = ({ data }) => {
  const classes = useStyles();

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
