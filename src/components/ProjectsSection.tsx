import { ExternalLink, Github, Shield, Lock, Bot, Network, Brain, Server } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "File Encryption Tool",
    description: "Python tool using AES + RSA for secure file handling with symmetric and asymmetric encryption.",
    tags: ["Python", "AES", "RSA", "Cryptography"],
    icon: Lock,
  },
  {
    title: "Python Port Scanner",
    description: "Custom-built scanner supporting full-range and categorized scans with progress visualization.",
    tags: ["Python", "Networking", "Security"],
    icon: Network,
  },
  {
    title: "AI/NLP Chatbot",
    description: "Intelligent chatbot using Python & NLP for natural language understanding and responses.",
    tags: ["Python", "NLP", "AI", "Machine Learning"],
    icon: Bot,
  },
  {
    title: "Blockchain Messaging",
    description: "Prototype demonstrating tamper-proof communication using cryptographic hashing.",
    tags: ["Blockchain", "Security", "Hashing"],
    icon: Shield,
  },
  {
    title: "ML-Based NGFW (LSTM)",
    description: "Deep learning model for real-time attack detection on raw network traffic.",
    tags: ["LSTM", "Deep Learning", "Network Security"],
    icon: Brain,
  },
  {
    title: "University Network Sim",
    description: "Two-campus secure network design using Three-Tier architecture in Cisco Packet Tracer.",
    tags: ["Cisco", "Networking", "Architecture"],
    icon: Server,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-mono text-3xl font-bold flex items-center gap-4">
            <span className="text-primary">#</span>projects
            <span className="h-px flex-1 bg-border max-w-xs hidden sm:block" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group border border-border rounded-lg bg-card overflow-hidden hover-glow"
            >
              {/* Project header with icon */}
              <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                <project.icon className="w-12 h-12 text-primary/60 group-hover:text-primary transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-5 space-y-4">
                <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-xs font-mono text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 text-primary hover:bg-primary/10 font-mono text-xs"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border text-muted-foreground hover:text-primary hover:border-primary/30 font-mono text-xs"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="mt-12 p-6 border border-border rounded-lg bg-card">
          <h3 className="font-mono text-lg mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            CTF Platforms & Labs
          </h3>
          <p className="text-muted-foreground mb-4">
            Active on TryHackMe and HackTheBox, continuously sharpening practical penetration testing skills.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded font-mono text-sm text-primary">
              TryHackMe
            </span>
            <span className="px-4 py-2 bg-accent/10 border border-accent/30 rounded font-mono text-sm text-accent">
              HackTheBox
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
