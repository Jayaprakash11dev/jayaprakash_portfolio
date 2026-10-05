import { useEffect, useState } from "react";

const STORAGE_KEY = "dark-theme";

const readStored = () => {
  try {
    const item = window.localStorage.getItem(STORAGE_KEY);
    return item === null ? true : JSON.parse(item);
  } catch {
    return true;
  }
};

// Dark is the default. The class is applied to <html> so Tailwind's
// `dark:` variants and the page background switch together.
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(readStored);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(isDark));
    } catch {
      // Storage unavailable (private mode); theme still works for this visit.
    }
  }, [isDark]);

  return [isDark, setIsDark];
};

export default useDarkMode;
