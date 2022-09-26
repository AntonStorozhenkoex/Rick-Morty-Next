import React, { useCallback, useEffect } from "react";
import { debounce, Grid, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Field, useFormikContext } from "formik";
import { genders, species, status } from "../constants";
import { TextField, Select } from "formik-mui";
import {useRouter} from "next/router";

const useStyles = makeStyles(() => ({
    input:{
        borderRadius:7,
        backgroundColor:'#407772',
    },
    select: {
        width: "145px",
        borderRadius:7,
        backgroundColor:'#407772',
        "& .MuiSelect-select": {
            padding: 10
        }
    }
}));

export const SearchForm = () => {
    const classes = useStyles();

    const { values, handleSubmit } = useFormikContext();

    const onSubmit = useCallback(debounce(handleSubmit, 3000), []);

    useEffect(() => {
        onSubmit();
    }, [values]);



    return (
        <Grid container justifyContent="center"  sx={{ width: "100%" }}>
            <Field
                component={TextField}
                name="type"
                placeholder="Character type"
                className={classes.input}
                sx={{ width: "50%", padding: 1 }}
            />
            <Grid container justifyContent="center" >
            <Grid
                container
                justifyContent="space-between"
                sx={{ width: "50%" }}
            >
                <Field
                    name="status"
                    component={Select}
                    className={classes.select}
                >
                    {status.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Field>
                <Field
                    name="species"
                    component={Select}
                    className={classes.select}
                >
                    {species.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Field>
                <Field
                    name="gender"
                    component={Select}
                    className={classes.select}
                >
                    {genders.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Field>
            </Grid>
            </Grid>
        </Grid>
    );
};
