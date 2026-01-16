import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Business Website",
      description:
        "Developed a responsive and user-friendly business website for BeySolution, showcasing their services and enhancing customer engagement.",
      image: "/images/bey-solution.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API"],
      liveUrl: "http://beysolution.com/",
      githubUrl: "https://github.com/noahhamid/Bay-solutions",
      featured: true,
    },
    {
      id: 2,
      title: "Business Website",
      description:
        "Developed an interactive platform for a petroleum enterprise to streamline asset monitoring and data visualization, providing stakeholders with real-time insights into production metrics and operational performance.",
      image: "/images/jr.png",
      technologies: ["Next.js", "TypeScript"],
      liveUrl: "https://jr-petroleum.com/",
      githubUrl: "https://github.com/noahhamid/JR-petroleum",
      featured: true,
    },
    {
      id: 3,
      title: "Business Website",
      description:
        "Created a professional website for an auction company to showcase their services and participation in auctions, helping them improve their online presence and client engagement.",
      image: "/images/mine-ray.png",
      technologies: ["React", "Typescript", "Tailwind css"],
      liveUrl: "https://mine-raiy-trading-c329.vercel.app/",
      githubUrl: "https://github.com/noahhamid/Mine_Raiy_Trading",
      featured: false,
    },
    {
      id: 4,
      title: "Dee Coffee",
      description:
        "Developed a premium e-commerce experience for a specialty coffee roastery, featuring an intuitive bean subscription service and an interactive brewing guide designed to bring world-class flavors to home baristas.",
      image: "/images/dee.png",
      technologies: ["React", "Typescript", "Tailwind CSS"],
      liveUrl: "https://dee-coffee.com/",
      githubUrl: "https://github.com/noahhamid/Dee-coffee",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Latest Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for frontend development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white dark:bg-slate-800 shadow-lg"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-slate-800 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  >
                    Featured
                  </Badge>
                </div>
                <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button size="sm" className="flex-1" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 bg-transparent"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-slate-800 dark:text-white">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-slate-800 shadow-md"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-slate-800 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 pt-0">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/noahhamid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
