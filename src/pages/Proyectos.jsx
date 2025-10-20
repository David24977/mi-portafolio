import { motion } from  "framer-motion";
export default function Proyectos() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[calc(100vh-6rem)] bg-gradient-to-b from-sky-100 via-white to-sky-200 text-slate-800 px-6 py-16 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-sky-100"
    >
   
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-4">
          Mis proyectos
        </h2>

        <p className="text-lg text-slate-700 mb-10 dark:text-sky-100">
          Aquí puedes ver algunos de mis proyectos más destacados:
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* LonjaApp */}
          <div className="bg-white/70 backdrop-blur rounded-xl shadow-md hover:shadow-lg p-6 transition flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-sky-700 mb-2">
                LonjaApp
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Gestión de hielo y cajas. <br />
                <span className="font-medium">Stack:</span> Spring Boot + MySQL + React
              </p>
            </div>
            <a
              href="https://github.com/David24977/proyectoLonja"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-sky-700 transition"
            >
              Ver en GitHub
            </a>
          </div>

          {/* FallaApp */}
          <div className="bg-white/70 backdrop-blur rounded-xl shadow-md hover:shadow-lg p-6 transition flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-sky-700 mb-2">
                FallaApp
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Aplicación de gestión de falleros y cuotas. <br />
                <span className="font-medium">Stack:</span> JavaFX + SQLite
              </p>
            </div>
            <a
              href="https://github.com/David24977/FallaApp"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-sky-700 transition"
            >
              Ver en GitHub
            </a>
          </div>

          {/* Notificaciones Push */}
          <div className="bg-white/70 backdrop-blur rounded-xl shadow-md hover:shadow-lg p-6 transition flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-sky-700 mb-2">
                Notificaciones Push
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Backend con envío de notificaciones a Firebase. <br />
                <span className="font-medium">Stack:</span> Spring Boot y Android Studio con Kotlin
              </p>
            </div>
            <a
              href="https://github.com/David24977/notificaciones-push-spring"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-sky-700 transition"
            >
              Ver en GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
