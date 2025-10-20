import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-sky-700 text-white mt-auto py-3 border-t border-slate-600 shadow-inner
                   dark:bg-slate-800 dark:text-sky-100 dark:border-slate-700 dark:shadow-[0_-1px_3px_rgba(255,255,255,0.05)]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 text-sm">
        {/* Nombre y año */}
        <p className="text-center sm:text-left text-sm sm:text-base">
          © {new Date().getFullYear()} David Ferrer Sapiña
        </p>

        {/* Enlaces sociales */}
        <div className="flex gap-6 text-lg">
          <a
            href="https://github.com/David24977"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-200 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/david-ferrer-sapinya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-200 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:davidferrersapinya@gmail.com"
            className="hover:text-sky-200 transition"
            aria-label="Email"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
}
