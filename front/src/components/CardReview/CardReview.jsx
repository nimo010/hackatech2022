import "./CardReview.css";

export default function CardReview({ review }) {
  return (
    <div className="review">
      <p>{review.fecha}</p>
      <p>
        Estudiante: <span>{review.username}</span>
      </p>
      <p>Año que cursa:</p>
      <span>{review.nivelCurso}</span>
      <p>Dificultad (del 1 al 5):</p>
      <span>{review.dificultad}</span>
      <p>{review.descripcion}</p>
    </div>
  );
}
