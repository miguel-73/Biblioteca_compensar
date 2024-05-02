/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, TextField, Typography } from "@mui/material";
import { miEstilo, titulo } from "../commons/interface";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from 'react';
import { Reflexiones1, Reflexiones2, Reflexiones3, Reflexiones4, Reflexiones5, Reflexiones6, Reflexiones7, Reflexiones8, Reflexiones9 } from "../Drawer/Cuento3";


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
  const videoUrl = "https://www.youtube.com/embed/6hi-8PI8UVg";
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
            <Typography>Video </Typography>
          </Box>
        </Grid>



        <Grid item xs={12} sm={12}>
          <iframe
            width="100%"
            height="400"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Grid>





      </Grid>
    </>
  );
}
