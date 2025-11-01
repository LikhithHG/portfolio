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

    const buttonBgClass = isDarkMode
        ? 'bg-white' // White background when dark mode is active (sun icon shown)
        : 'bg-[var(--selected-background)]';

    const tooltipText = isDarkMode ? "Switch to light mode" : "Switch to dark mode";

    return (
        <button
            onClick={toggleTheme}
            // Use CSS variables for styling consistency
            className="p-2 rounded-md ${buttonBgClass} hover:opacity-80 transition-opacity"
            aria-label={tooltipText}
            title={tooltipText}
        >
            {isDarkMode ? <FiSun className="h-5 w-5 text-yellow-400" /> : <FiMoon className="h-5 w-5 text-slate-700" />}
        </button>
    );
};