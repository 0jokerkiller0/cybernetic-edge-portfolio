import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  { href: "skills", label: "Skills" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          onClick={() => handleScroll("home")}
          className="cursor-pointer font-mono text-xl font-bold text-primary"
        >
          &lt;Sushant /&gt;
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
