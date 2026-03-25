import { motion } from "framer-motion";
import Fermar from "../assets/Fermar.png";

export default function Proyectos() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[calc(100vh-6rem)] bg-gradient-to-b from-sky-100 via-white to-sky-200 text-slate-800 px-6 py-16 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-sky-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-4">
          Mis proyectos
        </h2>

        <p className="text-lg text-slate-700 mb-12 dark:text-sky-100">
          Proyectos reales enfocados en backend, arquitectura y desarrollo con inteligencia artificial.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* 🧠 AIQuery API (DESTACADO) */}
          <div className="bg-white/70 backdrop-blur rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 p-6 transition flex flex-col justify-between border border-purple-200">
            <div>
              <span className="inline-block text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded mb-2">
                Proyecto destacado
              </span>

              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                AIQuery API (LucaResponse)
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed">
                API REST con integración de inteligencia artificial que permite realizar consultas en lenguaje natural.
                Incluye frontend interactivo tipo chat con generación de respuestas en tiempo real mediante LLM.
              </p>

              <div className="flex flex-wrap gap-2 mt-3 text-xs">
                <span className="bg-purple-100 px-2 py-1 rounded">Spring Boot</span>
                <span className="bg-purple-100 px-2 py-1 rounded">Spring AI</span>
                <span className="bg-purple-100 px-2 py-1 rounded">Groq</span>
                <span className="bg-purple-100 px-2 py-1 rounded">React</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href="https://lucaresponse.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Ver demo
              </a>

              <a
                href="https://github.com/David24977"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-purple-600 text-purple-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-purple-50 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* 📰 Plataforma Noticias (DESTACADO) */}
          <div className="bg-white/70 backdrop-blur rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 p-6 transition flex flex-col justify-between border border-emerald-200">
            <div>
              <span className="inline-block text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded mb-2">
                Proyecto destacado
              </span>

              <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                Plataforma Noticias Digitales
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed">
                Aplicación full stack con backend en Spring Boot y frontend en React para la gestión y visualización de noticias.
                Incluye panel de administración y despliegue en producción.
              </p>

              <div className="flex flex-wrap gap-2 mt-3 text-xs">
                <span className="bg-emerald-100 px-2 py-1 rounded">Spring Boot</span>
                <span className="bg-emerald-100 px-2 py-1 rounded">React</span>
                <span className="bg-emerald-100 px-2 py-1 rounded">MySQL</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href="https://cullera-digital.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
              >
                Ver demo
              </a>

              <a
                href="https://github.com/David24977/cullera-digital-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-emerald-600 text-emerald-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-emerald-50 transition"
              >
                Backend
              </a>

              <a
                href="https://github.com/David24977/cullera-digital-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-emerald-600 text-emerald-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-emerald-50 transition"
              >
                Frontend
              </a>
            </div>
          </div>

          {/* 🐍 FastAPI AI */}
          <div className="bg-white/70 backdrop-blur rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 p-6 transition flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-sky-700 mb-2">
                FastAPI Product AI Microservice
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed">
                Microservicio backend en Python con análisis de productos mediante inteligencia artificial.
                Arquitectura por capas con SQLAlchemy y consumo de LLM.
              </p>

              <div className="flex flex-wrap gap-2 mt-3 text-xs">
                <span className="bg-sky-100 px-2 py-1 rounded">FastAPI</span>
                <span className="bg-sky-100 px-2 py-1 rounded">PostgreSQL</span>
                <span className="bg-sky-100 px-2 py-1 rounded">SQLAlchemy</span>
                <span className="bg-sky-100 px-2 py-1 rounded">AI</span>
              </div>
            </div>

            <a
              href="https://github.com/David24977/Product_FastApi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-sky-700 transition"
            >
              Ver en GitHub
            </a>
          </div>

          {/* LonjaApp */}
          <div className="bg-white/70 backdrop-blur rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 p-6 transition flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-sky-700 mb-2">
                LonjaApp
              </h3>
              <p className="text-slate-700 text-sm">
                Gestión de hielo y cajas con backend en Spring Boot y frontend en React.
              </p>
            </div>

            <a
              href="https://github.com/David24977/proyectoLonja"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-sky-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-sky-700 transition"
            >
              Ver en GitHub
            </a>
          </div>

          {/* FallaApp */}
          <div className="bg-white/70 backdrop-blur rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 p-6 transition flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-sky-700 mb-2">
                FallaApp
              </h3>
              <p className="text-slate-700 text-sm">
                Aplicación de escritorio para gestión de falleros y cuotas.
              </p>
            </div>

            <a
              href="https://github.com/David24977/FallaApp"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-sky-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-sky-700 transition"
            >
              Ver en GitHub
            </a>
          </div>

          {/* FerMar */}
          <div className="bg-white/70 backdrop-blur rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 p-6 transition flex flex-col justify-between">
            <div>
              <img
                src={Fermar}
                alt="FerMar"
                className="w-full h-40 object-contain mb-4"
              />

              <h3 className="text-xl font-semibold text-sky-700 mb-2">
                Construcciones FerMar
              </h3>

              <p className="text-slate-700 text-sm">
                Web profesional responsive con galería y despliegue en Vercel.
              </p>
            </div>

            <div className="mt-6 flex gap-3 justify-center">
              <a
                href="https://construcciones-fermar.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-slate-900 text-sm px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
              >
                Ver web
              </a>

              <a
                href="https://github.com/David24977/construcciones-fermar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-sky-700 transition"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}