import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import ModalEdit from "./modal/ModalEdit";
import ModalDelete from "./modal/ModalDelete";

const ITEM_HEIGHT = 48;
export default function LongMenu(props :any) {
  const rooter = useRouter();
  const name = props.name
  const load = props.load
  const data = props.data
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

  };
  const handleShow = () => {
    rooter.push(`dashboard/${name}`);
  };
  const handleEdit = () => {
    setOpenEdit(true)
  };
  const handleDelete = () => {
    setOpenDelete(true)
  };

  return (
    <div>
      <ModalEdit load={load} data={data} open={openEdit} setOpen={setOpenEdit} />
      <ModalDelete load={load} data={data} open={openDelete} setOpen={setOpenDelete} />
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "15ch",
          },
        }}
      >
          <MenuItem
            onClick={handleClose}
          >
            <Button color="inherit" startIcon={<RemoveRedEye fontSize="small"/>} onClick={handleShow}>Voir</Button>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <Button color="inherit" startIcon={<Edit fontSize="small"/>} onClick={handleEdit}>Modifier</Button>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <Button color="inherit" startIcon={<Delete fontSize="small"/>} onClick={handleDelete}>Supprimer</Button>
          </MenuItem>
      </Menu>
    </div>
  );
}
