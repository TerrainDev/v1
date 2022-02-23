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
      className="text-blue border border-green w-16 rounded-full font-semibold text-sm px-2 bg-white hover:bg-gray "
    >
      {theme === "light" ? "Other" : "Earth"}
    </button>
  );
}
