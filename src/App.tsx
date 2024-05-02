import React from 'react';
import './App.css';
import './Home/boton.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { SnackbarProvider } from 'notistack';
import PersistentDrawerStiven from './Drawer/DrawerPersistente';
// import { ToastContainer } from 'react-toastify';



export default function App() {
  return (
    <>
      {/* <ToastContainer /> */}
      <SnackbarProvider maxSnack={4}>
        <PersistentDrawerStiven />
      </SnackbarProvider>
    </>
  );
}

