import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Smartphone, Globe } from "lucide-react";

const About = () => {
  const techStack = [
    "Node.js",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "Flutter",
    "Dart",
    "Firebase",
    "AWS",
    "SES",
    "EC2",
    "S3",
    "Lightsail",
    "Jira",
    "Git",
    "GitHub",
  ];
  const skills = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Creating beautiful, performant mobile apps with Flutter and Dart",
      color: "text-neon-cyan",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Building scalable APIs and microservices with NestJS and TypeScript",
      color: "text-neon-purple",
    },
    {
      icon: Code2,
      title: "Full-Stack Solutions",
      description: "End-to-end development from database to user interface",
      color: "text-neon-purple",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description:
        "Modern web development with React, Next.js, and cloud services",
      color: "text-neon-cyan",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 3+ years of experience
            building innovative digital solutions. I specialize in creating
            seamless mobile experiences and robust backend systems that scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="glass-card hover-glow group transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="glass-card p-8 max-w-5xl mx-auto mb-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4 text-gradient-secondary text-center">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-secondary/50 text-foreground hover:bg-secondary/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.35)] transition-shadow"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div> */}

        <div className="glass-card p-8 max-w-4xl mx-auto animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gradient-secondary">
                My Journey
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Started as a backend developer with NestJS, then discovered
                Flutter and was drawn to its versatility and performance for
                mobile development. Over time, evolved into a full-stack
                developer capable of working across a wide range of frameworks
                and tech stacks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Always learning, always building. Currently exploring AI
                integration, cloud-native architectures, and the latest in
                mobile development trends.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">
                  Flutter/Dart
                </span>
                <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">
                  NestJS/Node.js
                </span>
                <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">
                  React/TypeScript
                </span>
                <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">Git/GitHub</span>
                <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">
                  Database/Cloud/AWS
                </span>
                <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
