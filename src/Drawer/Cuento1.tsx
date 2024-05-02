/* eslint-disable jsx-a11y/alt-text */
export default function Cuento1() {
    const imgStyle = {
        width: '100%',    // Asegura que la imagen ocupe todo el ancho disponible del Grid
        height: 'auto',   // Mantiene la proporción de la imagen
        borderRadius: '8px' // Opcional: Redondea las esquinas de la imagen
    };
    return (
        <img src='../imagenes/Cuento1.jpg' style={ imgStyle  } />
        
    );
}