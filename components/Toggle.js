import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SparklesIcon } from "@heroicons/react/outline";

export default function Toggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <SparklesIcon className="h-4 w-4" />
    </button>
  );
}
