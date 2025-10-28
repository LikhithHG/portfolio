"use client"; // Important: This component needs browser interaction

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    // This prevents hydration mismatch errors.
    useEffect(() => {
        setMounted(true);
    }, []);

    // If the component hasn't mounted yet, don't render anything
    if (!mounted) {
        return null;
    }

    // Determine which icon to show based on the current theme
    const isDarkMode = theme === 'dark';
    const toggleTheme = () => setTheme(isDarkMode ? 'light' : 'dark');

    return (
        <button
            onClick={toggleTheme}
            // Use CSS variables for styling consistency
            className="p-2 rounded-md bg-[var(--selected-background)] text-[var(--foreground)] hover:opacity-80 transition-opacity"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDarkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
        </button>
    );
};