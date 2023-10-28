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
        const cargarDepartamentos= async (): Promise<any> => {
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
                        <Typography>Agregar coleguio  </Typography>
                    </Box>
                </Grid>


                <Grid item xs={12} sm={3}>
                    <TextField
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="Nombre colegio"
                        name="nombre_colegio"
                        value={formData.nombre_colegio}
                        onChange={handleInputChange}
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="Direccion"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="Telefono_contacto"
                        name="telefono_contacto"
                        value={formData.telefono_contacto}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="Correo_electronico"
                        name="correo_electronico"
                        value={formData.correo_electronico}
                        onChange={handleInputChange}
                    />
                </Grid>
                {/* {formData.cod_departamento} */}
                <Grid item xs={12} sm={3}>
                    <FormControl variant="outlined" size="small" required fullWidth >
                        <InputLabel id="departamento-label">Departamento</InputLabel>
                        <Select
                            labelId="departamento-label"
                            id="departamento"
                            value={formData.cod_departamento}
                            label="Departamento"
                            onChange={handleInputChange}
                            name="cod_departamento"
                        >
                            {departamentos.map((departamento) => (
                                <MenuItem key={departamento.value} value={departamento.value}>
                                    {departamento.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>


                <Grid item xs={12} sm={3}>
                    <FormControl variant="outlined" size="small" required fullWidth >
                        <InputLabel id="departamento-label">Municipio</InputLabel>
                        <Select
                            labelId="departamento-label"
                            id="departamento"
                            value={formData.cod_municipio}
                            label="Departamento"
                            onChange={handleInputChange}
                            name="cod_municipio"
                        >
                            {municipio.map((municipio) => (
                                <MenuItem key={municipio.value} value={municipio.value}>
                                    {municipio.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Button color='success' fullWidth startIcon={<SaveIcon />}
                        variant='contained' onClick={handleSubmit}>
                        Guardar Estudiante
                    </Button>
                </Grid>

            </Grid>
        </>
    );
}
