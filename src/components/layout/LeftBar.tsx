"use client";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";

const LeftBar = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Grid container width={"100%"} p={2}>
        <Grid container width={"100%"} justifyContent={'center'}>
          <Typography variant="h5" fontWeight={"bold"} color={"#0fc200"}>
            Dashboard
          </Typography>
        </Grid>
        <Grid container>
          <FormControl sx={{  minWidth: 120 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label">Name</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default LeftBar;
