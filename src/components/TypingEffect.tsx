import { useEffect, useState } from "react";

const phrases = ["React.js", "Node.js", "Python", "AI & ML", "MERN Stack", "TypeScript"];

const TypingEffect = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % phrases.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="font-mono text-primary">
      {text}
      <span className="animate-pulse-glow text-primary">|</span>
    </span>
  );
};

export default TypingEffect;
