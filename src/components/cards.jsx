import Card from './card';

function Cards({ genero }) {
  return (
    <>
      <h2>Genero: {genero[0].genero}</h2>
      <ul className="cards">
        {genero.map((pelicula) => (
          <Card key={pelicula.titulo} {...pelicula} />
        ))}
      </ul>
    </>
  );
}
export default Cards;
