/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid } from "@mui/material";
import Logou from "../Drawer/logou";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';








export default function Home() {
    const miEstilo = {
        position: 'relative',
        // background: '#FAFAFA',
        borderRadius: '15px',
        p: '20px',
        m: '10px 0 20px 0',
        mb: '20px',
        boxShadow: '0px 3px 6px #042F4A26',
    };
   


    return (
        <>
            <Grid container
                spacing={2} m={2} p={2}
                sx={miEstilo}
            >
                <Logou />
            </Grid>
            <Grid container
                spacing={2} m={2} p={2}
                sx={miEstilo}
            >

                <Grid item xs={12} sm={4}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Ing en sistemas
                            </Typography>
                            <Typography variant="h5" component="div">
                                Jhon Fredy Bermudez Rivera
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Modelado de Datos
                            </Typography>
                            <Typography variant="body2">
                                Database Design
                                <br />

                                {/* {'"a benevolent smile"'} */}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Estudiante</Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/*  */}

                <Grid item xs={12} sm={4}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Ing en sistemas
                            </Typography>
                            <Typography variant="h5" component="div">
                                Hector Stiven Vigoya
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Back
                            </Typography>
                            <Typography variant="body2">
                                server-side
                                <br />
                                {/* {'"a benevolent smile"'} */}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" >Estudiante</Button>
                        </CardActions>
                    </Card>
                </Grid>





                <Grid item xs={12} sm={4}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Ing en sistemas
                            </Typography>
                            <Typography variant="h5" component="div">
                                Miguel Angel Murcia Ocampo
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Desarrollador front end
                            </Typography>
                            <Typography variant="body2">
                                Diseño Web
                                <br />
                                {/* {'"a benevolent smile"'} */}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Estudiante</Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </>
    );
}
