import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";
import ListadoReviews from "../../components/ListadosReviews/ListadoReviews";
import "./HomePage.css";

function HomePage() {
  return (
    <LayoutGeneral>
      <h1 className="main-title">
        Una comunidad de estudiantes te ayuda a decidir qué carrera es la indicada para vos.
      </h1>
      <h2 className="sub-title">
        Leé que opinan de estas carreras los estudiantes que las cursan:
      </h2>
      <ListadoReviews />
    </LayoutGeneral>
  );
}

export default HomePage;
