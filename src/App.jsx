import './App.css';
import peliculas from './data/peliculas';
import Cards from './components/cards';

const filterPelis = (genero) => {
  return peliculas.filter((pelicula) => pelicula.genero === genero);
};

function App() {
  return (
    <>
      <Cards genero={filterPelis('Comedia')} />
      <Cards genero={filterPelis('Acción')} />
      <Cards genero={filterPelis('Terror')} />
    </>
  );
}

export default App;
