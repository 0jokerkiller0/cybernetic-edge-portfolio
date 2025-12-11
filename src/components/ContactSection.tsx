import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "work.sushanttelrandhe@gmail.com",
    href: "mailto:work.sushanttelrandhe@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9422961219",
    href: "tel:+919422961219",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sushant-telrandhe",
    href: "https://www.linkedin.com/in/sushant-telrandhe-1917b0236",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "0jokerkiller0",
    href: "https://github.com/0jokerkiller0",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-mono text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary">#</span>contact
          <span className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm interested in freelance opportunities and full-time positions
              in cybersecurity. If you have a security challenge or want to
              collaborate, don't hesitate to reach out!
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card hover-glow group"
                >
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="text-foreground group-hover:text-primary transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-lg bg-card p-6">
            <h3 className="font-mono text-lg mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-muted border border-border rounded font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-muted border border-border rounded font-mono text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-muted border border-border rounded font-mono text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono">
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
