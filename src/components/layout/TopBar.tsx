"use client"
import { Add, Edit } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { redirect, useRouter } from "next/navigation";
import ModalCreate from "../modal/ModalCreate";
import React from "react";
import ModalEdit from "../modal/ModalEdit";

const TopBar = () => {
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
    const handleCreate =()=>{
        setOpen(true)
    }
    const handleEdit =()=>{
        setOpenEdit(true)
    }
    return (
      <>
      <ModalCreate open={open} setOpen={setOpen}/>
      <ModalEdit open={openEdit} setOpen={setOpenEdit}/>
      <Grid
        container
        width={"100%"}
        bgcolor={"black"}
        justifyContent={"space-around"}
      >
        <Grid container sm={9}>
          <Typography
            variant="h3"
            color={"#15f800"}
            fontFamily={"monospace"}
            fontWeight={"bold"}
          >
            Heritage of Rakoto
          </Typography>
        </Grid>
        <Grid container sm={2} alignContent={'center'}>
              <Grid sm={5}>
                <Button variant="contained" color="inherit" onClick={handleCreate} sx={{bgcolor:"#15f800", color:"black"}}>Add<Add fontSize="small"/></Button>
              </Grid>
              <Grid sm={5}>
           <Button variant="contained" color="inherit" onClick={handleEdit} sx={{bgcolor:"#15f800", color:"black"}}>Edit<Edit fontSize="small"/></Button>
              </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TopBar;
