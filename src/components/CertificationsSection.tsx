import ScrollReveal from "./ScrollReveal";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { name: "Static Website Development", issuer: "NxtWave" },
  { name: "Responsive Website Development", issuer: "NxtWave" },
  { name: "JavaScript Programming", issuer: "NxtWave" },
  { name: "Node.js Development", issuer: "NxtWave" },
  { name: "SQL", issuer: "NxtWave" },
  { name: "Developer Foundations", issuer: "NxtWave" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-md mx-auto">
            Professional certifications & achievements
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 100}>
              <div className="glass rounded-2xl p-6 hover:neon-glow transition-all duration-300 group cursor-default h-full flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="text-primary-foreground" size={28} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
