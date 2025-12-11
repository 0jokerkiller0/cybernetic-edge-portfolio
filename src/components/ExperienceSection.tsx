import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Cyber Security Intern",
    company: "Hack Secure",
    location: "Mumbai",
    period: "Feb 2025 – Mar 2025",
    points: [
      "Performed penetration testing & vulnerability assessment labs",
      "Hands-on experience with Nmap, Metasploit, Wireshark, Burp Suite",
      "Documented findings and provided remediation recommendations",
    ],
  },
  {
    title: "AI Intern",
    company: "Edunet Foundation",
    location: "Mumbai",
    period: "Jan 2025 – Mar 2025",
    points: [
      "Learned AI & NLP fundamentals for chatbot creation",
      "Built and deployed an AI-powered chatbot using Python & NLP",
      "Gained experience in machine learning model deployment",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="font-mono text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary">#</span>experience
          <span className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[7px] md:-translate-x-2 animate-glow-pulse" />

                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 1 ? "md:col-start-1 md:pr-12" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="p-6 border border-border rounded-lg bg-card hover-glow group">
                    <div className="flex items-start gap-3 mb-4">
                      <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className={index % 2 === 1 ? "md:text-right w-full" : ""}>
                        <h3 className="font-mono text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-mono text-sm">
                          {exp.company} • {exp.location}
                        </p>
                        <p className="text-muted-foreground text-sm font-mono">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <ul
                      className={`space-y-2 text-muted-foreground text-sm ${
                        index % 2 === 1 ? "md:text-right" : "text-left"
                      }`}
                    >
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary">›</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
