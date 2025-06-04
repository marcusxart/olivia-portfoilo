import { useEffect, useState } from "react";
import type { Theme } from "../../types";

/**
 * Custom React hook to manage dark/light theme without using localStorage.
 *
 * Steps:
 * 1. Initialize theme state with "light" as the default value.
 * 2. Whenever the theme state changes, update the `<html>` element's class list:
 *    - Add the "dark" class if the theme is "dark".
 *    - Remove the "dark" class if the theme is "light".
 * 3. The theme change is not persisted in localStorage, so it resets on page reload.
 *
 * @returns An object containing:
 *  - `theme`: current theme ("light" or "dark")
 *  - `setTheme`: function to update the theme state
 */
export function useTheme(): {
  theme: Theme;
  setTheme: (theme: Theme) => void;
} {
  // Initialize theme with default "light"
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Reference the root <html> element
    const root = window.document.documentElement;

    // Add or remove "dark" class depending on theme state
    root.classList.toggle("dark", theme === "dark");
  }, [theme]); // Run this effect every time `theme` changes

  return { theme, setTheme };
}
