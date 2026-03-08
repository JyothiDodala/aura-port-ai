import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Award } from "lucide-react";

import projectMgmt from "@/assets/certificates/project-management.jpg";
import genAiWorkshop from "@/assets/certificates/gen-ai-workshop.jpg";
import pursuingMasters from "@/assets/certificates/pursuing-masters.jpg";
import genAiWorkshop2 from "@/assets/certificates/gen-ai-workshop-2.jpg";
import appreciation from "@/assets/certificates/appreciation.jpg";
import genAiMega from "@/assets/certificates/gen-ai-mega.jpg";
import devFoundations from "@/assets/certificates/developer-foundations.jpg";
import staticWebsite from "@/assets/certificates/static-website.jpg";

const categories = ["All", "Workshops", "Achievements", "Courses"] as const;
type Category = (typeof categories)[number];

const certificates = [
  { name: "Project Management 101", category: "Workshops" as Category, image: projectMgmt, issuer: "NxtWave – CCBP 4.0 Academy", date: "Jul 2024" },
  { name: "Generative AI Mega Workshop", category: "Workshops" as Category, image: genAiWorkshop, issuer: "NxtWave – CCBP 4.0 Academy", date: "Aug 2023" },
  { name: "Building a Generative AI App", category: "Workshops" as Category, image: genAiWorkshop2, issuer: "NxtWave – CCBP 4.0 Academy", date: "Aug 2023" },
  { name: "Pursuing Masters Abroad", category: "Workshops" as Category, image: pursuingMasters, issuer: "NxtWave – CCBP 4.0 Academy", date: "Sep 2023" },
  { name: "Generative AI Workshop", category: "Workshops" as Category, image: genAiMega, issuer: "NxtWave – CCBP 4.0 Academy", date: "Aug 2023" },
  { name: "Certificate of Appreciation", category: "Achievements" as Category, image: appreciation, issuer: "NxtWave", date: "2023" },
  { name: "Developer Foundations – Git", category: "Courses" as Category, image: devFoundations, issuer: "NxtWave – CCBP 4.0 Academy", date: "Sep 2025" },
];

const CertificationsSection = () => {
  const [active, setActive] = useState<Category>("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filtered = active === "All" ? certificates : certificates.filter((c) => c.category === active);

  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Professional certifications & achievements
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  active === cat
                    ? "gradient-bg text-primary-foreground border-transparent shadow-lg"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, i) => (
            <div
              key={`${cert.name}-${i}`}
              className="glass rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedImg(cert.image)}
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex items-start gap-3">
                <Award className="text-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-primary mt-1">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Certificate"
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
