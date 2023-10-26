/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, Typography } from "@mui/material";
import { miEstilo, titulo } from "../commons/interface";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button } from "primereact/button";



interface Estudiante {
    id: number;
    cod_tipo_documento: string;
    numero_identidad: string;
    primer_nombre: string;
    segundo_nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    edad: number;
    fecha_nacimiento: string;
    correo_electronico: string;
    numero_celular: string;
    pertenece_colegio: boolean;
    pertenece_universidad: boolean;
    id_universidad: number;
    id_grado: number;
    colegio: any;
}
export default function Estudiante() {
    const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);

    const fetchEstudiantes = async (): Promise<any> => {
        try {
          const respuesta = await fetch('https://zg3gr5k0-8000.use2.devtunnels.ms/estudiantes/obtener_estudiante/');
          
         
          if (respuesta.ok) {
            const datos = await respuesta.json(); // Parsea la respuesta JSON
             setEstudiantes(datos.data)
            console.log(datos); // Muestra los datos en la consola
            // Haz algo con los datos aquí, como setearlos en un estado si estás en un componente React.
          } else {
            console.error('Respuesta no exitosa:', respuesta.status, respuesta.statusText);
          }
        } catch (error) {
          console.error('Hubo un error al obtener los estudiantes', error);
        }
      };
      
   /*  useEffect(() => {
       void fetchEstudiantes();
    }, [estudiantes]); */

    const columnas = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'primer_nombre', headerName: 'Primer nombre', width: 150 },
        { field: 'segundo_nombre', headerName: 'Segundo nombre', width: 150 },
        { field: 'primer_apellido', headerName: 'Primer apellido', width: 150 },
        // Añade aquí más columnas según necesites
    ];

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


                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        autoHeight
                        density="compact"
                        rows={estudiantes}
                        columns={columnas}
                    // pageSize={5}
                    // rowsPerPageOptions={[5]}
                    />
                </div>

                <Button onClick={() => {
                    void fetchEstudiantes();
                }}>Estudiantes</Button>

            </Grid>
        </>
    );
}
