// src/app/components/BasicInfo.tsx
import React from 'react';

// This is a Server Component. It just renders static text.
export default function BasicInfo() {
    return (
        <div className="space-y-4">
            <p className="text-lg text-[var(--foreground)] font-serif leading-relaxed text-justify">
                I'm Likhith, a passionate Software Developer with a strong background in full-stack development, AI, and networking.
                I have experience working with JavaScript, Python, and cloud technologies to build scalable and efficient applications.
            </p>
            <p className="text-lg text-[var(--foreground)] font-serif leading-relaxed text-justify">
                I am pursuing a Master's degree in Computer Science from the University of Colorado, Denver, and have previously worked at Oracle Health.
                Currently, I'm focused on building robust applications, solving algorithmic challenges, and enhancing AI-powered solutions.
            </p>
            <p className="text-lg text-[var(--foreground)] font-serif leading-relaxed text-justify">
                Beyond coding, I enjoy listening to music, cooking, and I like to converse with my friends back in India and my mother!
                Let's connect and build something amazing!
            </p>
        </div>
    );
}