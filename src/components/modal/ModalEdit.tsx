import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BorderRight } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";
import { UrlSite } from "@/utils";
import axios from "axios";
import TosteSucces from "../toste/TosteSucces";
import TosteError from "../toste/TosteErro";

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

export default function ModalEdit(props: any) {
  const open = props.open;
  const data = props.data;
  const load = props.load;
  const setOpen = props.setOpen;
  const [newPocc, setNewPocc] = React.useState("");
  const [openSucces, setOpenSucces] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleClick = async () => {
    const url = UrlSite("patrimoines");
    const datas = [
      {
        nom: data.nom,
        t: data.t,
        possesseur: {
          nom: newPocc,
        },
      },
    ];

    try {
      const response = await axios.put(url, datas);
      console.log("Réponse du serveur:", response.data);
      setOpen(false);
      setOpenSucces(true);
      load(true);
    } catch (error) {
      console.error("Erreur:", error);
      setOpenSucces(true);
    }
  };
  return (
    <>
      <TosteSucces
        message={"Success"}
        setOpen={setOpenSucces}
        open={openSucces}
      />
      <TosteError
        message={"Try again"}
        setOpen={setOpenError}
        open={openError}
      />
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
              Modifier le {data.nom}
            </Typography>
            <Grid container>
              <Grid container my={1}>
                <TextField
                  variant="outlined"
                  label="Propriete"
                  defaultValue={data.possesseur.nom}
                  fullWidth
                  size="small"
                  onChange={(e) => {setNewPocc(e.target.value);
                  }}
                />
              </Grid>
              <Grid container my={1} justifyContent={"flex-end"}>
                <Grid mx={1}>
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={handleClose}
                  >
                    Annuler
                  </Button>
                </Grid>
                <Grid mx={1}>
                  <Button
                    variant="contained"
                    color="inherit"
                    sx={{ bgcolor: "black", color: "#15f800" }}
                    onClick={handleClick}
                  >
                    Valider
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
