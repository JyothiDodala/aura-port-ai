import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

const categories = ["All", "AI", "Web Development", "Career", "Tutorials"];

const blogs = [
  {
    title: "Getting Started with Deep Learning for Image Classification",
    excerpt: "Learn how to build your first CNN model for classifying images using TensorFlow and Keras.",
    category: "AI",
    date: "Jan 2026",
  },
  {
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Best practices for designing RESTful APIs that can handle thousands of requests.",
    category: "Web Development",
    date: "Dec 2025",
  },
  {
    title: "How I Landed My First Tech Internship",
    excerpt: "Tips and strategies for CS students looking to break into the tech industry.",
    category: "Career",
    date: "Nov 2025",
  },
  {
    title: "React Hooks Explained: A Practical Guide",
    excerpt: "Master useState, useEffect, and custom hooks with real-world examples.",
    category: "Tutorials",
    date: "Oct 2025",
  },
];

const BlogSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? blogs : blogs.filter((b) => b.category === active);

  return (
    <section id="blog" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">
            Thoughts, tutorials, and insights
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "gradient-bg text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((blog, i) => (
            <ScrollReveal key={blog.title} delay={i * 100}>
              <div className="glass rounded-2xl p-6 md:p-8 group hover:neon-glow hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-primary border border-primary/20">
                    {blog.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {blog.excerpt}
                </p>
                <button className="text-primary text-sm font-medium flex items-center gap-2 group/btn hover:gap-3 transition-all">
                  Read More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
