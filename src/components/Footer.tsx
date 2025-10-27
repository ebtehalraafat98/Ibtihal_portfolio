import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left max-w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 break-words">
                <span className="text-cyan-400">Ibtihal</span> Mohamed Raafat
              </h3>
              <p className="text-sm sm:text-base text-gray-400">AEC Software Engineer</p>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:ebtehal.mohamed.raafat.abdelfatah@gmail.com"
                className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ibtihal-raafat-1a6628135/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/ebtehalraafat98"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-gray-400 text-xs sm:text-sm flex flex-wrap items-center justify-center gap-1 px-2">
              © {currentYear} Ibtihal Mohamed Raafat. Made with
              <Heart size={14} className="text-cyan-400 fill-cyan-400" />
              by Ibtihal Mohamed Raafat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
