/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { miEstilo, titulo } from "../commons/interface";
import { useEffect, useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
// import { control_success } from "../commons/alertas";
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { useSnackbar } from 'notistack';
import ConsultarEstudiante from "../estudiantes/Estudiantes";


interface Colegio {
    id: number;
    nombre_colegio: string;
    direccion: string;
    telefono_contacto: string;
    correo_electronico: string;
    cod_departamento: string;
    cod_municipio: string;
}


export default function Estudiantes() {
    const [colegios, setColegios] = useState<Colegio[]>([]);
    const [colegioSeleccionado, setColegioSeleccionado] = useState('');
    const initialFormData = {
        cod_tipo_documento: "cc",
        numero_identidad: "",
        primer_nombre: "",

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
            const response = await fetch('https://zg3gr5k0-8000.use2.devtunnels.ms/estudiantes/crear_estudiante/', {
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
                        <Typography>Estudiantes  </Typography>
                    </Box>
                </Grid>



                <Grid item xs={12} sm={3}>
                    <TextField
                        InputProps={{
                            style: { borderRadius: 50 } // Aquí puedes ajustar el valor según tus necesidades
                        }}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="numero identidad"
                        name="numero_identidad"
                        value={formData.numero_identidad}
                        onChange={handleInputChange}
                        color="warning"

                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField
                        InputProps={{
                            style: { borderRadius: 50 } // Aquí puedes ajustar el valor según tus necesidades
                        }}
                        color="warning"
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="primer nombre"
                        name="primer_nombre"
                        value={formData.primer_nombre}
                        onChange={handleInputChange}

                    />
                </Grid>


                <Grid item xs={12} sm={3}>
                    <TextField
                        InputProps={{
                            style: { borderRadius: 50 } // Aquí puedes ajustar el valor según tus necesidades
                        }}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="segundo nombre"
                        name="segundo_nombre"
                        value={formData.segundo_nombre}
                        onChange={handleInputChange}
                        color="warning"
                    />
                </Grid>


                <Grid item xs={12} sm={3}>
                    <TextField
                        InputProps={{
                            style: { borderRadius: 50 } // Aquí puedes ajustar el valor según tus necesidades
                        }}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="primer apellido"
                        name="primer_apellido"
                        value={formData.primer_apellido}
                        onChange={handleInputChange}
                        color="warning"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        InputProps={{
                            style: { borderRadius: 50 } // Aquí puedes ajustar el valor según tus necesidades
                        }}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="segundo apellido"
                        name="segundo_apellido"
                        value={formData.segundo_apellido}
                        onChange={handleInputChange}
                        color="warning"
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField
                        InputProps={{
                            style: { borderRadius: 50 } // Aquí puedes ajustar el valor según tus necesidades
                        }}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="edad"
                        name="edad"
                        value={formData.edad}
                        onChange={handleInputChange}
                        color="warning"
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField
                        InputProps={{
                            style: { borderRadius: 50 } // Aquí puedes ajustar el valor según tus necesidades
                        }}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="fecha nacimiento"
                        name="fecha_nacimiento"
                        value={formData.fecha_nacimiento}
                        onChange={handleInputChange}
                        color="warning"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        InputProps={{
                            style: { borderRadius: 50 } // Aquí puedes ajustar el valor según tus necesidades
                        }}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="correo electronico"
                        name="correo_electronico"
                        value={formData.correo_electronico}
                        onChange={handleInputChange}
                        color="warning"
                    />
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField
                        InputProps={{
                            style: { borderRadius: 50 } // Aquí puedes ajustar el valor según tus necesidades
                        }}
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="Numero celular"
                        name="numero_celular"
                        value={formData.numero_celular}
                        onChange={handleInputChange}
                        color="warning"
                    />
                </Grid>
                {/* Agrega más campos del formulario según sea necesario */}
                {/* <>{colegioSeleccionado}</> */}
                <Grid item xs={12} sm={3}>
                    <FormControl variant="outlined" size="small" required fullWidth>
                        <InputLabel id="pertenece-colegio-label">¿Pertenece al colegio?</InputLabel>
                        <Select

                            labelId="pertenece-colegio-label"
                            id="pertenece-colegio"
                            label="¿Pertenece al colegio?"
                            name="pertenece_colegio"
                            value={formData.pertenece_colegio}
                            onChange={handleInputChange}
                            color="warning"
                            sx={{ borderRadius: 20 }}
                        >
                            <MenuItem value={"true"}>Sí</MenuItem>
                            <MenuItem value={"false"}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <FormControl variant="outlined" size="small" required fullWidth>
                        <InputLabel id="pertenece-colegio-label">¿pertenece universidad?</InputLabel>
                        <Select
                            labelId=" pertenece universidad"
                            label="¿pertenece universidad?"
                            name="pertenece_universidad"
                            value={formData.pertenece_universidad}
                            onChange={handleInputChange}
                            color="warning"
                            sx={{ borderRadius: 20 }}
                        >
                            <MenuItem value={"true"}>Sí</MenuItem>
                            <MenuItem value={"false"}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


                <Grid item xs={12} sm={3}>
                    <FormControl variant="outlined" size="small" required fullWidth>
                        <InputLabel id="colegio-label">Colegio</InputLabel>
                        <Select
                            labelId="colegio-label"
                            id="colegio"
                            value={formData.colegio}
                            label="colegio"
                            color="warning"
                            sx={{ borderRadius: 20 }}
                            onChange={handleChange}
                        >
                            {colegios.map((colegio) => (
                                <MenuItem key={colegio.id} value={colegio.id}>
                                    {colegio.nombre_colegio}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>


                {/* <Grid item xs={12} sm={3}>
                    <TextField
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="colegio"
                        name="colegio"
                        value={formData.colegio}
                        onChange={handleInputChange}
                    />
                </Grid> */}
                {/* <Grid item xs={12} sm={3}>
                    <TextField
                        variant="outlined"
                        size="small"
                        required
                        fullWidth
                        label="id grado"
                        name="id_grado"
                        value={formData.id_grado}
                        onChange={handleInputChange}
                    />
                </Grid> */}
                <Grid item xs={12} sm={3}>
                    <Button color='success' fullWidth startIcon={<SaveIcon />}
                        variant='contained' onClick={handleSubmit} sx={{ borderRadius: 20 }} >
                        Guardat Estudiante
                    </Button>
                </Grid>

            </Grid>

            <ConsultarEstudiante />
        </>
    );
}
