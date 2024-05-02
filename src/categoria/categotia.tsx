/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { miEstilo, titulo } from "../commons/interface";
import { useEffect, useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
// import { control_success } from "../commons/alertas";
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { useSnackbar } from 'notistack';
import { ImagenPortad3, ImagenPortad4, ImagenPortad5, ImagenPortad6, ImagenPortad7, ImagenPortad8, ImagenPortad9, ImagenPortada, ImagenPortada2 } from "../Drawer/Cuento3";


interface Colegio {
    id: number;
    nombre_colegio: string;
    direccion: string;
    telefono_contacto: string;
    correo_electronico: string;
    cod_departamento: string;
    cod_municipio: string;
}


export default function Categoria() {
    const [colegios, setColegios] = useState<Colegio[]>([]);
    const [colegioSeleccionado, setColegioSeleccionado] = useState('');
    const initialFormData = {
        cod_tipo_documento: "cc",
        numero_identidad: "",
        primer_nombre: " ",

        segundo_nombre: "",
        primer_apellido: "",
        segundo_apellido: "",
        edad: null,
        fecha_nacimiento: "2001-10-26",
        correo_electronico: "",
        numero_celular: "",
        pertenece_colegio: true,
        pertenece_universidad: true,
        universidad: "",
        colegio: "",
        id_grado: null
    };
    const { enqueueSnackbar } = useSnackbar();
    const [formData, setFormData] = useState(initialFormData);

    // const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    //     const { name, value } = event.target;
    //     setFormData({ ...formData, [name]: value });
    //     setColegioSeleccionado(event.target.value);
    // };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://zg3gr5k0-8000.use2.devtunnels.ms/estudiantes/crear_categoria/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Estudiante creado con éxito:', data);
                enqueueSnackbar('Estudiante creado con éxito', { variant: 'success' });
            } else {
                console.error('Error al crear el estudiante:', response.statusText);
                enqueueSnackbar('Error al crear el estudiante', { variant: 'error' });
            }
        } catch (error) {
            console.error('Error al conectar con la API:', error);
            enqueueSnackbar('Error al conectar con la API', { variant: 'error' });
        }
    };


    // 


    const fetchColegios = async () => {
        try {
            const response = await fetch("https://zg3gr5k0-8000.use2.devtunnels.ms/estudiantes/obtener_coleguio/");
            const data = await response.json();
            if (data.success && Array.isArray(data.data)) {
                setColegios(data.data);
            } else {
                console.error('Error al obtener los colegios:', data.detail);
            }
        } catch (error) {
            console.error('Error al conectar con la API:', error);
        }
    };

    useEffect(() => {
        fetchColegios();
    }, []);

    // const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    //     setColegioSeleccionado(event.target.value);

    // };



    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChange = (event: { target: { value: string; }; }) => {
        const value = event.target.value as string;
        setFormData({ ...formData, colegio: value });
        setColegioSeleccionado(value);
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
                        <Typography>El resplandor de la cordillera : una historia de esperanza y renacimiento   </Typography>
                    </Box>
                </Grid>


                <Grid item  >

                    <ImagenPortada />
                </Grid>


                <Grid item  >

                    <ImagenPortada2 />
                </Grid>


                <Grid item  > 
                    <ImagenPortad3 />
                </Grid>




                <Grid item  > 
                    <ImagenPortad4 />
                </Grid>

                <Grid item  > 
                    <ImagenPortad5 />
                </Grid>

                <Grid item  > 
                    <ImagenPortad6 />
                </Grid>

                <Grid item  > 
                    <ImagenPortad7 />
                </Grid>

                <Grid item  > 
                    <ImagenPortad8 />
                </Grid>

                <Grid item  > 
                    <ImagenPortad9 />
                </Grid>

              

























            </Grid>
        </>
    );
}
