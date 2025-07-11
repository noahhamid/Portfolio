"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import BackgroundGraphics from "./BackgroundGraphics";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  // Typewriter effect with different phrases
  const typewriterText = useTypewriter(
    ["Hello, I'm Noah Hamid", "Frontend Developer"],
    100,
    50,
    1500
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
    >
      {/* Background Graphics */}
      <BackgroundGraphics />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <div className="animate-fade-in-up">
          {/* Typewriter Text */}
          <div className="mb-4 sm:mb-6 h-16 sm:h-20 md:h-24 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 font-light px-4">
            Crafting Beautiful Web Experiences
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            I specialize in building fast, responsive, and user-friendly web
            applications using React, Next.js, and TypeScript. Let’s collaborate
            to bring your ideas to life with clean, scalable code and intuitive
            design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              asChild
            >
              <a href="/files/NoahHamid.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-12 sm:mb-16">
            <a
              href="https://github.com/noahhamid"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <Github className="h-6 w-6 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/noah-hamid-7109482a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <Linkedin className="h-6 w-6 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="mailto:noahhamid111@gmail.com"
              className="group p-4 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <Mail className="h-6 w-6 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 transition-colors" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 mx-auto text-slate-400" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900 pointer-events-none"></div>
    </section>
  );
}
