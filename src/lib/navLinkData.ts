// src/lib/navLinksData.ts
import { IconType } from 'react-icons';
import { FiUser, FiBriefcase, FiCode, FiImage, FiMail } from 'react-icons/fi';

export type NavLink = {
    href: string;
    text: string;
    icon: IconType;
};

export const navLinks: NavLink[] = [
    { href: '/#about', text: 'ABOUT', icon: FiUser },
    { href: '/#experience', text: 'EXPERIENCE', icon: FiBriefcase },
    { href: '/#projects', text: 'PROJECTS', icon: FiCode },
    { href: '/gallery', text: 'GALLERY', icon: FiImage },
    { href: '/#contact', text: 'CONTACT', icon: FiMail },
];