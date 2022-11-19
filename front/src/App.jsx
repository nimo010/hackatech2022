import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegistroPage from "./pages/RegistroPage/RegistroPage";
import CarreraPage from "./pages/CarreraPage/CarreraPage";
import MisReservasPage from "./pages/MisReservasPage/MisReservasPage";
import CrearReviewPage from "../src/pages/CrearReviewPage/CrearReviewPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/registro" component={RegistroPage}></Route>

        <Route exact path="/home" component={HomePage}></Route>
        <Route
          exact
          path="/carreras/:id_carrera/"
          component={CarreraPage}
        ></Route>
        <Route exact path="/crear-review" component={CrearReviewPage}></Route>

        <Route exact path="/not-found" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
