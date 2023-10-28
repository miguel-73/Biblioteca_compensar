/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, TextField, Typography } from "@mui/material";
import { miEstilo, titulo } from "../commons/interface";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from 'react';


interface Colegio {
    id: number;
    nombre_colegio: string;
    direccion: string;
    telefono_contacto: string;
    correo_electronico: string;
    cod_departamento: string;
    cod_municipio: string;
  }
export default function Consultar_Coleguios() {
    const [estudiantes, setEstudiantes] = useState<Colegio[]>([]);

    const fetchEstudiantes = async (): Promise<any> => {
        try {
            const respuesta = await fetch('https://zg3gr5k0-8000.use2.devtunnels.ms/estudiantes/obtener_coleguio/');


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
        { field: 'nombre_colegio', headerName: 'Nombre Colegio', width: 200 },
        { field: 'direccion', headerName: 'Dirección', width: 200 },
        { field: 'telefono_contacto', headerName: 'Teléfono de Contacto', width: 200 },
        { field: 'correo_electronico', headerName: 'Correo Electrónico', width: 200 },
        // { field: 'cod_departamento', headerName: 'Código Departamento', width: 200 },
        // { field: 'cod_municipio', headerName: 'Código Municipio', width: 200 },
      
        // Añade aquí más columnas según necesites
      ];
    const [filtro, setFiltro] = useState('');
    const estudiantesFiltrados = estudiantes.filter(estudiante => 
        estudiante.nombre_colegio.toLowerCase().includes(filtro.toLowerCase()) ||
        estudiante.correo_electronico.toLowerCase().includes(filtro.toLowerCase()) ||
        estudiante.telefono_contacto.toLowerCase().includes(filtro.toLowerCase())
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
                        <Typography>Colegios   </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField 
                        fullWidth 
                        label="Buscar por nombre o correo " 
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
