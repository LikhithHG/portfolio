"use client"; 

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { navLinks } from '@/lib/navLinkData';

export default function MobileMenu() {
    // State to track if the mobile menu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

    // Close on Escape key
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') 
                setIsMenuOpen(false);
        }

        if (isMenuOpen) {
            document.addEventListener('keydown', onKey);
        }

        return () => document.removeEventListener('keydown', onKey);
    }, [isMenuOpen]);

    // Focus first link when opening menu
    useEffect(() => {
        if (isMenuOpen) {
            setTimeout(() => firstLinkRef.current?.focus(), 50);
        }
    }, [isMenuOpen]);

    return (
        <>
            {/* --- Mobile Menu Button (Hamburger/X) --- */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggles state
                    className="text-[var(--foreground)] p-2 rounded-md bg-[var(--selected-background)]"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* --- Mobile Menu Dropdown --- */}
            {isMenuOpen && (
                <>
                    {/* Overlay to close menu on outside click */}
                    <div
                        className="fixed top-16 left-0 right-0 bottom-0 bg-black/20 z-30 lg:hidden"
                        onClick={() => setIsMenuOpen(false)}
                        aria-hidden
                    />

                    {/* Full-width menu container*/}
                    <div className="lg:hidden fixed top-16 left-0 right-0 bg-[var(--background)] shadow-lg rounded-b-lg border-t border-[var(--border)] z-40 p-4">
                        {/* 2. ADDED space-y-3 for gap between cards */}
                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link, index) => {
                                const Icon = link.icon;
                                return (
                                    <Link
                                        key={link.text}
                                        href={link.href}
                                        ref={index === 0 ? firstLinkRef : null}
                                        // 3. APPLY CARD STYLES HERE
                                        className="
                                            w-full p-4 rounded-lg 
                                            bg-[var(--selected-background)] text-[var(--foreground)] 
                                            hover:bg-[var(--border)] 
                                            transition-colors duration-200
                                        "
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="flex items-center justify-between w-full">
                                            {/* 4. APPLY TEXT STYLES HERE */}
                                            <span className="flex-1 text-left font-semibold tracking-wider uppercase">
                                                {link.text}
                                            </span>
                                            {/* 5. APPLY ICON STYLES HERE */}
                                            <Icon className="h-5 w-5 flex-shrink-0" />
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}