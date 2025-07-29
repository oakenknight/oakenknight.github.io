'use client';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors text-lg mono"
      aria-label="Toggle theme"
    >
      {isDark ? '☀' : '☾'}
    </button>
  );
}
