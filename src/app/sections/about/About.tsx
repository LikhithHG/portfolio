// src/app/sections/About.tsx
import AboutContentTabs from "@/app/sections/about/AboutContentTabs"; // Import Client Component
import SkillsGrid from "./SkillsGrid";         // Import Server Component

export default function About() {
    return (
        <section id="about" className="bg-[var(--background)] py-16 md:py-24">
            <div className="container mx-auto px-8">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-16 text-[var(--foreground)]">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-16">
            
                    {/* --- Left 2/3: Content with Tabs (Client Component) --- */}
                    <div className="md:w-2/3">
                        <AboutContentTabs />
                    </div>  

                    {/* --- Right 1/3: Skills Grid (Server Component) --- */}
                    <div className="w-full md:w-1/3">
                        <SkillsGrid />
                    </div>

                </div>
            </div>
        </section>
    );
}