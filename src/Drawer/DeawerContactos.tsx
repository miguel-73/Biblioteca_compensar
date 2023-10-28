/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar, Grid, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default function DrawerContactos() {
    const [visibleLeft, setVisibleLeft] = useState<boolean>(false);
    const [visibleRight, setVisibleRight] = useState<boolean>(false);
    const [visibleTop, setVisibleTop] = useState<boolean>(false);
    const [visibleBottom, setVisibleBottom] = useState<boolean>(false);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (

        <Grid container spacing={2} border={0}>

      
        <div className="card">

            <IconButton style={{ marginTop: 9 }} >
                <Avatar onClick={() => setVisibleRight(true)}>m</Avatar>
            </IconButton>
            {/* <i className="pi pi-spin pi-cog" style={{ fontSize: '2rem' }} onClick={() => setVisibleRight(true)}></i> */}


            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h2>Usuario </h2>
                <p>
                    Miguel Angel Murcia Ocampo
                </p>

                <div>
                <Grid container spacing={2} border={0}>
                    <Grid item sx={{ display: "inline" }} xs={12} sm={12}>
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
                    <Grid item xs={12} sm={12}>
                        <Item style={{
                            wordWrap: "break-word"
                        }}>
                            Datos del programa
                            <div />
                            TÉCNICA PROFESIONAL EN OPERACIÓN Y MANTENIMIENTO DE BASES DE DATOS
                            <div />
                            Jornada (Nocturna)
                            <div />
                            Semestre 5
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/* <Item style={{
                        wordWrap: "break-word"
                    }}> */}

                        {/* <Univercidad /> */}
                        {/* </Item> */}
                    </Grid>
                </Grid>
            </div>
            </Sidebar>

           
        </div>  </Grid>
    )
}
