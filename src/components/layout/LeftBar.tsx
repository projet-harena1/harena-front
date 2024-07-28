"use client";
import { Dashboard, RemoveRedEye } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const LeftBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleDashBoard = () => {
    router.push("/dashboard");
  };
  const handleShow = () => {
    router.push("/list-heritage");
  };

  return (
    <>
      <Grid container width={"100%"} p={2}>
        <Grid container width={"100%"} justifyContent={"center"}>
          <Typography variant="h5" fontWeight={"bold"} color={"#0fc200"}>
            Menu
          </Typography>
        </Grid>
        <Grid container borderTop={"black solid 1px"} py={2} justifyContent={'center'}>
          <Button
            variant="text"
            color="inherit"
            endIcon={<RemoveRedEye />}
            onClick={handleShow}
       
          >
            Voir tous
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LeftBar;
