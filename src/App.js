import Saludo from './components/Saludo';
import Carrusel from './components/Carrusel';
import ListLibros from './components/ListLibros';
import ListAutores from './components/ListAutores';


function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: `url('./images/OIP.jpg') no-repeat `, // Reemplaza 'URL_DE_LA_IMAGEN_EN_LINEA' con la URL de la imagen en línea
    backgroundSize: 'cover', // Ajusta el tamaño de la imagen al contenedor
  };
  const color = {
    color: 'white',
    fontFamily: 'Monaco',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h1 style={color}>BIBLIOTECA "EL PARAISO DE LOS LIBROS"</h1>
      <br/>
      <Saludo />
      <br/>
      <br/>
      <Carrusel />
      <br/>
      <br/>
      <h2 style={color}>Libros Destacados</h2><br/>
      <ListLibros />
      <br/>
      <br/>
      <h2 style={color}>Autores Destacados</h2><br/>
      <ListAutores />
    </div>
  );
}

export default App;

