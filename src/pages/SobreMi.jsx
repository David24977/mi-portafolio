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
          Soy <span className="font-semibold">David Ferrer Sapiña</span>,
          desarrollador de aplicaciones multiplataforma con una base sólida en
          <span className="font-semibold"> Java y Spring Boot</span>. Me
          apasiona diseñar soluciones estructuradas, seguras y fáciles de
          mantener, aplicando buenas prácticas y arquitectura limpia tanto en
          backend como en frontend.
        </p>

        <p className="text-lg leading-relaxed mb-6 dark:text-sky-200">
          Además de mi experiencia en Java, también trabajo con
          <span className="font-semibold"> Python</span> para automatización,
          análisis de datos y desarrollo de APIs ligeras, y con{" "}
          <span className="font-semibold"> JavaScript</span> en el entorno web,
          especialmente con
          <span className="font-semibold"> React</span> y{" "}
          <span className="font-semibold"> TailwindCSS</span> para construir interfaces modernas y dinámicas. 
          Esta combinación me permite abordar proyectos de manera integral, comprendiendo la
          comunicación entre el servidor y el cliente de principio a fin.
        </p>

        <p className="text-lg leading-relaxed mb-6 dark:text-sky-200">
          Aunque todavía no he trabajado en una empresa de desarrollo, he
          adquirido experiencia práctica creando{" "}
          <span className="font-semibold">
            {" "}
            proyectos reales de forma independiente
          </span>{" "}
          antes y durante mis estudios de
          <span className="font-semibold">
            {" "}
            Desarrollo de Aplicaciones Multiplataforma (DAM)
          </span>
          . He desarrollado aplicaciones completas para uso personal y para
          terceros, gestionando tanto el backend con{" "}
          <span className="font-semibold">Spring Boot</span> y
          <span className="font-semibold"> MySQL</span> como el frontend con
          <span className="font-semibold"> React</span>. Estas experiencias me
          han permitido comprender el ciclo completo de un proyecto, desde el
          diseño de la base de datos hasta la interfaz de usuario.
        </p>

        <p className="text-lg leading-relaxed mb-6 dark:text-sky-200">
          A lo largo de mis proyectos he trabajado con
          <span className="font-semibold">
            {" "}
            bases de datos MySQL, PostgreSQL y SQLite
          </span>
          , además de integrar servicios como{" "}
          <span className="font-semibold"> Firebase</span>
          para notificaciones o almacenamiento en la nube. Disfruto optimizando
          el rendimiento y la estructura del código para que las aplicaciones
          sean rápidas, escalables y fiables.
        </p>

        <p className="text-lg leading-relaxed dark:text-sky-200">
          Me considero una persona constante, con mentalidad analítica y pasión
          por el aprendizaje continuo. Mi objetivo es seguir creciendo como
          desarrollador full stack, combinando mi dominio de{" "}
          <span className="font-semibold"> Java</span> con el uso práctico de
          <span className="font-semibold"> Python</span> y{" "}
          <span className="font-semibold"> JavaScript</span> para crear soluciones eficientes, modernas y bien diseñadas.
        </p>
      </div>
    </motion.section>
  );
}
