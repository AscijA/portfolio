import "./assets/fonts.css";
import { Fragment } from "react";

import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import ContactMe from "./pages/ContactMe/ContactMe";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
function App() {
  return (
    <Fragment>
      <Navbar />
      {/* <ContactMe/> */}
      {/* <ErrorPage /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
