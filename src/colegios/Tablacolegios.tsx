/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, TextField, Typography } from "@mui/material";
import { miEstilo, titulo } from "../commons/interface";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from 'react';
import { Reflexiones1, Reflexiones2, Reflexiones3, Reflexiones4, Reflexiones5, Reflexiones6, Reflexiones7, Reflexiones8, Reflexiones9 } from "../Drawer/Cuento3";


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
            const respuesta = await fetch('https://backend-bibliotecacompensar-production.up.railway.app/universidad/obtener_colegio/');


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


    const styles = {
        bienvenido: {
            color: 'skyblue', // Color azul cielo para el título
            fontWeight: 'bold', // Negrita para destacar
            fontSize: '24px', // Tamaño grande para el título
            marginBottom: '20px', // Espacio debajo del título
        },
        contenido: {
            fontSize: '16px', // Tamaño adecuado para el texto
            color: 'black', // Color para el texto
            lineHeight: '1.6', // Espaciado de línea para mejor lectura
        }
    };
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
                        <Typography>Reflexiones </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Typography style={styles.bienvenido}>
                        Reflexión 1
                    </Typography>
                    <Reflexiones1/>
                </Grid>


                <Grid item xs={12} sm={5}>
                    <Typography style={styles.bienvenido}>
                        Reflexión 2
                    </Typography>
                    <Reflexiones2/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography style={styles.bienvenido}>
                        Reflexión 3
                    </Typography>
                    <Reflexiones3/>
                </Grid>

                  <Grid item xs={12} sm={5}>
                    <Typography style={styles.bienvenido}>
                        Reflexión 4
                    </Typography>
                    <Reflexiones4/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography style={styles.bienvenido}>
                        Reflexión 5
                    </Typography>
                    <Reflexiones5/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography style={styles.bienvenido}>
                        Reflexión 6
                    </Typography>
                    <Reflexiones6/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography style={styles.bienvenido}>
                        Reflexión 7
                    </Typography>
                    <Reflexiones7/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography style={styles.bienvenido}>
                        Reflexión 8
                    </Typography>
                    <Reflexiones8/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typography style={styles.bienvenido}>
                        Reflexión 9
                    </Typography>
                    <Reflexiones9/>
                </Grid>
               

              

            </Grid>
        </>
    );
}
