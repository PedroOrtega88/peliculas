function Card({ titulo, director, sinopsis, valoracion }) {
  return (
    <>
      <li className="card">
        <h3>Titulo: {titulo}</h3>
        <h4>Director: {director}</h4>
        <p>Sinapsis: {sinopsis} </p>
        <h5>Valoración: {valoracion} </h5>
      </li>
    </>
  );
}

export default Card;
