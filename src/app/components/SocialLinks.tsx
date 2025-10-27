import Link from 'next/link';
import { socialLinks } from '@/lib/links'; // Import your pure data

// 1. Import all the icons
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

// 2. Create a "map" to link the string ID to the actual component
const iconMap = {
    linkedin: FaLinkedin,
    github: FaGithub,
    leetcode: SiLeetcode,
};

export default function SocialLinks() {
    return (
        <div className="flex justify-center md:justify-start gap-6 mt-8">
            {/* 3. Map over your data array */}
            {socialLinks.map((link) => {
            
                // 4. Look up the correct icon component from the map
                const IconComponent = iconMap[link.id];
            
                // 5. Define the base styles and add the unique hover color
                const combinedClasses = `text-3xl md:text-4xl ${link.color} transition-transform duration-200 ease-in-out hover:scale-125`;
                return (
                    <Link
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                    >
                        <IconComponent className={combinedClasses} />
                    </Link>
                );
            })}
        </div>
    );
}