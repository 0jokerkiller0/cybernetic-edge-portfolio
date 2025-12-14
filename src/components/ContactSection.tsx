import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await fetch(
        "https://formsubmit.co/ajax/work.sushanttelrandhe@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject: "Portfolio Contact",
            message,
          }),
        }
      );

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      alert("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-mono text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary">contact</span>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm interested in freelance opportunities and full-time positions
              in cybersecurity. Feel free to reach out!
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
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="text-foreground group-hover:text-primary">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="border border-border rounded-lg bg-card p-6">
            <h3 className="font-mono text-lg mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              Send a Message
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-muted border rounded"
              />

              <input
                required
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-muted border rounded"
              />

              <textarea
                required
                rows={4}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-muted border rounded resize-none"
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full font-mono"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {success && (
                <p className="text-green-500 text-sm font-mono">
                  ✔ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
