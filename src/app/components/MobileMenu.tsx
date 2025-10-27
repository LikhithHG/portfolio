"use client"; 

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
    // State to track if the mobile menu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* --- Mobile Menu Button (Hamburger/X) --- */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggles state
                    className="text-gray-700 p-2 rounded-md hover:bg-gray-100"
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
                <div className="md:hidden w-64 bg-white shadow-lg absolute top-16 right-4 rounded-lg border border-gray-200">
                    <div className="flex flex-col items-center p-2">
                        <Link
                            href="/#about"
                            className="py-2 text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/#experience"
                            className="py-2 text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Experience
                        </Link>
                        <Link
                            href="/#projects"
                            className="py-2 text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/gallery"
                            className="py-2 text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/#contact"
                            className="mt-2 w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}