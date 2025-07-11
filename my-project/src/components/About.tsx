export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m a passionate Front-End Developer with a keen eye for design
              and a dedication to crafting seamless user experiences. Leveraging
              modern web technologies, I transform ideas into beautiful,
              functional websites and applications.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My journey in web development began with curiosity and has grown
              into a professional career focused on delivering high-quality,
              performant solutions. I continuously stay updated with the latest
              trends and best practices in the ever-evolving world of front-end
              development.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm sm:text-base">
                  Experience
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                  3+ Years
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm sm:text-base">
                  Projects
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                  20+ Completed
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm sm:text-base">
                  Location
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                  Remote / Global
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm sm:text-base">
                  Availability
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                  Open to Work
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                <div className="text-4xl sm:text-6xl">👨‍💻</div>
              </div>
            </div>
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400 rounded-full flex items-center justify-center text-lg sm:text-2xl animate-pulse">
              ⚡
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 bg-green-400 rounded-full flex items-center justify-center text-base sm:text-xl animate-bounce">
              🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
