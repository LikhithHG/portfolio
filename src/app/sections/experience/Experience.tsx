import { experienceData } from '@/lib/experienceData';
import ExperienceClient from './ExperienceClient';

// 1. Simulate a Database Call (or replace with real DB call later)
async function getExperienceData() {
    // In the future, this line becomes: const data = await db.experience.findMany()
    return experienceData; 
}

// 2. Mark component as 'async'
export default async function Experience() {
    const data = await getExperienceData(); // Fetch data on the server

    // --- SEO: JSON-LD (Remains the same) ---
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        // ... (rest of your JSON-LD logic using 'data')
    };

    return (
        <section id="experience" className="w-full py-16 md:py-24 px-4 bg-[var(--background)]">
            {/* ... Title ... */}
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-16 text-[var(--foreground)]">
                My Experience
            </h2>
            {/* Pass the server-fetched data to the client component */}
            <ExperienceClient data={data} />
        </section>
    );
}