import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BorderRight } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import { UrlSite } from "@/utils";
import TosteSucces from "../common/toste/TosteSucces";
import TosteError from "../common/toste/TosteErro";

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

export default function ModalDelete(props: any) {
  const [name, setName] = React.useState("");
  const [poccesseur, setPoccesseur] = React.useState("");
  const [openSucces, setOpenSucces] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString();
  const open = props.open;
  const setOpen = props.setOpen;
  const setLoad = props.load;
  const datas = props.data;
  const handleClose = () => setOpen(false);
  const handleClick = async () => {
    const url = UrlSite("patrimoines");
    const data = [
      {
        nom: name,
        t: formattedDate,
        possesseur: {
          nom: poccesseur,
        },
      },
    ];

    try {
      const response = await axios.put(url, data);
      console.log("Réponse du serveur:", response.data);
      setOpen(false);
      setOpenSucces(true);
      setLoad(true);
    } catch (error) {
      console.error("Erreur:", error);
      setOpenSucces(true);
    }
  };
  return (
    <div>
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
              variant="h6"
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Vous ests sur de supprimer le <br />
              {datas.nom}
            </Typography>
            <Grid container>
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
                    sx={{ bgcolor: "black", color: "red" }}
                    onClick={handleClick}
                  >
                    Supprimer{" "}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
