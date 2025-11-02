// src/app/sections/about/SkillsGrid.tsx
// No longer need 'next/image'
import { skillsData } from '@/lib/skillData'; // Corrected import path

export default function SkillsGrid() {
    return (
        <div className="p-4 bg-[var(--background)] dark:bg-[var(--selected-background)] rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold font-serif mb-6 text-[var(--foreground)] text-center">
                My Tech Stack
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {skillsData.map((skill) => {
                    // --- 1. Get the component from the data ---
                    const SkillIcon = skill.icon;

                    return (
                        <div
                            key={skill.name}
                            // title={`Proficiency: ${skill.proficiency}`}
                            // 2. 'group' class allows 'group-hover:' styles in the SVG to work
                            className="flex flex-col items-center justify-center p-3 rounded-md transition-all duration-200 group hover:scale-110"
                        >
              
                            {/* --- 3. Render the SkillIcon component --- */}
                            {/* We pass a className for sizing and default color */}
                            <SkillIcon className="h-10 w-10 mb-2 text-[var(--foreground)]" />

                            {/* --- Text Container --- */}
                            <div className="flex flex-col items-center text-center mt-2">
                                {/* Skill Name (Always visible, changes color on hover) */}
                                <span 
                                    className="text-xs text-[var(--foreground-muted)] font-sans transition-colors duration-200 group-hover:text-[var(--primary)]">
                                    {skill.name}
                                </span>

                                {/* Proficiency (Hidden by default, fades in and gains height on hover) */}
                                <span 
                                    className="block text-xs text-[#b3eb91] h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:h-4 group-hover:opacity-100"
                                >
                                    {skill.proficiency}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}