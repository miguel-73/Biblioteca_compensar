/* eslint-disable react/jsx-pascal-case */

import { Routes, Route } from 'react-router-dom'
import FotoPerfilStudiante from '../Inicio-drawer/DatosPersonales';
import Notas from '../MG/Notas';
import Home from '../Home/Home';
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
                    path={"/Se_libre"}
                    element={<Estudiantes />}
                />
                <Route
                    path={"/Consultar_Estudiante"}
                    element={<ConsultarEstudiante />}
                />
                <Route
                    path={"/Imagenes"}
                    element={<Agregar_univercidad />}
                />

                <Route
                    path={"/Reflexión"}
                    element={<Consultar_Coleguios />}
                />
                <Route
                    path={"/resplandor"}
                    element={<Categotia />}
                />



                <Route
                    path={"/Videos"}
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

