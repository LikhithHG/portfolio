"use client"; // Important: This component needs browser interaction

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon, FiMonitor, FiCheck } from 'react-icons/fi';

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    // Popover state + ref for outside click
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        function onDocClick(e: MouseEvent) {
            if (!ref.current) return;
            if (!ref.current.contains(e.target as Node)) setOpen(false);
        }
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setOpen(false);
        }

        if (open) {
            document.addEventListener('mousedown', onDocClick);
            document.addEventListener('keydown', onKey);
        }

        return () => {
            document.removeEventListener('mousedown', onDocClick);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    if (!mounted) return null;

    // Effective applied theme when system is selected
    const effective = theme === 'system' ? resolvedTheme : theme;

    const baseBtn = 'p-2 rounded-md border transition-colors flex items-center justify-center';
    const darkBtn = 'bg-white border-white text-yellow-500';
    const lightBtn = 'bg-[var(--foreground)] border-[var(--border)] text-white';

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen((v) => !v);
                }}
                className={`${baseBtn} ${effective === 'dark' ? darkBtn : lightBtn} hover:opacity-90`}
                aria-haspopup="menu"
                aria-expanded={open}
                type="button"
            >
                {/* Show applied theme icon (sun/moon) so user sees the actual look when system is selected */}
                {effective === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-44 bg-[var(--background)] border border-[var(--border)] rounded-md shadow-lg z-50">
                    <div className="py-1">
                        <button
                            className={`w-full text-left px-3 py-2 hover:bg-[var(--selected-background)] flex items-center justify-between gap-2 ${theme === 'system' ? 'font-semibold' : 'font-normal'}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setTheme('system');
                                setOpen(false);
                            }}
                        >
                            <span className="flex items-center gap-2"><FiMonitor className="h-4 w-4" /> System</span>
                            {theme === 'system' && <FiCheck className="h-4 w-4" />}
                        </button>

                        <button
                            className={`w-full text-left px-3 py-2 hover:bg-[var(--selected-background)] flex items-center justify-between gap-2 ${theme === 'light' ? 'font-semibold' : 'font-normal'}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setTheme('light');
                                setOpen(false);
                            }}
                        >
                            <span className="flex items-center gap-2"><FiMoon className="h-4 w-4" /> Light</span>
                            {theme === 'light' && <FiCheck className="h-4 w-4" />}
                        </button>

                        <button
                            className={`w-full text-left px-3 py-2 hover:bg-[var(--selected-background)] flex items-center justify-between gap-2 ${theme === 'dark' ? 'font-semibold' : 'font-normal'}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setTheme('dark');
                                setOpen(false);
                            }}
                        >
                            <span className="flex items-center gap-2">
                                <FiSun className="h-4 w-4" /> 
                                Dark
                            </span>
                            {theme === 'dark' && <FiCheck className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};