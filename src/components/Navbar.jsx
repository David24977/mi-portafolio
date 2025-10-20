import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav  className="flex items-center justify-center gap-6 py-4 bg-white shadow-md border-b border-gray-200" >
      <Link to="/"className="text-sky-700 font-semibold hover:text-sky-500 transition">Inicio</Link> |{" "}
      <Link to="/sobre-mi" className="text-sky-700 font-semibold hover:text-sky-500 transition">Sobre mí</Link> |{" "}
      <Link to="/proyectos" className="text-sky-700 font-semibold hover:text-sky-500 transition">Proyectos</Link> |{" "}
      <Link to="/contacto" className="text-sky-700 font-semibold hover:text-sky-500 transition">Contacto</Link>
    </nav>
  );
}
