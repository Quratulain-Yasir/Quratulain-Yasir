import BackToTopButton from "./components/BackToTopButton";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LatestWork from "./components/LatestWork";
import Services from "./components/Services"; 

function App() {
  return (
    <div className="bg-[#362072]"> 
        <Header />
      <Hero /> 
      <Services /> 
      <LatestWork />  
      <FAQ />
      <Contact /> 
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
