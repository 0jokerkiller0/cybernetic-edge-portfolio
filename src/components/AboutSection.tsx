import { GraduationCap, Award, Target } from "lucide-react";

const certifications = [
  { name: "eJPT", status: "Completed" },
  { name: "Security+", status: "Completed" },
  { name: "CCNA", status: "Trained" },
];

const education = [
  {
    degree: "B.E. in Computer Science",
    school: "Mumbai University",
    year: "2026",
  },
  {
    degree: "12th Standard",
    school: "Somalwar High School",
    year: "2022",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-mono text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary">#</span>about-me
          <span className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am a penetration tester specializing in{" "}
              <span className="text-primary">web application security</span>. I
              help organizations identify vulnerabilities and strengthen their
              security posture through comprehensive security assessments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My interests span across penetration testing, network security,
              automation, and leveraging AI for security applications. I believe
              in continuous learning and staying ahead of emerging threats.
            </p>

            {/* Certifications */}
            <div className="space-y-4 pt-4">
              <h3 className="font-mono text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="px-4 py-2 border border-primary/30 rounded bg-muted/50 font-mono text-sm hover-glow cursor-default"
                  >
                    <span className="text-primary">{cert.name}</span>
                    <span className="text-muted-foreground text-xs ml-2">
                      ({cert.status})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Education */}
            <div className="space-y-4">
              <h3 className="font-mono text-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-4 border border-border rounded-lg bg-card hover-glow"
                  >
                    <p className="font-mono text-foreground">{edu.degree}</p>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                    <p className="text-primary font-mono text-sm mt-1">
                      {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Areas */}
            <div className="space-y-4">
              <h3 className="font-mono text-lg flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web App Security",
                  "Network Penetration",
                  "OSINT",
                  "Vulnerability Research",
                  "Security Automation",
                ].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-sm font-mono text-primary"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
