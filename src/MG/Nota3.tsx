import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export const CalculoTres: number = 45;
export const ExtraccionTres: number = 35;
export const SwitTres: number = 30;
export const InternetTres: number = 50;
export const PracticaTres: number = 46;
export const PromedioTres: number = ((CalculoTres + ExtraccionTres + InternetTres + PracticaTres + SwitTres) / 5);

export default function Nota3() {
    return (
        <Box sx={{ flexGrow: 13, border: 0, }}>
            <Grid
                container spacing={3}
                // container
                direction="column"
                justifyContent="space-evenly"
            // alignItems="flex-start"
            >
                <Grid item >
                    <Item>{CalculoTres}</Item>
                </Grid>
                <Grid item >
                    <Item>{ExtraccionTres}</Item>
                </Grid>
                <Grid item >
                    <Item>{SwitTres}</Item>
                </Grid>
                <Grid item >
                    <Item>{InternetTres}</Item>
                </Grid>
                <Grid item >
                    <Item>{PracticaTres}</Item>
                </Grid>
                <Grid item >
                    <Item>{PromedioTres} </Item>
                </Grid>
            </Grid>
        </Box>
    );
}