import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { RemoveRedEye } from '@mui/icons-material';
import ButtonApp from './Buton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}



export default function ListHeritage(props :any) {
    const setName = props.setName
    const rows = props.data
    const load = props.load
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom</StyledTableCell>
            <StyledTableCell>Date de creation</StyledTableCell>
            <StyledTableCell>Propriete</StyledTableCell>
            <StyledTableCell align='center'>Montant&nbsp;(MGA)</StyledTableCell>
            <StyledTableCell align='center'>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:any) => (
            <StyledTableRow key={row.nom}>
              <StyledTableCell component="th" scope="row">
                {row.nom}
              </StyledTableCell>
              <StyledTableCell >{row.t}</StyledTableCell>
              <StyledTableCell >{row.possesseur.nom}</StyledTableCell>
              <StyledTableCell align="center">{row.valeur_comptable}</StyledTableCell>
              <StyledTableCell align="center"><ButtonApp name={row.nom} data={row} setName={setName} load={load}/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
