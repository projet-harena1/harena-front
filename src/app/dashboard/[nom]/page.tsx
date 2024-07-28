"use client";
import LeftBar from "@/components/layout/LeftBar";
import TopBar from "@/components/layout/TopBar";
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React from "react";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

function Page() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <Grid container maxHeight={"100vh"} overflow={"hidden"}>
        <Grid container>
          <TopBar />
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <Grid item sm={2} minHeight={"100vh"} borderRight={"black solid 1px"}>
            <LeftBar />
          </Grid>
          <Grid container sm={10} pt={2}>
            <Grid container justifyContent={"space-around"}>
            <Grid container sm={3.5}>
                <FormControl sx={{ minWidth: 120 }} size="small" fullWidth>
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
              <Grid container sm={3.5}>
                <TextField
                  fullWidth
                  label="Start date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  type="date"
                />
              </Grid>
              <Grid container sm={3.5}>
                <TextField
                  fullWidth
                  label="End date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  size="small"
                  type="date"
                />
              </Grid>
             
            </Grid>
            <Grid container maxHeight={"75vh"} borderTop={"black solid 1px"}>
              <LineChart
                series={[
                  { data: pData, label: "pv" },
                  { data: uData, label: "uv" },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Page;
