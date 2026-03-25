import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center bg-gradient-to-b from-sky-500 via-sky-300 to-sky-500 text-center px-6 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-sky-100"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md dark:text-sky-100">
          Hola, soy{" "}
          <span className="text-yellow-400">David Ferrer Sapiña</span>
        </h1>

        <h2 className="mt-4 text-lg sm:text-xl text-sky-50 font-medium dark:text-sky-200">
          Backend Developer especializado en{" "}
          <span className="font-semibold">
            Java · Spring Boot · APIs REST · Inteligencia Artificial
          </span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-sky-50 text-lg leading-relaxed dark:text-sky-300">
          Desarrollo APIs robustas, escalables y bien estructuradas, aplicando
          buenas prácticas y arquitectura limpia. Me enfoco en crear soluciones
          reales que combinan rendimiento, claridad y mantenibilidad.
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-sky-50 text-lg leading-relaxed dark:text-sky-300">
          Actualmente trabajo integrando modelos de inteligencia artificial en
          backend para construir aplicaciones más inteligentes y útiles.
        </p>

        {/* BOTONES CLAVE */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://davidferrer.vercel.app/proyectos"
            className="bg-yellow-400 text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Ver proyectos
          </a>

          <a
            href="mailto:davidferrersapinya@gmail.com"
            className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition"
          >
            Contactar
          </a>
        </div>

        <p className="mt-8 text-xl font-semibold text-yellow-400 drop-shadow-md">
          Bienvenido a mi portfolio
        </p>
      </div>
    </motion.div>
  );
}