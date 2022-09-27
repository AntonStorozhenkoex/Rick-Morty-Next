import React, { useCallback, useEffect } from "react";
import { debounce, Grid, MenuItem } from "@mui/material";
import { Field, useFormikContext } from "formik";
import { genders, species, status } from "../constants";
import { TextField, Select } from "formik-mui";

export const SearchForm = () => {
  const { values, handleSubmit } = useFormikContext();

  const onSubmit = useCallback(debounce(handleSubmit, 2000), []);

  useEffect(() => {
    onSubmit();
  }, [values]);

  return (
    <Grid container justifyContent="center" sx={{ width: "100%" }}>
      <Field
        component={TextField}
        name="type"
        placeholder="Character type"
        sx={{ width: "50%", backgroundColor: "#407772" }}
      />
      <Grid container justifyContent="center">
        <Grid
          container
          justifyContent="space-between"
          sx={{ width: "50%", paddingTop: 1 }}
        >
          <Field
            name="status"
            component={Select}
            sx={{ width: "145px", backgroundColor: "#407772" }}
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
            sx={{ width: "145px", backgroundColor: "#407772" }}
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
            sx={{ width: "145px", backgroundColor: "#407772" }}
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
