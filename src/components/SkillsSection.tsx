import { Terminal, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Terminal,
    skills: [
      "Penetration Testing",
      "Web App Security",
      "Vulnerability Assessment",
      "Network Scanning",
      "Exploitation",
      "OSINT",
      "Documentation",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Wireshark",
      "Shodan",
      "Gobuster",
      "Nikto",
      "Python",
      "Bash",
      "Linux",
    ],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Adaptability",
      "Team Collaboration",
      "Attention to Detail",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-mono text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary">#</span>skills
          <span className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 border border-border rounded-lg bg-card hover-glow group"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary group-hover:animate-pulse" />
                <h3 className="font-mono text-lg font-semibold">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted border border-border rounded text-sm font-mono text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
