// src/app/components/SkillsGrid.tsx
import Image from 'next/image';
import { skillsData } from '@/lib/skillData'; // Use alias

export default function SkillsGrid() {
    return (
        <div className="p-4 bg-[var(--background)] dark:bg-[var(--selected-background)] rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold font-serif mb-6 text-[var(--foreground)] text-center">
                My Tech Stack
            </h3>
            {/* Grid: 3 cols on mobile, 5 on desktop */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {skillsData.map((skill) => (
                    <div
                        key={skill.name}
                        // Tooltip on hover
                        title={`Proficiency: ${skill.proficiency}`}
                        className="flex flex-col items-center justify-center p-3 rounded-md transition-all duration-200 group hover:scale-110"
                    >
                        <div className="relative h-10 w-10"> {/* Container for responsive image */}
                            <Image
                                src={`/images/skills/${skill.icon}`}
                                alt={`${skill.name} logo`}
                                fill
                                style={{ objectFit: 'contain' }} // Ensures logo isn't stretched
                            />
                        </div>
                        <span className="text-xs text-center text-[var(--foreground-muted)] font-sans mt-2 group-hover:text-[var(--primary)]">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}