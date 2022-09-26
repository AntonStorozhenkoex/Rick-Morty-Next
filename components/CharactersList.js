import React from "react";
import { CharacterCard } from "./CharacterCard";
import { makeStyles } from "@mui/styles";
import { CircularProgress, Grid } from "@mui/material";
import { NotResults } from "./NotResults";

const useStyles = makeStyles(() => ({
    container: {
        width: "80%",
        paddingTop: 20
    }
}));

export const CharactersList = ({ data, loading }) => {
    const classes = useStyles();

    if (loading)
        return (
            <Grid container justifyContent="center" sx={{ paddingTop: 25 }}>
                <CircularProgress />
            </Grid>
        );

    if (data?.length === 0) {
        return <NotResults />;
    }

    return (
        <Grid
            container
            className={classes.container}
            justifyContent="flex-start"
            sx={{ width: "1500px", margin: "0 auto" }}
        >
            {data?.map((item) => (
                <CharacterCard key={item.id} item={item} />
            ))}
        </Grid>
    );
};
