import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL", level: 78 },
      { name: "MongoDB", level: 82 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <ScrollReveal delay={delay}>
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full gradient-bg transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  </ScrollReveal>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-md mx-auto">
            Technologies & tools I work with
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <ScrollReveal key={cat.title} delay={ci * 100}>
              <div className="glass rounded-2xl p-6 md:p-8 hover:neon-glow transition-all duration-300 h-full">
                <h3 className="font-display text-lg font-semibold mb-6 text-primary">
                  {cat.title}
                </h3>
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={(ci * 100) + (si * 50)}
                  />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
