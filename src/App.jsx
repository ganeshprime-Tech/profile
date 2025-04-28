import About from "./components/About";
import CertificatePortfolio from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Project />
      <CertificatePortfolio />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
