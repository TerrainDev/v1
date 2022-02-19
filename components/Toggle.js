import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Toggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-skin-titles border border-borderCol-main w-16 rounded-full font-semibold text-sm px-2 bg-skin-button-light hover:bg-skin-button-light-hover "
    >
      {theme === "light" ? "Water" : "Earth"}
    </button>
  );
}
