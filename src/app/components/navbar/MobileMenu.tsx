"use client"; 

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiUser, FiBriefcase, FiCode, FiImage, FiMail } from 'react-icons/fi';

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
                    className="text-[var(--foreground)] p-2 rounded-md bg-[var(--selected-background)]" // <-- MODIFIED text color
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        // "Chevron Up" (Close)
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        // "Chevron Down" (Menu)
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

                    {/* Full-width menu anchored under the nav */}
                    <div className="lg:hidden fixed top-16 left-0 right-0 bg-[var(--background)] shadow-lg rounded-b-lg border-t border-[var(--border)] z-40">
                        <div className="flex flex-col items-start p-2 space-y-1 text-[var(--foreground)]">
                            <Link
                                href="/#about"
                                ref={firstLinkRef}
                                className="w-full py-2 px-3 rounded-md hover:bg-[var(--selected-background)] hover:text-[var(--primary)]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="flex items-center gap-3">
                                    <FiUser className="h-5 w-5" /> 
                                    About
                                </span>
                            </Link>
                            <Link
                                href="/#experience"
                                className="w-full py-2 px-3 rounded-md hover:bg-[var(--selected-background)] hover:text-[var(--primary)]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="flex items-center gap-3">
                                    <FiBriefcase className="h-5 w-5" /> 
                                    Experience
                                </span>
                            </Link>
                            <Link
                                href="/#projects"
                                className="w-full py-2 px-3 rounded-md hover:bg-[var(--selected-background)] hover:text-[var(--primary)]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="flex items-center gap-3">
                                    <FiCode className="h-5 w-5" /> 
                                    Projects
                                </span>
                            </Link>
                            <Link
                                href="/gallery"
                                className="w-full py-2 px-3 rounded-md hover:bg-[var(--selected-background)] hover:text-[var(--primary)]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="flex items-center gap-3">
                                    <FiImage className="h-5 w-5" /> 
                                    Gallery
                                </span>
                            </Link>
                            <Link
                                href="/#contact"
                                className="mt-2 w-full text-center bg-[var(--primary)] text-white px-4 py-2 rounded-md hover:opacity-90"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <FiMail className="h-5 w-5" /> 
                                    Contact
                                </span>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}