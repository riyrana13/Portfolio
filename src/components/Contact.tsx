import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "riyahrana@gmail.com",
      href: "mailto:riyahrana@gmail.com",
      color: "text-neon-cyan",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9978340275",
      href: "tel:+91 9978340275",
      color: "text-neon-purple",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Surat, Gujarat",
      href: "#",
      color: "text-neon-cyan",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/riyrana13",
      color: "hover:text-neon-cyan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/riyahrana",
      color: "hover:text-neon-purple",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:riyahrana@gmail.com",
      color: "hover:text-neon-cyan",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="glass-card hover-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-full bg-secondary/50 ${info.color}`}
                      >
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {info.label}
                        </p>
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient-secondary">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-full bg-secondary/50 text-muted-foreground ${social.color} transition-all duration-300 hover-glow`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  Follow me on social media for updates on my latest projects,
                  tech insights, and development tips. Always happy to connect
                  with fellow developers!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
