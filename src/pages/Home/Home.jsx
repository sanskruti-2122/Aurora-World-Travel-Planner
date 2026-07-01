import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import TourismSection from "../../components/TourismSection/TourismSection";
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import MonumentSlider from "../../components/MonumentSlider/MonumentSlider";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import LoginModal from "../../components/LoginModal/LoginModal";


function Home() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Navbar
    openLogin={() => setShowLogin(true)}
/>
      <Hero />
      <TourismSection />
      <ReviewSlider />
      <MonumentSlider />
      <Footer
    openLogin={() => setShowLogin(true)}
/>
<LoginModal
    open={showLogin}
    onClose={() => setShowLogin(false)}
/>
    </>
  );
}

export default Home;