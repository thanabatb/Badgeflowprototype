import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

type PaletteMode = "a" | "b";

const STORAGE_KEY = "badgeflow.palette-mode";

function getInitialPaletteMode(): PaletteMode {
  if (typeof window === "undefined") return "a";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  const initial = saved === "b" ? "b" : "a";
  document.documentElement.setAttribute("data-palette", initial);
  return initial;
}

export function PaletteModeToggle() {
  const [mode, setMode] = useState<PaletteMode>(getInitialPaletteMode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-palette", mode);
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="hidden sm:flex items-center gap-1 rounded-full border border-[#94A3B8]/25 bg-[#F5F7FA] px-1 py-1">
      <span className="inline-flex items-center gap-1 px-2 text-[11px] text-[#94A3B8]">
        <Palette className="h-3.5 w-3.5" />
        Palette
      </span>
      <button
        type="button"
        onClick={() => setMode("a")}
        className={`h-7 rounded-full px-2.5 text-xs transition-colors ${
          mode === "a"
            ? "bg-[#4F6DF5] text-white"
            : "text-[#1E2A4A] hover:bg-white"
        }`}
        aria-label="Switch to Palette A"
      >
        A
      </button>
      <button
        type="button"
        onClick={() => setMode("b")}
        className={`h-7 rounded-full px-2.5 text-xs transition-colors ${
          mode === "b"
            ? "bg-[#4F6DF5] text-white"
            : "text-[#1E2A4A] hover:bg-white"
        }`}
        aria-label="Switch to Palette B"
      >
        B
      </button>
    </div>
  );
}
