import { Grid, Box} from '@mui/material';
import ConsultarHorario from './consultahorario/consultarhorario';



export default function  ParteDaniela() {
  return (

  
        <Grid item xs={12} sm={6}  md={6}>
          <Box
            sx={{
              position: "absolute",
    border: 2,
    backgroundColor:'white',
    borderColor: "#dddddd", 
    top: 10,
    left: 10, 
    margin:0,
    width: '98%',      
    height: '580px',}}     //largo
          >

      <ConsultarHorario/>

          </Box>

          </Grid>

  )
            }