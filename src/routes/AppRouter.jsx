import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import SobreMi from "../pages/SobreMi.jsx";
import Proyectos from "../pages/Proyectos.jsx";
import Contacto from "../pages/Contacto.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx"; 

export default function AppRouter() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </Router>
  );
}
