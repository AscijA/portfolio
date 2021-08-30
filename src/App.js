import "./assets/fonts.css";
import { Fragment } from "react";

import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import ContactMe from "./pages/ContactMe/ContactMe";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AboutMe from "./pages/AboutMe/AboutMe";
function App() {
  return (
    <Fragment>
      <Navbar />
      <AboutMe/>
      {/* <ContactMe/> */}
      {/* <ErrorPage /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
