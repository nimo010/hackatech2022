import { useLocation } from "react-router-dom";
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer";
import ListadoReviews from "../ListadosReviews/ListadoReviews";
import './LayoutGeneral.css'

function LayoutGeneral({ children }) {
    const loc = useLocation();
    
  return (
    <>
        <Header page={loc.pathname}/>
            <main style={{'margin' : '80px 15px', 'minHeight' : 'calc(100vh - 80px - 65px)'}}>
              { children }
              <p className="subtitle">Reviews de alumnos avanzados de las universidades mas populares de la Argentina, 
                para ayudarte a decidir si la carrera es para vos.</p>
              <ListadoReviews/>
            </main>
        <Footer />
    </>
  );
}

export default LayoutGeneral;
