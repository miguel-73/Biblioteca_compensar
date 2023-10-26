/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { number } from 'yargs';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export const CalculoUno: number = 35;
export const ExtraccionUno: number = 15;
export const SwitUno: number = 50;
export const InternetUno: number = 40;
export const PracticaUno: number = 10;
export const PromedioUno: number = ((CalculoUno + ExtraccionUno + InternetUno + PracticaUno + SwitUno) / 5);


export default function Nota1() {
  return (
    <Box sx={{ flexGrow: 13, border: 0, }}>
      <Grid container spacing={3}
        direction="column"
        justifyContent="space-evenly"
      >
        {/* varible  */}
        <Grid item >
          <Item> {CalculoUno} </Item>
        </Grid>
        <Grid item >
          <Item>{ExtraccionUno}</Item>
        </Grid>
        <Grid item >
          <Item>{SwitUno}</Item>
        </Grid>
        <Grid item >
          <Item>{InternetUno}</Item>
        </Grid>
        <Grid item >
          <Item>{PracticaUno}</Item>
        </Grid>
        <Grid item >
          <Item>{PromedioUno} </Item>
        </Grid>
      </Grid>
    </Box>
  );
}