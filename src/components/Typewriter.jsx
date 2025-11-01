// src/components/Typewriter.jsx
import { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 50 }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i >= text.length) return;
    const t = setTimeout(() => setI(i + 1), speed);
    return () => clearTimeout(t);
  }, [i, text, speed]);

  return (
    <span>
      {text.slice(0, i)}
      <span className="inline-block w-[1ch] animate-blink">|</span>
    </span>
  );
}
