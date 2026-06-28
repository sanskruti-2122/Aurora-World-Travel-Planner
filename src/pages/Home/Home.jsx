import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import TourismSection from "../../components/TourismSection/TourismSection";
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import MonumentSlider from "../../components/MonumentSlider/MonumentSlider";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TourismSection />
      <ReviewSlider />
      <MonumentSlider />
      <Footer />
    </>
  );
}

export default Home;