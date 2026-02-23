import { useState } from "react";
import { Send, Linkedin, Github, Twitter, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:jyothidodali@example.com", label: "Email" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder
    alert("Thank you for your message! I'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-neon-purple/5 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-md mx-auto">
            Have a project in mind? Let's work together.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-8">
          <ScrollReveal direction="left" className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full gradient-bg text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal direction="right" className="md:col-span-2 flex flex-col justify-center">
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold mb-6 text-foreground">Connect with me</h3>
              <div className="space-y-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:neon-glow transition-all">
                      <s.icon size={18} />
                    </div>
                    <span className="text-sm">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
