/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, TextField, Typography } from "@mui/material";
import { titulo } from "../commons/interface";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button } from "primereact/button";

export const miEstilo = {
    position: 'relative',
    background: '#FAFAFA',
    borderRadius: '15px',
    p: '20px',
    m: '10px 0 20px 0',
    mb: '20px',
    boxShadow: '0px 3px 6px #042F4A26',
};


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
export default function ConsultarEstudiante() {
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

    useEffect(() => {
        void fetchEstudiantes();
    }, []);

    const columnas = [
        // { field: 'id', headerName: 'ID', width: 90 },
        { field: 'primer_nombre', headerName: 'Primer nombre', width: 200 },
        { field: 'segundo_nombre', headerName: 'Segundo nombre', width: 200 },
        { field: 'primer_apellido', headerName: 'Primer apellido', width: 200 },
        { field: 'edad', headerName: 'edad', width: 200 },
        { field: 'numero_celular', headerName: 'numero_celular', width: 200 },

        // Añade aquí más columnas según necesites
    ];
    const [filtro, setFiltro] = useState('');
    const estudiantesFiltrados = estudiantes.filter(estudiante =>
        estudiante.primer_nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        estudiante.segundo_nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        estudiante.primer_apellido.toLowerCase().includes(filtro.toLowerCase())
    );
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

                <Grid item xs={12} sm={3}>
                    <TextField
                        InputProps={{
                            style: { borderRadius: 50 } // Aquí puedes ajustar el valor según tus necesidades
                        }}
                        color="warning"
                        fullWidth
                        label="Buscar por nombre o apellido"
                        variant="outlined"
                        size="small"
                        onChange={e => setFiltro(e.target.value)}
                        value={filtro}
                        style={{ marginBottom: '16px' }}
                    />
                </Grid>


                <Grid item xs={12} sm={12}>
                    <DataGrid
                        autoHeight
                        density="compact"
                        rows={estudiantesFiltrados}
                        columns={columnas}
                    />
                </Grid>


            </Grid>
        </>
    );
}
