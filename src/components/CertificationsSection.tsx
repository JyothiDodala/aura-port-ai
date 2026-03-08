import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

import projectMgmt from "@/assets/certificates/project-management.jpg";
import genAiWorkshop from "@/assets/certificates/gen-ai-workshop.jpg";
import pursuingMasters from "@/assets/certificates/pursuing-masters.jpg";
import genAiWorkshop2 from "@/assets/certificates/gen-ai-workshop-2.jpg";
import appreciation from "@/assets/certificates/appreciation.jpg";
import genAiMega from "@/assets/certificates/gen-ai-mega.jpg";
import devFoundations from "@/assets/certificates/developer-foundations.jpg";

type Category = "All" | "Workshops" | "Achievements" | "Courses";

interface Certificate {
  name: string;
  category: Category;
  image: string;
  issuer: string;
  date: string;
}

const certificates: Certificate[] = [
  { name: "Project Management 101", category: "Workshops", image: projectMgmt, issuer: "NxtWave – CCBP 4.0 Academy", date: "Jul 2024" },
  { name: "Generative AI Mega Workshop", category: "Workshops", image: genAiWorkshop, issuer: "NxtWave – CCBP 4.0 Academy", date: "Aug 2023" },
  { name: "Building a Generative AI Application", category: "Workshops", image: genAiWorkshop2, issuer: "NxtWave – CCBP 4.0 Academy", date: "Aug 2023" },
  { name: "Pursuing Masters Abroad", category: "Workshops", image: pursuingMasters, issuer: "NxtWave – CCBP 4.0 Academy", date: "Sep 2023" },
  { name: "Generative AI Mega Workshop", category: "Workshops", image: genAiMega, issuer: "NxtWave – CCBP 4.0 Academy", date: "Aug 2023" },
  { name: "Certificate of Appreciation", category: "Achievements", image: appreciation, issuer: "NxtWave", date: "2023" },
  { name: "Developer Foundations – Git", category: "Courses", image: devFoundations, issuer: "NxtWave – CCBP 4.0 Academy", date: "Sep 2025" },
];

const categories: Category[] = ["All", "Workshops", "Achievements", "Courses"];

const CertificationsSection = () => {
  const [active, setActive] = useState<Category>("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filtered = active === "All" ? certificates : certificates.filter((c) => c.category === active);

  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
            Professional certifications & achievements
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "gradient-bg text-primary-foreground shadow-lg"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, i) => (
            <ScrollReveal key={cert.name + i} delay={i * 80}>
              <div
                className="glass rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedImg(cert.image)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-sm font-semibold text-foreground mb-1 line-clamp-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-primary mt-1">{cert.date}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Certificate"
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
