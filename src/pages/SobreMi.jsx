import { motion } from "framer-motion";

export default function SobreMi() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-gradient-to-b from-sky-100 via-white to-sky-200 px-6 py-16 text-slate-800 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-sky-100"
    >
      <div className="max-w-4xl text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 dark:text-sky-300 mb-6">
          Sobre mí
        </h2>

        <p className="text-lg leading-relaxed mb-6 dark:text-sky-200">
          Soy <span className="font-semibold">David Ferrer Sapiña</span>, desarrollador backend especializado en 
          <span className="font-semibold"> Java con Spring Boot</span>, con experiencia en 
          <span className="font-semibold"> Python (FastAPI)</span> y frontend con 
          <span className="font-semibold"> React</span>.
        </p>

        <p className="text-lg leading-relaxed mb-6 dark:text-sky-200">
          Me enfoco en diseñar APIs limpias, seguras y escalables utilizando
          <span className="font-semibold"> arquitectura por capas, DTOs y buenas prácticas</span>.
          He desarrollado proyectos completos donde gestiono desde la base de datos
          hasta la interfaz de usuario.
        </p>

        <p className="text-lg leading-relaxed mb-6 dark:text-sky-200">
          Trabajo con tecnologías como 
          <span className="font-semibold"> Spring Boot, FastAPI, MySQL, PostgreSQL, SQLite, MongoDB y TiDB</span>,
          además de integrar servicios externos como 
          <span className="font-semibold"> Firebase</span>.
        </p>

        <p className="text-lg leading-relaxed mb-6 dark:text-sky-200">
          Actualmente estoy centrado en la integración de 
          <span className="font-semibold"> inteligencia artificial en backend</span>,
          desarrollando APIs capaces de procesar lenguaje natural y aportar valor real a los usuarios.
        </p>

        <p className="text-lg leading-relaxed dark:text-sky-200">
          Busco seguir creciendo como desarrollador backend, aportando soluciones
          eficientes, bien diseñadas y listas para entornos reales.
        </p>
      </div>
    </motion.section>
  );
}