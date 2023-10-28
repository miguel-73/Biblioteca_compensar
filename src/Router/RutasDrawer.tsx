/* eslint-disable react/jsx-pascal-case */

import { Routes, Route } from 'react-router-dom'
import FotoPerfilStudiante from '../Inicio-drawer/DatosPersonales';
import Notas from '../MG/Notas';
import Home from '../Home/Home';
import Estudiante from '../estudiantes/Estudiantes';
import CrearPersona from '../CrearPersona/CrearPersona';
import Tablacolegios from '../colegios/Tablacolegios';
import Agregar_univercidad from '../Agregar_univercidad/Agregar_univercidad';
import Categotia from '../categoria/categotia';
import Estudiantes from '../CrearPersona/CrearPersona';
import ConsultarEstudiante from '../estudiantes/Estudiantes';
import Consultar_Coleguios from '../colegios/Tablacolegios';


export default function RutasDrawer() {
    return (
        <div>
            <Routes>

                <Route
                    path={"/Home"}
                    element={<Home />}
                />
                <Route
                    path={"/Estudiantes"}
                    element={<Estudiantes />}
                />
                <Route
                    path={"/Consultar_Estudiante"}
                    element={<ConsultarEstudiante />}
                />
                <Route
                    path={"/Agregar_colegio"}
                    element={<Agregar_univercidad />}
                />

                <Route
                    path={"/Consultar_Coleguios"}
                    element={<Consultar_Coleguios />}
                />
                <Route
                    path={"/categotia"}
                    element={<Categotia />}
                />



                <Route
                    path={"/Inicio"}
                    element={<FotoPerfilStudiante />}
                />
                <Route
                    path={"/Notas"}
                    element={<Notas />}
                />
            </Routes>
        </div>
    );
}

