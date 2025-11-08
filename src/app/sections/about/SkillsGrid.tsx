// src/app/sections/about/SkillsGrid.tsx
// No longer need 'next/image'
import { skillsData } from '@/lib/skillData'; // Corrected import path

export default function SkillsGrid() {
    return (
        <div className="p-4 bg-[var(--background)] dark:bg-[var(--selected-background)] rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold font-serif mb-6 text-[var(--foreground)] text-center">
                My Tech Stack
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-4">
                {skillsData.map((skill) => {
                    // --- 1. Get the component from the data ---
                    const SkillIcon = skill.icon;

                        return (
                            <div
                                key={skill.name}
                                // title={`Proficiency: ${skill.proficiency}`}
                                // make each cell a fixed height so names line up, and use 'group' for inner hover
                                className="relative flex flex-col items-center justify-between p-3 rounded-md transition-colors duration-200 group h-28"
                            >

                                {/* Render the SkillIcon component. Scale the icon itself on hover so layout doesn't shift. */}
                                <SkillIcon className="h-10 w-10 mb-2 text-[var(--foreground)] transition-transform duration-200 transform-gpu origin-center will-change-transform group-hover:scale-125" />

                                {/* Text container pinned to the bottom so all names align horizontally */}
                                <div className="w-full flex flex-col items-center text-center">
                                    {/* Skill Name (Always visible, changes color on hover) */}
                                    <span className="text-xs text-[var(--foreground-muted)] font-sans transition-colors duration-200 group-hover:text-[var(--primary)]">
                                        {skill.name}
                                    </span>

                                    {/* Proficiency: reserved space below the name; fades in without pushing layout */}
                                    <span className="block h-4 mt-1 text-xs text-[#16a34a] dark:text-[#b3eb91] opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
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