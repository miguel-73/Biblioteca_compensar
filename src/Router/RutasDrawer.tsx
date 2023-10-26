
import { Routes, Route } from 'react-router-dom'
import FotoPerfilStudiante from '../Inicio-drawer/DatosPersonales';
import Notas from '../MG/Notas';
import Home from '../Home/Home';
import Estudiante from '../estudiantes/Estudiantes';


export default function RutasDrawer() {
    return (
        <div>
            <Routes>

            <Route
                    path={"/Home"}
                    element={<Home />}
                />
                 <Route
                    path={"/Estudiante"}
                    element={<Estudiante />}
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

