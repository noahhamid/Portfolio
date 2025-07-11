import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm font-poppins">
                    N
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-lg font-bold font-poppins bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Noah Dev
                </div>
                <div className="text-xs text-slate-500 -mt-1">
                  Frontend Developer
                </div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Frontend Developer passionate about creating beautiful, functional
              web experiences that make a difference.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#home"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/noahhamid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/noah-hamid-7109482a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:noahhamid111@gmail.com"
                className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              Open to freelance opportunities and full-time positions.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Noah Hamid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
