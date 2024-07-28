import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BorderRight } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ModalCreate(props: any) {
  const open = props.open;
  const setOpen = props.setOpen;
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} borderRadius={2}>
            <Typography
              id="transition-modal-title"
              variant="h5"
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Create new heritage
            </Typography>
            <Grid container>
              <Grid container my={1}>
                <TextField
                  variant="outlined"
                  label="Name"
                  fullWidth
                  size="small"
                />
              </Grid>{" "}
              <Grid container my={1}>
                <TextField
                  variant="outlined"
                  label="Name"
                  fullWidth
                  size="small"
                />
              </Grid>{" "}
              <Grid container my={1}>
                <TextField
                  variant="outlined"
                  label="Name"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid container my={1} justifyContent={'flex-end'}>
                <Grid  mx={1}>
                  <Button variant="contained" color="inherit" onClick={handleClose}>Cancel</Button>
                </Grid>
                <Grid  mx={1}>
                  <Button variant="contained" color="inherit" sx={{bgcolor:"black",color:"#15f800"}}>Valide</Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
