// src/app/components/Navbar.tsx
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { ThemeSwitcher } from './ThemeSwitcher';
import { FiUser, FiBriefcase, FiCode, FiImage, FiMail } from 'react-icons/fi';

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
                <div className="md:hidden flex items-center gap-4"> {/* <-- WRAPPER DIV */}
                    <ThemeSwitcher />
                    <MobileMenu />
                </div>

                {/* --- Desktop Menu (for medium screens and up) --- */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/#about" className="text-[var(--nav-link)] hover:text-[var(--nav-link-hover)]">
                        <span className="flex items-center gap-2"> {/* Wrapper */}
                            <FiUser className="h-4 w-4" /> {/* Icon */}
                            ABOUT
                        </span>
                    </Link>
                    <Link href="/#experience" className="text-[var(--nav-link)] hover:text-[var(--nav-link-hover)]">
                        <span className="flex items-center gap-2">
                            <FiBriefcase className="h-4 w-4" />
                            EXPERIENCE
                        </span>
                    </Link>
                    <Link href="/#projects" className="text-[var(--nav-link)] hover:text-[var(--nav-link-hover)]">
                        <span className="flex items-center gap-2">
                            <FiCode className="h-4 w-4" />
                            PROJECTS
                        </span>
                    </Link>
                    <Link href="/gallery" className="text-[var(--nav-link)] hover:text-[var(--nav-link-hover)]">
                        <span className="flex items-center gap-2">
                            <FiImage className="h-4 w-4" />
                            GALLERY
                        </span>
                    </Link>
                    <Link
                        href="/#contact"
                        className="bg-[var(--primary)] text-white px-4 py-2 rounded-md hover:opacity-90 flex items-center gap-2" // Added flex items-center gap-2
                    >
                        <FiMail className="h-4 w-4" /> {/* Icon for Contact Button */}
                        CONTACT
                    </Link>
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
}