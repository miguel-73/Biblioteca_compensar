/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, Typography } from "@mui/material";
 import { miEstilo, titulo } from "../commons/interface";
 import { DataGrid, GridColDef } from "@mui/x-data-grid";



 
export default function Estudiante() {

   
   
    return (
        <>
            <Grid container
                spacing={2} m={2} p={2}
                sx={miEstilo}
            >
                <Grid item xs={12} sm={12}>
                    <Box
                        className={`border px-4 text-white fs-5 p-1`}
                        sx={titulo}
                    >
                        <Typography>Estudiantes  </Typography>
                    </Box>
                </Grid>






                
            </Grid>
        </>
    );
}
