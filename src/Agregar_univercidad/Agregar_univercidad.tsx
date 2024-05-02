/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
import Swal from 'sweetalert2';
import { toast, type ToastContent } from 'react-toastify';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { miEstilo, titulo } from "../commons/interface";
import { SetStateAction, useEffect, useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
// import { control_success } from "../commons/alertas";
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { useSnackbar } from 'notistack';
import Cuento1 from "../Drawer/Cuento1";
import Cuento2 from "../Drawer/Cuento2";
import Cuento3, { Imagenes1, Imagenes2, Imagenes3, Imagenes4, Imagenes5, Imagenes6, Imagenes7, Imagenes8 } from "../Drawer/Cuento3";



interface Departamento {
    label: string;
    value: string;
}
interface Municipio {
    label: string;
    value: string;
}
export default function Agregar_univercidad() {

    const [colegioSeleccionado, setColegioSeleccionado] = useState('');
    const initialFormData = {

        nombre_colegio: "",
        direccion: "",
        telefono_contacto: "",
        correo_electronico: "",
        cod_departamento: "",
        cod_municipio: ""
    };
    const { enqueueSnackbar } = useSnackbar();
    const [formData, setFormData] = useState(initialFormData);


    const handleSubmit = async () => {
        try {
            const response = await fetch('https://zg3gr5k0-8000.use2.devtunnels.ms/estudiantes/crear_coleguio/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Estudiante creado con éxito:', data);
                enqueueSnackbar('Coleguio agregado con éxito', { variant: 'success' });
            } else {
                console.error('Error al crear el estudiante:', response.statusText);
                enqueueSnackbar('Error al agregar el Coleguio', { variant: 'error' });
            }
        } catch (error) {
            console.error('Error al conectar con la API:', error);
            enqueueSnackbar('Error al conectar con la API', { variant: 'error' });
        }
    };


    // 


    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChange = (event: { target: { value: string; }; }) => {
        const value = event.target.value as string;
        setFormData({ ...formData, });
        setColegioSeleccionado(value);
    };



    const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
    useEffect(() => {
        const cargarDepartamentos = async () => {
            try {
                const respuesta = await fetch('https://back-end-bia-beta.up.railway.app/api/listas/departamentos/?pais=CO');
                const resultado = await respuesta.json();
                if (resultado.success) {
                    setDepartamentos(resultado.data);
                } else {
                    console.error('Error al cargar los departamentos:', resultado.detail);
                    enqueueSnackbar('Error al cargar los departamentos', { variant: 'error' });
                }
            } catch (error) {
                console.error('Error al conectar con la API:', error);
                enqueueSnackbar('Error al conectar con la API', { variant: 'error' });
            }
        };

        cargarDepartamentos();
    }, [enqueueSnackbar]);


    const [municipio, setMunicipio] = useState<Municipio[]>([]);
    useEffect(() => {
        const cargarDepartamentos = async (): Promise<any> => {
            try {
                const respuesta = await fetch(`https://back-end-bia-beta.up.railway.app/api/listas/municipios/?cod_departamento=${formData.cod_departamento}`);
                const resultado = await respuesta.json();
                if (resultado.success) {
                    setMunicipio(resultado.data);
                } else {
                    console.error('Error al cargar los municipio:', resultado.detail);
                    enqueueSnackbar('Error al cargar los municipio', { variant: 'error' });
                }
            } catch (error) {
                console.error('Error al conectar con la API:', error);
                enqueueSnackbar('Error al conectar con la API', { variant: 'error' });
            }
        };

        cargarDepartamentos();
    }, [formData.cod_departamento]);

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
                        <Typography>Imagenes De Historia  </Typography>
                    </Box>
                </Grid>



                <Grid item xs={12} sm={5}> 
                    <Typography style={styles.bienvenido}>
                    Historia 1
                    </Typography>
                    <Imagenes1 />
                </Grid>

              
                <Grid item xs={12} sm={5}> 
                    <Typography style={styles.bienvenido}>
                    Historia 2
                    </Typography>
                    <Imagenes2 />
                </Grid>

                <Grid item xs={12} sm={5}> 
                    <Typography style={styles.bienvenido}>
                    Historia 3
                    </Typography>
                    <Imagenes3 />
                </Grid>

                <Grid item xs={12} sm={5}> 
                    <Typography style={styles.bienvenido}>
                    Historia 4
                    </Typography>
                    <Imagenes4 />
                </Grid>

                <Grid item xs={12} sm={5}> 
                    <Typography style={styles.bienvenido}>
                    Historia 5
                    </Typography>
                    <Imagenes5 />
                </Grid>

                <Grid item xs={12} sm={5}> 
                    <Typography style={styles.bienvenido}>
                    Historia 6
                    </Typography>
                    <Imagenes6 />
                </Grid>

                <Grid item xs={12} sm={5}> 
                    <Typography style={styles.bienvenido}>
                    Historia 7
                    </Typography>
                    <Imagenes7 />
                </Grid>

                <Grid item xs={12} sm={5}> 
                    <Typography style={styles.bienvenido}>
                    Historia 8
                    </Typography>
                    <Imagenes8 />
                </Grid>




            </Grid>
        </>
    );
}
