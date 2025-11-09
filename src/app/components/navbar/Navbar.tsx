// src/app/components/Navbar.tsx
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { ThemeSwitcher } from './ThemeSwitcher';
import { navLinks } from '@/lib/navLinkData';

export default function Navbar() {
    return (
        <nav 
            className="sticky top-0 z-50 w-full transition-colors duration-300 ease-in-out
                        bg-[var(--background)] shadow-md border-b border-[var(--border)]
                        md:fixed md:bg-[var(--background)]/5 md:backdrop-blur-sm md:shadow-none md:border-none"
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
                {/* Logo/Home Link */}
                <Link 
                    href="/#home" 
                    className="text-2xl font-semibold font-dancing text-[var(--color-name-logo)] tracking-widest hover:cursor-pointer"
                >
                    Likhith HG
                </Link>

                {/* --- Mobile Menu Button (for small screens) --- */}
                <div className="lg:hidden flex items-center gap-4"> {/* <-- WRAPPER DIV */}
                    <ThemeSwitcher />
                    <MobileMenu />
                </div>

                {/* --- Desktop Menu (for medium screens and up) --- */}
                <div className="hidden lg:flex items-center space-x-6">
                    {/* The .map() loop now includes "CONTACT" */}
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <Link 
                                key={link.text} 
                                href={link.href} 
                                className="text-[var(--nav-link)] hover:text-[var(--nav-link-hover)]"
                            >
                                <span className="flex items-center gap-2">
                                    <Icon className="h-4 w-4" />
                                    {link.text}
                                </span>
                            </Link>
                        );
                    })}

                    <ThemeSwitcher />

                </div>
            </div>
        </nav>
    );
}