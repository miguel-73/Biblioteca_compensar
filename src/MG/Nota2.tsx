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
export const CalculoDos: number = 35;
export const ExtraccionDos: number = 35;
export const SwitDos: number = 30;
export const InternetDos: number = 25;
export const PracticaDos: number = 43;
export const PromedioDos: number = ((CalculoDos + ExtraccionDos + InternetDos + PracticaDos + SwitDos) / 5);

export default function Nota2() {
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
          <Item>{CalculoDos}</Item>
        </Grid>
        <Grid item >
          <Item>{ExtraccionDos}</Item>
        </Grid>
        <Grid item >
          <Item>{SwitDos}</Item>
        </Grid>
        <Grid item >
          <Item>{InternetDos}</Item>
        </Grid>
        <Grid item >
          <Item>{PracticaDos}</Item>
        </Grid>
        <Grid item >
          <Item>{PromedioDos}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}