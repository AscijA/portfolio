import AboutMeSection from "./AboutMeSection/AboutMeSection"
import classes from "./Home.module.css"
import LandingSection from "./LandingSection/LandingScreen"
import MyServicesSection from "./MyServicesSection/MyServicesSection"

const Home = () => {
  return (
    <section className={classes.section}>
        <LandingSection/>
        <AboutMeSection/>
        <MyServicesSection/>
    </section>
  );
}

export default Home