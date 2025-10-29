// src/app/components/Navbar.tsx
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-[var(--background)] shadow-md border-b border-[var(--border)]">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
                {/* Logo/Home Link */}
                <Link href="/" className="text-2xl font-semibold font-dancing text-[var(--color-name-logo)] tracking-widest hover:cursor-pointer">
                    Likhith HG
                </Link>

                {/* --- Mobile Menu Button (for small screens) --- */}
                <div className="md:hidden flex items-center gap-4"> {/* <-- WRAPPER DIV */}
                    <ThemeSwitcher /> {/* <-- ADD SWITCHER HERE */}
                    <MobileMenu />    {/* <-- Keep MobileMenu here */}
                </div>

                {/* --- Desktop Menu (for medium screens and up) --- */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/#about" className="text-[var(--foreground)] hover:text-[var(--primary)]">
                        About
                    </Link>
                    <Link href="/#experience" className="text-[var(--foreground)] hover:text-[var(--primary)]">
                        Experience
                    </Link>
                    <Link href="/#projects" className="text-[var(--foreground)] hover:text-[var(--primary)]">
                        Projects
                    </Link>
                    <Link href="/gallery" className="text-[var(--foreground)] hover:text-[var(--primary)]">
                        Gallery
                    </Link>
                    <Link
                        href="/#contact"
                        className="bg-[var(--primary)] text-white px-4 py-2 rounded-md hover:opacity-90"
                    >
                        Contact
                    </Link>
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
}