// src/app/components/Navbar.tsx
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
                {/* Logo/Home Link */}
                <Link href="/" className="text-2xl font-bold text-gray-900">
                    Likhith HG
                </Link>

                {/* --- Mobile Menu Button (for small screens) --- */}
                <MobileMenu />

                {/* --- Desktop Menu (for medium screens and up) --- */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/#about" className="text-gray-600 hover:text-blue-600">
                        About
                    </Link>
                    <Link href="/#experience" className="text-gray-600 hover:text-blue-600">
                        Experience
                    </Link>
                    <Link href="/#projects" className="text-gray-600 hover:text-blue-600">
                        Projects
                    </Link>
                    <Link href="/gallery" className="text-gray-600 hover:text-blue-600">
                        Gallery
                    </Link>
                    <Link
                        href="/#contact"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}