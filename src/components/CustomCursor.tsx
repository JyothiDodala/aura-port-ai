import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] rounded-full border border-neon-cyan/50 transition-transform duration-150"
        style={{
          left: pos.x - 16,
          top: pos.y - 16,
          width: 32,
          height: 32,
          transform: clicking ? "scale(0.8)" : "scale(1)",
        }}
      />
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-neon-cyan"
        style={{
          left: pos.x - 3,
          top: pos.y - 3,
          width: 6,
          height: 6,
        }}
      />
    </>
  );
};

export default CustomCursor;
