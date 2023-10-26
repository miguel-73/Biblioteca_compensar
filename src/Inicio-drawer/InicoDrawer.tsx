import { Box, Grid } from "@mui/material";
import FotoPerfilStudiante from "./DatosPersonales";

export default function SeccionInicioDrawer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid alignItems="center" container spacing={2}>
        <Grid alignItems="center" item xs={12}>
          <Box
            sx={{
              position: "auto",
              top: 0,
              border: 3,
              borderColor: "#dddddd",
              width: "auto",
              height: "auto",
              margin: 0,
            }}
          >
            <FotoPerfilStudiante />
          </Box>
        </Grid>

        <Grid alignItems="center" item xs={12}>
          <Box
            sx={{
              position: "auto",
              top: 0,
              border: 3,
              borderColor: "#dddddd",
              width: "auto",
              height: 350,
              margin: 0,
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
