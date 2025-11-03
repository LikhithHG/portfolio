// src/app/components/BasicInfo.tsx
import React from 'react';

// This is a Server Component. It just renders static text.
export default function BasicInfo() {
    return (
        <div className="space-y-4">
            <p className="text-lg text-[var(--foreground)] font-serif leading-relaxed text-justify">
                I'm Likhith. I'm a software developer driven by a passion for building scalable applications. 
                My journey has taken me from gaining experience at Oracle Health to my current role as a Software Developer 2 (Member of Technical Staff) on the DevOps team for Oracle's OCI IoT service.
            </p>
            <p className="text-lg text-[var(--foreground)] font-serif leading-relaxed text-justify">
                I hold a Master's degree in Computer Science from the University of Colorado, Denver (graduated May 2025), which builds upon my Bachelor's degree where I was awarded a <strong>Gold Medal</strong> for the highest GPA. My passion for technology extends to continuous learning; I am a <strong>CCNA</strong> and an <strong>Oracle Cloud Infrastructure (OCI) GenAI Professional</strong> certified. 
                This, combined with my prior work at Oracle Health, gives me a strong background in full-stack development, AI, and networking, with extensive experience in JavaScript, Python, and cloud technologies.
            </p>
            <p className="text-lg text-[var(--foreground)] font-serif leading-relaxed text-justify">
                I'm driven to solve complex algorithmic challenges, but I believe in a strong work-life balance. Beyond coding, I love to get outdoors. You'll often find me hiking or treking new trails, driven by the challenge and the reward of the view from the top. I also enjoy swimming to clear my head, visiting new places, listening to music, and cooking. At the end of the day, I value connecting with my mother and friends back in India.
            </p>
            <p className="text-lg text-[var(--foreground)] font-serif leading-relaxed text-justify">
                Let's connect and build something amazing!
            </p>
        </div>
    );
}