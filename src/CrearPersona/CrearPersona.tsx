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
import Logou from "../Drawer/logou";
import Catedra from "../Drawer/Catedra";
import Paz from "../Drawer/Paz";


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
                        <Typography> Catedra de la paz   </Typography>
                    </Box>
                </Grid>

                <Grid item  >
                    <Catedra />
                </Grid>

                <Grid item xs={12} sm={7}>
                    <Typography style={styles.bienvenido}>
                        ¡Bienvenido!
                    </Typography>
                    <Typography style={styles.contenido} paragraph>
                        En este espacio encontrarás una amplia variedad de materiales y recursos especialmente diseñados para docentes y directivos docentes. Estos materiales incluyen guías detalladas, videos formativos y planes de lección que te ayudarán en la implementación efectiva de la Cátedra de la Paz en tu establecimiento educativo.
                    </Typography>
                    <Typography style={styles.contenido} paragraph>
                        Además de los recursos mencionados, ofrecemos talleres en línea y seminarios web donde expertos en educación para la paz comparten sus conocimientos y estrategias. Estas sesiones interactivas brindan oportunidades únicas para aprender de manera colaborativa y para discutir desafíos y soluciones con colegas de todo el país.
                    </Typography>
                    <Typography style={styles.contenido} paragraph>
                        Creemos firmemente en el poder transformador de la educación para la paz. Por eso, nuestros contenidos están diseñados no solo para cumplir con los requisitos curriculares, sino también para fomentar un ambiente de respeto, tolerancia y comprensión mutua entre los estudiantes. La educación para la paz es más que un componente curricular; es una herramienta vital para construir un futuro más pacífico y equitativo.
                    </Typography>
                </Grid>


            </Grid>

            <Grid container
                spacing={2} m={2} p={2}
                sx={miEstilo}
            >

                <Grid item xs={12} sm={12}>
                    <Box
                        className={`border px-4 text-white fs-5 p-1`}
                        sx={titulo}
                    >
                        <Typography>ING sistemas te da la vienvenida</Typography>
                    </Box>
                </Grid>


                <Grid item xs={12} sm={7}>
                    <Typography style={styles.bienvenido}>
                        Contenido Educativo y Diverso:
                    </Typography>
                    <Typography style={styles.contenido} paragraph>
                        En nuestra plataforma, encontrarás una amplia gama
                        de contenidos que abarcan desde lecciones interactivas hasta artículos
                        profundizados en una variedad de temas. Estamos comprometidos con la diversidad de perspectivas y la inclusión de voces de todo el espectro cultural y académico.
                    </Typography>


                    <Typography style={styles.bienvenido}>
                        Exploración de Nuevas Temáticas:
                    </Typography>
                    <Typography style={styles.contenido} paragraph>
                        Cada semana destacamos nuevas áreas de interés,
                        incentivando a nuestros usuarios a expandir sus horizontes y
                        explorar campos del conocimiento y culturas que tal vez sean nuevas para ellos.
                        Esto incluye temáticas emergentes y tendencias globales que modelan el mundo actual.
                    </Typography>




                    <Typography style={styles.bienvenido}>
                        Foros de Discusión:
                    </Typography>
                    <Typography style={styles.contenido} paragraph>
                        Los foros en nuestro aplicativo fomentan un ambiente de diálogo y debate, donde los usuarios pueden compartir sus opiniones y aprender de las experiencias de otros.
                        Este es un espacio para discutir, preguntar y contribuir en debates enriquecedores que estimulan el pensamiento crítico y la empatía.
                    </Typography>





                    <Typography style={styles.bienvenido}>
                        Feedback y Mejora Continua:
                    </Typography>
                    <Typography style={styles.contenido} paragraph>
                        Valoramos profundamente las opiniones y sugerencias de nuestros usuarios.
                        El aplicativo está diseñado para evolucionar, adaptándose a las necesidades
                        de nuestra comunidad a través de un ciclo constante de feedback y mejoras. Animamos
                        a todos a contribuir en este proceso para optimizar y enriquecer la experiencia educativa.
                    </Typography>

                </Grid>

                <Grid item  >
                    <Paz />
                </Grid>



            </Grid>

            <Grid container
                spacing={2} m={2} p={2}
                sx={miEstilo}
            >

                <Grid item xs={12} sm={12}>
                    <Box
                        className={`border px-4 text-white fs-5 p-1`}
                        sx={titulo}
                    >
                        <Typography> Dirigido  a  </Typography>
                    </Box>
                </Grid>


                <Grid item xs={12} sm={5}>
                    <Typography style={styles.bienvenido}>
                        Educadores y Estudiantes:
                    </Typography>
                    <Typography style={styles.contenido} paragraph>
                        Ofrecemos recursos que apoyan la educación formal e informal,
                        especialmente útiles para maestros y estudiantes que buscan explorar y entender
                        la historia de conflictos en Colombia, así como teorías y prácticas de paz. Nuestro
                        contenido educa sobre derechos humanos, resolución de conflictos y reconstrucción social.
                    </Typography>


                    <Typography style={styles.bienvenido}>
                        Líderes Comunitarios y Activistas:
                    </Typography>
                    <Typography style={styles.contenido} paragraph>
                        Para aquellos que trabajan directamente en la construcción de la paz y la
                        reconciliación en sus comunidades, el aplicativo proporciona herramientas prácticas,
                        estudios de caso y plataformas de discusión que pueden ayudar en la implementación de
                        proyectos de desarrollo comunitario y en iniciativas de diálogo intergrupal.
                    </Typography>



                    <Typography style={styles.bienvenido}>
                        Víctimas del Conflicto:
                    </Typography>
                    <Typography style={styles.contenido} paragraph>
                        Ofrecemos un espacio seguro para que las víctimas del conflicto compartan sus historias,
                        reciban apoyo y accedan a información sobre derechos y servicios disponibles. El aplicativo
                        puede ser un recurso para la sanación a través del conocimiento y la comprensión,
                        promoviendo narrativas de empoderamiento y recuperación.
                    </Typography>





                </Grid>
                <Grid item xs={12} sm={1}>
                    
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Typography style={styles.bienvenido}>
                        Público General Interesado en la Paz Social:
                    </Typography>
                    <Typography style={styles.contenido} paragraph>
                        Ciudadanos comunes que deseen informarse más sobre las dinámicas de los
                        conflictos colombianos y cómo pueden contribuir a la paz. Este grupo incluye a
                        personas que quizás no estén directamente afectadas por la violencia pero que desean
                        participar activamente en la transformación de su sociedad.
                    </Typography>


                    <Typography style={styles.bienvenido}>
                        Organizaciones No Gubernamentales y Agencias de Cooperación Internacional:
                    </Typography>
                    <Typography style={styles.contenido} paragraph>
                        Proporcionamos contenido que puede ayudar a estas organizaciones a entender mejor
                        el contexto local y a diseñar intervenciones más efectivas y sensibles al contexto colombiano.
                        Esto incluye análisis de conflictos, estrategias de intervención y evaluación de impacto.

                    </Typography>



                    <Typography style={styles.bienvenido}>
                        Empresarios y Sectores Privados Interesados en la Responsabilidad Social:
                    </Typography>
                    <Typography style={styles.contenido} paragraph>
                        Para aquellos en el sector privado que buscan integrar prácticas de responsabilidad social
                        empresarial que contribuyan al bienestar comunitario y a la paz, ofrecemos guías y ejemplos de cómo
                        las empresas pueden desempeñar un papel activo en la reconciliación y el desarrollo social.
                    </Typography>





                </Grid>


            </Grid>
            {/* <ConsultarEstudiante /> */}
        </>
    );
}
