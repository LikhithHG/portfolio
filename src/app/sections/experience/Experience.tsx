import { experienceData } from '@/lib/experienceData';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
    return (
        <section id="experience" className="w-full py-16 md:py-24 px-4 bg-[var(--background)]">
            <div className="container mx-auto max-w-6xl">
                {/* Section Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-transparent bg-gradient-to-r from-[#FFD700] to-[#20B2AA] bg-clip-text mb-4">
                        My Experience
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#FFD700] to-[#20B2AA] mx-auto"></div>
                </div>

                {/* Experience Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experienceData.map((experience) => (
                        <ExperienceCard key={experience.id} experience={experience} />
                    ))}
                </div>
            </div>
        </section>
    );
}
