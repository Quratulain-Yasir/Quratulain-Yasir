import BackToTopButton from "./components/BackToTopButton";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LatestWork from "./components/LatestWork";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services /> 
      <LatestWork />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
