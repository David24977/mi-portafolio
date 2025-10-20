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
          <span className="text-yellow-400 dark:text-yellow-400">
            David Ferrer Sapiña
          </span>
        </h1>

        <h2 className="mt-4 text-lg sm:text-xl text-sky-50 font-medium dark:text-sky-200">
          Desarrollador de software especializado en{" "}
          <span className="font-semibold">Java</span>
          <span className="font-semibold">
            , Spring Boot y React con JavaScript
          </span>
        </h2>

        <p className="max-w-2xl text-sky-50 text-lg leading-relaxed dark:text-sky-300">
          Me apasiona crear aplicaciones eficientes, estructuradas y fáciles de
          mantener. Disfruto resolviendo problemas reales a través del código y
          construyendo soluciones que combinan lógica, rendimiento y diseño.
        </p>

        <p className="mt-6 text-1xl sm:text-2xl font-semibold text-yellow-400 dark:text-yellow-400 drop-shadow-md">
          Bienvenido a mi portafolio.
        </p>
        <p className="mt-6 text-sky-50 font-medium dark:text-sky-200">
          Aquí encontrarás los proyectos que reflejan mi forma de trabajar.
        </p>
      </div>
    </motion.div>
  );
}
