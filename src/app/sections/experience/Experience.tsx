// src/app/sections/experience/Experience.tsx
// NO 'use client' here!

import { experienceData } from '@/lib/experienceData';
import ExperienceClient from './ExperienceClient';

export default function Experience() {
    return (
        <section id="experience" className="w-full py-16 md:py-24 px-4 bg-[var(--background)]">
            <div className="container mx-auto max-w-6xl">
            
                {/* Static Title (Rendered on Server) */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-16 text-[var(--foreground)]">
                        My Experience
                    </h2>
                </div>

                {/* Interactive Part (Client Component) */}
                <ExperienceClient data={experienceData} />

            </div>
        </section>
    );
}