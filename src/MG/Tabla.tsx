import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Materias from './Materias';
import Nota1 from './Nota1';
import Nota2 from './Nota2';
import Nota3 from './Nota3';
import Definitiva from './Definitiva';
import Grafica from './Grafica';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Tabla() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                {/* <Grid container spacing={3} border={0} alignItems="stretch">     */}
                {/* <Grid item xs={5.9} sm={2.3} >
                        <Item style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>Materia</Item>
                    </Grid> */}
                {/* <Grid item xs={2.9} sm={1.6} >
                        <Item style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>Momento #1</Item>
                    </Grid> */}
                {/* <Grid item xs={2.9} sm={1.5}>
                        <Item style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>Momento #2</Item>
                    </Grid> */}
                {/* <Grid item xs={3.2} sm={1.6}>
                        <Item style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>Momento #3</Item>
                    </Grid> */}
                {/* <Grid item xs={3.2} sm={1.6}>
                        <Item style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>corte final</Item>
                    </Grid> */}
                {/* <Grid item xs={3.2} sm={3.4}>
                        <Item style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>Acomulado de notas </Item>
                    </Grid> */}
                {/* </Grid> */}
                <div>
                    <Grid container spacing={1} columns={15} border={0} alignItems="stretch" >
                        <Grid item xs={10} sm={2.8} >
                            <Item style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}> Materia</Item>
                            <Item style={{ backgroundColor: '#E6F2FF' }} sx={{ height: '92%' }}>
                                <Grid style={{ marginBottom: '10px' }}>
                                    <Item style={{ wordWrap: "break-word", backgroundColor: '#97CEEB', borderRadius: 20 }}>Codigo #</Item>
                                </Grid>
                                <Materias />
                            </Item>
                        </Grid>
                        <Grid item xs={5} sm={2} sx={{ height: '100%' }}>
                            <Item style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>Momento #1</Item>
                            <Item style={{ backgroundColor: '#E6F2FF' }} sx={{ height: '100%' }}>
                                <Grid style={{ marginBottom: '20px' }}>
                                    <Item style={{ backgroundColor: '#97CEEB', borderRadius: 20 }}>20%</Item>
                                </Grid>
                                <Nota1 />
                            </Item>
                        </Grid>
                        <Grid item xs={5} sm={2} sx={{ height: '100%' }}>
                            <Item style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>Momento #2</Item>
                            <Item style={{ backgroundColor: '#E6F2FF' }} sx={{ height: '100%' }}>
                                <Grid style={{ marginBottom: '20px' }}>
                                    <Item style={{ backgroundColor: '#97CEEB', borderRadius: 20 }}>35%</Item>
                                </Grid>
                                <Nota2 />
                            </Item>
                        </Grid>
                        <Grid item xs={5} sm={2} sx={{ height: '100%' }}>
                            <Item style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>Momento #3</Item>

                            <Item style={{ backgroundColor: '#E6F2FF' }} sx={{ height: '100%' }}>
                                <Grid style={{ marginBottom: '20px' }}>
                                    <Item style={{ backgroundColor: '#97CEEB', borderRadius: 20 }}>45%</Item>
                                </Grid>
                                <Nota3 />
                            </Item>
                        </Grid>
                        <Grid item xs={5} sm={2} >
                            <Item style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>corte final</Item>

                            <Item style={{ backgroundColor: '#E6F2FF' }} >
                                <Grid style={{ marginBottom: '20px' }}>
                                    <Item style={{ wordWrap: "break-word", backgroundColor: '#97CEEB', borderRadius: 20 }}>Definitiva</Item>
                                </Grid>
                                <Definitiva />
                            </Item>
                        </Grid>
                        <Grid item xs={15} sm={4.2}>
                            <Item style={{ wordWrap: "break-word", backgroundColor: '#ff7700', borderRadius: 20 }}>Acomulado de notas </Item>

                            <Item style={{ backgroundColor: '#E6F2FF' }} >
                                <Grid style={{ marginBottom: '20px' }}>
                                    {/* <Item  style={{  wordWrap: "break-word", backgroundColor: '#97CEEB', borderRadius: 20 }}>Definitiva</Item> */}
                                </Grid>
                                <Grafica />
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    );
}
