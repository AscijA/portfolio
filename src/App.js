import "./assets/fonts.css";
import { Route, Redirect, Switch } from "react-router";

import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import ContactMe from "./pages/ContactMe/ContactMe";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home/">
          <Home />
        </Route>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
