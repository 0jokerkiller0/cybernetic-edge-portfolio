import { ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative cyber-grid pt-20"
    >
      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="font-mono text-primary text-sm tracking-wider">
              // Hello World, I'm
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-mono leading-tight">
              <span className="text-foreground">Sushant</span>{" "}
              <span className="text-gradient-cyber">Telrandhe</span>
            </h1>
            <h2 className="font-mono text-xl md:text-2xl text-muted-foreground">
              Penetration Tester &{" "}
              <span className="text-primary">Web Application Security</span>{" "}
              Researcher
            </h2>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              I specialize in identifying vulnerabilities and strengthening
              security posture for digital systems. Breaking things to make them
              stronger.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono animate-glow-pulse"
              >
                <a href="#projects">
                  View Portfolio <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 font-mono hover-glow"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-2">
              <span className="w-3 h-3 bg-cyber-green rounded-full animate-pulse" />
              <span className="font-mono text-sm text-muted-foreground">
                Currently available for opportunities
              </span>
            </div>
          </div>

          <div className="relative flex justify-center" style={{ animationDelay: "0.2s" }}>
            {/* Profile image frame */}
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-lg border-glow overflow-hidden bg-muted relative">
                {/* Placeholder avatar with cyber aesthetic */}
                <div className="w-full h-full bg-gradient-to-br from-muted to-background flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                      <span className="font-mono text-4xl text-primary">ST</span>
                    </div>
                  </div>
                </div>
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary" />
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background border border-primary/50 px-4 py-2 rounded font-mono text-xs">
                <span className="text-muted-foreground">status:</span>{" "}
                <span className="text-primary">ethical_hacker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
