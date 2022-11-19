import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";
import ListadoReviews from "../../components/ListadosReviews/ListadoReviews";


function HomePage() {

  return (
    <LayoutGeneral>
      <p className="subtitle">Reviews de alumnos avanzados de las universidades mas populares de la Argentina, 
                para ayudarte a decidir si la carrera es para vos.</p>
      <ListadoReviews/>
    </LayoutGeneral>
  );
}

export default HomePage;
