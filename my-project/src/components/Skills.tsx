export default function Skills() {
  const skills = [
    { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS3", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "Sass/SCSS", level: 85, color: "from-pink-500 to-rose-500" },
    { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-blue-500" },
    { name: "JavaScript", level: 88, color: "from-yellow-500 to-orange-500" },
    { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-800" },
    { name: "React", level: 90, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", level: 87, color: "from-gray-700 to-gray-900" },
  ];

  const tools = [
    "Git & GitHub",
    "VS Code",
    "Figma",
    "Webpack",
    "Vite",
    "npm/yarn",
    "Chrome DevTools",
    "Responsive Design",
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 px-4 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-slate-800 dark:text-white">
              Technical Skills
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                      {skill.name}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-slate-800 dark:text-white">
              Tools & Others
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-slate-50 dark:bg-slate-800 p-3 sm:p-4 rounded-lg text-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200 hover:scale-105 transform"
                >
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">
                    {tool}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-slate-800 dark:text-white">
                What I Bring
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                    Responsive & Mobile-First Design
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                    Performance Optimization
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                    Cross-Browser Compatibility
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                    SEO Best Practices
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                    Clean, Maintainable Code
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
