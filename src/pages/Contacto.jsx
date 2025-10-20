import { motion } from "framer-motion";
export default function Contacto() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-800 px-6 py-16 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-sky-100"
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6">
          Contacto
        </h2>

        <p className="text-lg text-slate-700 mb-8 dark:text-sky-100">
          Puedes ponerte en contacto conmigo a través de los siguientes canales:
        </p>

        <ul className="space-y-4 text-lg">
          <li>
            📧 <strong className="text-sky-700">Email:</strong>{" "}
            <a
              href="mailto:davidferrersapinya@gmail.com"
              className="text-slate-700 hover:text-sky-600 transition dark:text-sky-100"
            >
              davidferrersapinya@gmail.com
            </a>
          </li>

          <li>
            💼 <strong className="text-sky-700">LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/david-ferrer-sapinya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-sky-600 transition dark:text-sky-100"
            >
              linkedin.com/in/david-ferrer-sapinya
            </a>
          </li>

          <li>
            💻 <strong className="text-sky-700">GitHub:</strong>{" "}
            <a
              href="https://github.com/David24977"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-sky-600 transition dark:text-sky-100"
            >
              github.com/David24977
            </a>
          </li>
        </ul>

        <div className="mt-10">
          <p className="text-slate-600 dark:text-sky-300">
            Estoy abierto a colaborar en proyectos, participar en equipos de
            desarrollo o continuar aprendiendo en entornos profesionales.
          </p>
          </div>
          <div className="mt-6">
          <a
            href="mailto:davidferrersapinya@gmail.com"
            className="inline-block px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold shadow-md hover:bg-sky-700 transition"
            
          >
            Envíame un correo<span className="ml-2">📨</span>

          </a>
        </div>
      </div>
    </motion.section>
  );
}
