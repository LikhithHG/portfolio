// src/app/sections/About.tsx

export default function About() {
  // Update this list with your actual skills
    const skills = [
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Tailwind CSS',
        'HTML & CSS',
        'Git & GitHub',
        'SQL',
        'Docker',
        // Add more...
    ];

    return (
        // Add id="about" for navbar scrolling
        // Use theme background and add padding
        <section id="about" className="bg-[var(--background)] py-16 md:py-24">
            <div className="container mx-auto px-8">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12 text-[var(--foreground)]">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-16">

                    {/* --- Text Content (Left Column) --- */}
                    <div className="md:w-2/3 space-y-4">
                        {/* Paragraphs using muted foreground color */}
                        <p className="text-lg text-[var(--foreground-muted)] font-serif">
                            Hello! I'm a software engineer based in [Your City, e.g., Denver, CO], with a passion
                            for creating high-performance web applications that solve real-world
                            problems. My journey in tech started when I tried to build [Your Short Story, e.g., a custom tool for...].
                        </p>
                        <p className="text-lg text-[var(--foreground-muted)] font-serif">
                            I specialize in full-stack development, particularly with **Next.js**, **TypeScript**, and related technologies. I enjoy
                            the challenge of building pixel-perfect, responsive UIs and
                            architecting scalable backend systems. I'm always eager to learn and adapt to new technologies.
                        </p>
                        <p className="text-lg text-[var(--foreground-muted)] font-serif">
                            When I'm not coding, you can find me [Your Hobby 1, e.g., hiking in the Rockies], [Your Hobby 2, e.g., exploring local coffee shops],
                            or keeping up with the latest advancements in AI and web development.
                        </p>
                    </div>

                    {/* --- Skills (Right Column) --- */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold font-serif mb-4 text-[var(--foreground)]">
                            My Key Skills
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <li
                                    key={skill}
                                    // Skill tags using theme colors
                                    className="bg-[var(--selected-background)] text-[var(--foreground)] text-sm font-medium px-3 py-1 rounded-full"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}