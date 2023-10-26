import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CalculoUno, ExtraccionUno, InternetUno, PracticaUno, SwitUno } from './Nota1';
import { CalculoDos, ExtraccionDos, InternetDos, PracticaDos, SwitDos } from './Nota2';
import { CalculoTres, ExtraccionTres, InternetTres, PracticaTres, SwitTres } from './Nota3';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export const CalculoDefinitiva: number = ((CalculoUno * 0.2) + (CalculoDos * 0.35) + (CalculoTres * 0.45));
export const ExtraccionDefinitiva: number = ((ExtraccionUno * 0.2) + (ExtraccionDos * 0.35) + (ExtraccionTres * 0.45));
export const SwitDefinitiva: number = ((SwitUno * 0.2) + (SwitDos * 0.35) + (SwitTres * 0.45));
export const InternetDefinitiva: number = ((InternetUno * 0.2) + (InternetDos * 0.35) + (InternetTres * 0.45));
export const PracticaDefinitiva: number = ((PracticaUno * 0.2) + (PracticaDos * 0.35) + (PracticaTres * 0.45));
export const PromedioDefinitiva: number = ((CalculoDefinitiva + ExtraccionDefinitiva + InternetDefinitiva + PracticaDefinitiva + SwitDefinitiva) / 5);
export default function Definitiva() {
  return (
    <Box sx={{ flexGrow: 13, border: 0, }}>
      <Grid
        container spacing={3}
         direction="column"
        justifyContent="space-evenly"
      // alignItems="flex-start"
      >
        <Grid item >
          <Item>{CalculoDefinitiva} </Item>
        </Grid>
        <Grid item >
          <Item>{ExtraccionDefinitiva}</Item>
        </Grid>
        <Grid item >
          <Item>{SwitDefinitiva}</Item>
        </Grid>
        <Grid item >
          <Item>{InternetDefinitiva}</Item>
        </Grid>
        <Grid item >
          <Item>{PracticaDefinitiva}</Item>
        </Grid>
        <Grid item >
          <Item> {PromedioDefinitiva}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}