// pages/Aboutus.jsx
import Footer from '../pages/components/Footer';
import AboutUsHero from '../pages/Heropage/AboutUsHero';
import AboutIntro from './abouts/AboutIntro';
import OurStory from './abouts/OurStory';
import FooterHero from './components/FooterHero';
import OurClients from './components/OurClients';
import OurTeam from './components/OurTeam';

const Aboutus = () => {
  return (
    <>
          <AboutUsHero />
          <AboutIntro />
          <OurStory />
          {/* <OurClients /> */}
          <OurTeam />
          {/* <FooterHero /> */}
      <Footer />
    </>
  );
};

export default Aboutus;
