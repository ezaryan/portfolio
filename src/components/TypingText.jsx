import { useEffect, useState } from "react";

const words = [
  "Software Developer",
  "Cybersecurity Enthusiast",
  "Full Stack Developer",
  "Problem Solver",
];

export default function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(currentWord.substring(0, text.length + 1));

          if (text.length + 1 === currentWord.length) {
            setDeleting(true);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));

          if (text.length === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 45 : text.length === currentWord.length ? 1800 : 80
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <span className="text-neutral-300">
      {text}
      <span className="ml-1 animate-pulse text-neutral-600">|</span>
    </span>
  );
}