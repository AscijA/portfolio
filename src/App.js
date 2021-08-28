import Navbar from "./components/layout/navbar/Navbar";
import "./assets/fonts.css";
import Footer from "./components/layout/footer/Footer";
import { Fragment } from "react";
import ContactMe from "./pages/ContactMe/ContactMe";
function App() {
  return (
    <Fragment>
      <Navbar />
      <ContactMe/>
      <Footer />
    </Fragment>
  );
}

export default App;
