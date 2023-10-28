/* eslint-disable @typescript-eslint/no-unused-vars */
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Univercidad from './ImagenCarta';
import ImagenCompensarMenu from '../Drawer/ImagenMenuCompensar';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Carta() {
    return (
        <div>
            <Grid container spacing={2} border={0}>
                <Grid item sx={{ display: "inline" }} xs={12} sm={4}>
                    <Item style={{
                        // overflow: "hidden",
                        wordWrap: "break-word"
                    }}>
                        Estudiante
                        <div />
                        Miguel Angel Murcia Ocampo
                        <div />
                        miguelangelmurciaocampo73@gmail.com
                        <div />
                        CC:1006856855
                        <div />
                        TEL:3223780518
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Item style={{
                        wordWrap: "break-word"
                    }}>
                        Datos del programa
                        <div />
                        TÉCNICA PROFESIONAL EN OPERACIÓN Y MANTENIMIENTO DE BASES DE DATOS
                        <div />
                        Jornada (Nocturna)
                        <div />
                        Semestre 4
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4}>
                    {/* <Item style={{
                        wordWrap: "break-word"
                    }}> */}

                        <Univercidad />
                    {/* </Item> */}
                </Grid>
            </Grid>
        </div>
    );
}

