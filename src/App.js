import React from "react";
import "./App.css";
// import Route si Switch din pachetul extern react router dom pentru a pe putea instantia in App.js
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Page404 from "./pages/Page404";
import Login from "./pages/login/Login";
import Category from "./pages/category/Category";
import TermsAndConditions from "./pages/terms-and-conditions/TermsAndConditions";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div>
      {/* Switch ia toate rutele valabile iar in cazul default daca nu s-a gasit ruta respectiva se afiseaza pagina 404 */}
      <Switch>
        {/* pun atributul exact deoarece vreau ca ruta sa fie exact / */}
        {/* pentru ruatre dinamica pun /:categoryName */}
        <Route path="/category/:categoryName" component={Category} />
        {/*primul pas este sa trimitem props-urile catre componenta Home */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* ...props-trimite mai departe props-urile history, location ,match*/}
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/termsAndConditions" component={TermsAndConditions} />
        {/* pun in ULR id-ul produsului ca parametru */}
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;

