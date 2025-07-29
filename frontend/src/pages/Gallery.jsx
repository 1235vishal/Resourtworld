// pages/Aboutus.jsx
import Footer from "../pages/components/Footer";
import GalleryMain from "./components/GalleryMain";
import HeroGallery from "./Heropage/HeroGallery";

const Gallerypage = () => {
  return (
    <>
      <HeroGallery />

      <GalleryMain />
      {/* <TourHero />
      <FooterHero /> */}
      <Footer />
    </>
  );
};

export default Gallerypage;
