import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Taskie Mobile App",
      description:
        "Taskie is a smart and lightweight Flutter app that helps you manage tasks with scheduled local notifications, timezone-aware reminders, and image attachments. Schedule it, toggle reminders, attach a motivating image — and boom, you're organized like a boss.",
      image: "/assets/taskie.png",
      technologies: ["Flutter", "Dart"],
      githubUrl: "https://github.com/riyrana13/taskie",
      liveUrl: "https://github.com/riyrana13/Taskie/releases/tag/v1.0.0",
      gradient: "from-neon-cyan to-neon-purple",
    },
    {
      title: "Textify Mobile APP",
      description:
        "Textify is a simple and fast Flutter app that lets you extract text from images using OCR (Optical Character Recognition). Just click or upload an image, and boom — your text is ready to be copied and used anywhere!",
      image: "/assets/textify.png",
      technologies: ["Flutter", "Dart", "google_mlkit_text_recognition"],
      githubUrl: "https://github.com/riyrana13/Textify",
      liveUrl: "https://github.com/riyrana13/Textify/releases/tag/v1.0.0",
      gradient: "from-neon-cyan to-neon-purple",
    },
    {
      title: "Noodle Mobile APP",
      description:
        "Noodle is an offline AI application that provides ChatGPT-like responses using Google's Gemma 3n model. Chat with AI without internet connectivity, with support for both text conversations and image input analysis - all responses are in text format.",
      image: "/assets/noodle.png",
      technologies: ["Flutter", "Dart", "gemma-3n-E2B-it-litert-preview"],
      githubUrl: "https://github.com/riyrana13/Noodle",
      liveUrl: "https://github.com/riyrana13/Noodle/releases/tag/v1.0.0",
      gradient: "from-neon-cyan to-neon-purple",
    },
    {
      title: "Wind Farm Management System",
      description:
        "A robust wind farm management system built with NestJS, featuring real-time collaboration, advanced authentication, and scheduling. Includes web scraping, cron jobs, and full automation capabilities.",
      image: "/assets/windfarm.png",
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "React"],
      githubUrl: null,
      liveUrl: null,
      gradient: "from-neon-purple to-neon-cyan",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in
            Flutter, NestJS, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hover-glow group overflow-hidden transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transition-opacity duration-300">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-48 md:h-56 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary/50 text-foreground hover:bg-secondary/70 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {project.githubUrl !== null && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background transition-all duration-300"
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
                  )}
                  {project.liveUrl !== null && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-cyan hover:to-neon-purple text-background transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
