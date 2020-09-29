import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import data from './yourdata';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  options: {
    defaultTheme: 'dark'
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const linkColor = { color: '#b46cf1' }

export default function BasicTable() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>  
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Lab link</TableCell>
              <TableCell align="center">Solution</TableCell>
              <TableCell align="center">Sourse</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.itmoLabs.js.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Link href={row.issues} target="_blank" color='inherit'>{row.title}</Link>                
                </TableCell>
                <TableCell align="center">
                  {row.solution != null && row.solution != '' && <Link href={row.solution} target="_blank" color='inherit'>Solution</Link>}
                </TableCell>
                <TableCell align="center">
                  {row.source != null && row.source != '' && <Link href={row.source} target="_blank" color='inherit'>Source</Link> }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}