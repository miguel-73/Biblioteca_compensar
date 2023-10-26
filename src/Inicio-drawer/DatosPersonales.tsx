/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import ImagenStudiante from "./ImagenStudiante";
import ImagenesSociales from "./ImagenesSociales";
import ImagenCiencias from "./ImagenCiencias";
import ImagenesEspanol from "./ImagenesEspanol";
import ImagenesIngles from "./ImagenesIngles";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
export default function FotoPerfilStudiante() {
  const miEstilo = {
    position: 'relative',
    // background: '#FAFAFA',
    borderRadius: '15px',
    p: '20px',
    m: '10px 0 20px 0',
    mb: '20px',
    boxShadow: '0px 3px 6px #042F4A26',
  };
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const titulo = {

    display: 'grid',
    background:
      'transparent linear-gradient(269deg, #1492E6 0%, #062F48 34%, #FF9142 100%) 0% 0% no-repeat padding-box',
    width: '100%',
    height: '40px',
    color: '#fff',
    borderRadius: '10px',
    pl: '20px',
    fontSize: '17px',
    fontWeight: '900',
    alignContent: 'center',
    marginTop: '10px',
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
            <Typography>ingles </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImagenesIngles />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Avatar >Mi</Avatar>
          <h4>Miguel Ángel Mucia</h4>
          <p>Profesor de Inglés</p>
          <p>Experiencia: 10 años</p>
          <p>Idiomas: Inglés, Español ,Aleman</p>
          <p>Correo Electrónico: miguel@email.com</p>

          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>



        <Grid item xs={12} sm={12}>
          <Box
            className={`border px-4 text-white fs-5 p-1`}
            sx={titulo}
          >
            <Typography>Matematicas </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>

          <ImagenStudiante />

        </Grid>
        <Grid item xs={12} sm={6}>
          <Avatar >C</Avatar>
          <h4>Cristina </h4>
          <p>Profesor de matematicas </p>
          <p>Experiencia: 20 años</p>
          <p>Matematica avansada </p>
          <p>Correo Electrónico: crustian@email.com</p>
          <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>



        <Grid item xs={12} sm={12}>
          <Box
            className={`border px-4 text-white fs-5 p-1`}
            sx={titulo}
          >
            <Typography>Sociales </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImagenesSociales />

        </Grid>
        <Grid item xs={12} sm={6}>
          <Avatar >E</Avatar>
          <h4>Elena  </h4>
          <p>Profesa de sociales </p>
          <p>Experiencia: 40</p>
          <p>Sociales </p>
          <p>Correo Electrónico: Elena@email.com</p>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>


        <Grid item xs={12} sm={12}>
          <Box
            className={`border px-4 text-white fs-5 p-1`}
            sx={titulo}
          >
            <Typography>Ciencias </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImagenCiencias />

        </Grid>
        <Grid item xs={12} sm={6}>
          <Avatar >C</Avatar>
          <h4>jhon </h4>
          <p>Profesor de ciencias  </p>
          <p>Experiencia: 15 años</p>
          <p>ciencias avansada </p>
          <p>Correo Electrónico: jhon@email.com</p>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>



        <Grid item xs={12} sm={12}>
          <Box
            className={`border px-4 text-white fs-5 p-1`}
            sx={titulo}
          >
            <Typography>Español </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImagenesEspanol />

        </Grid>
        <Grid item xs={12} sm={6}>
          <Avatar >C</Avatar>
          <h4>carlos </h4>
          <p>Profesor de español </p>
          <p>Experiencia: 25 años</p>
          <p>lenguas </p>
          <p>Correo Electrónico: carlos@email.com</p>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>

      </Grid>
    </>
  );
}
