import { Linkedin, Github, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Mail, href: "mailto:jyothidodali@example.com" },
  ];

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="font-display text-xl font-bold gradient-text">
            Jyothi Dodali
          </a>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }); }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © 2026 Jyothi Dodali. All rights reserved. Made with <Heart size={14} className="text-neon-pink" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
