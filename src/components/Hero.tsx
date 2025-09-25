import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in-up">
          <div className="mb-6">
            <p className="text-lg text-muted-foreground mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-gradient">Riya Rana</span>
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Full-Stack Developer
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crafting beautiful mobile experiences with{" "}
              <span className="text-neon-cyan font-semibold">Flutter</span> and
              robust backend systems with{" "}
              <span className="text-neon-purple font-semibold">NestJS</span>.
              Passionate about clean code and innovative solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-background font-semibold px-8 py-3 rounded-full hover-glow transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background font-semibold px-8 py-3 rounded-full hover-glow transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/riyrana13"
              className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300 hover-glow"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/riyahrana"
              className="text-muted-foreground hover:text-neon-purple transition-colors duration-300 hover-glow"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:riyahrana@gmail.com"
              className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300 hover-glow"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown
              className="mx-auto text-muted-foreground cursor-pointer hover:text-neon-cyan transition-colors duration-300"
              size={32}
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
