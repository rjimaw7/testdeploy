import BlackSection from "./components/BlackSection/BlackSection";
import Footer from "./components/Footer/Footer";
import GraySection from "./components/GraySection/GraySection";
import Hero from "./components/Hero/Hero";
import Logos from "./components/Logos/Logos";
import Navbar from "./components/Navbar/Navbar";
import SectionPhoto from "./components/SectionPhoto/SectionPhoto";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <Logos />
        <SectionPhoto />
      </div>
      <div className="gray-container">
        <GraySection />
      </div>
      <div className="container">
        <BlackSection />
      </div>
      <div className="gray-container">
        <Footer />
      </div>
    </>
  );
};

export default App;
