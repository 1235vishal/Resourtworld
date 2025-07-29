import AboutUs from "./components/AboutUs";
import Hero from "./components/CateringHero";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import MainContact from "./components/MainContact";
import MenuSection from "./components/MenuSection";
import NewsSection from "./components/NewsSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialCard";
import TourHero from "./components/TourHero";
import VenueGalleryp1 from "./components/VenueGalleryp1";
import WhyUsSection from "./components/WhyUs";
import SerQuickNav from "./homecomponents/SerQuickNav";
import WelcomeSection from "./homecomponents/WelcomeSection";

const Home = () => {
  return (
    <>
      <Hero />
      <VenueGalleryp1 />
      <WelcomeSection />
      {/* <SerQuickNav /> */}

      <ServicesSection />
      <AboutUs />
      {/* <MenuSection /> */}

      <WhyUsSection />
      <TestimonialSection />
      <Gallery />
      {/* <TourHero /> */}
      {/* <NewsSection /> */}
      <MainContact />
      <Footer />
    </>
  );
};

export default Home;
