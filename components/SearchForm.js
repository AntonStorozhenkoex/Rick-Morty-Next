import React, { useCallback, useEffect } from "react";
import { debounce, Grid, MenuItem, TextField,Select } from "@mui/material";
import { useFormikContext } from "formik";
import { genders, species, status } from "../constants";
import theme from "../src/theme";

export const SearchForm = () => {
  const { values, handleSubmit,handleChange } = useFormikContext();

  const onSubmit = useCallback(debounce(handleSubmit, 2000), []);

  useEffect(() => {
    onSubmit();
  }, [values]);

  return (
    <Grid container justifyContent="center" sx={{ width: "100%" }}>
      <TextField
        name="type"
        placeholder="Character type"
        sx={{ width: "50%", backgroundColor: theme.palette.inputBgColor }}
        onChange={handleChange}
        value={values.type}
      />
      <Grid container justifyContent="center">
        <Grid
          container
          justifyContent="space-between"
          sx={{ width: "50%", paddingTop: 1 }}
        >
          <Select
            name="status"
            sx={{ width: "145px",  backgroundColor: theme.palette.inputBgColor }}
            onChange={handleChange}
            value={values.status}
          >
            {status.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <Select
            name="species"
            component={Select}
            sx={{ width: "145px",  backgroundColor: theme.palette.inputBgColor }}
            onChange={handleChange}
            value={values.species}
          >
            {species.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <Select
            name="gender"
            sx={{ width: "145px", backgroundColor: theme.palette.inputBgColor }}
            onChange={handleChange}
            value={values.gender}
          >
            {genders.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </Grid>
  );
};
