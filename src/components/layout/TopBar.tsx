"use client";
import { Add } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";
import ModalCreate from "../modal/ModalCreate";
import ModalEdit from "../modal/ModalEdit";

const TopBar = (props: any) => {
  const { load } = props;
  const params = useParams();
  const nom = Array.isArray(params.nom) ? params.nom[0] : params.nom;
  const [open, setOpen] = React.useState(false);


  const handleCreate = () => {
    setOpen(true);
  };
  const decodedName = nom ? decodeURIComponent(nom) : "";

  return (
    <>
      <ModalCreate open={open} setOpen={setOpen} load={load} />
      
      <Grid
        container
        width={"100%"}
        bgcolor={"black"}
        justifyContent={"space-around"}
      >
        <Grid item sm={9}>
          {decodedName === "" ? (
            <Typography
              variant="h3"
              color={"#15f800"}
              fontFamily={"monospace"}
              fontWeight={"bold"}
            >
              Patrimoine 
            </Typography>
          ) : (
            <Typography
              variant="h3"
              color={"#15f800"}
              fontFamily={"monospace"}
              fontWeight={"bold"}
            >
               {decodedName}
            </Typography>
          )}
        </Grid>
        <Grid
          item
          sm={2}
          container
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button
            variant="contained"
            color="inherit"
            onClick={handleCreate}
            sx={{ bgcolor: "#15f800", color: "black" }}
          >
            Creer
            <Add fontSize="small" />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default TopBar;
