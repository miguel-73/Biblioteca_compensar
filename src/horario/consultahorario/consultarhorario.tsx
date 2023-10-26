import React from 'react'; 
import { Panel } from 'primereact/panel';
import { Grid, Box} from '@mui/material';

export default function ConsultarHorario() {
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
  height: '180px',}}     //largo
        >
 <Panel header="Consultar Horario Estudiante">
            <p className="m-0">
              t laborum.
            </p>
        </Panel>
        </Box>

        </Grid>





       
    )
}