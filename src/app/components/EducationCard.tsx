// src/app/components/EducationCard.tsx
"use client"; // This component is interactive

import Image from 'next/image';
import { motion } from 'framer-motion';
import { type Education } from '@/lib/educationData'; // Import the type

// This component receives one 'edu' object as a prop
export default function EducationCard({ edu }: { edu: Education }) {
    return (
        // The motion.div is the main card container
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            // Shared card styles: theme background, rounded, max-width on desktop
            className="flex items-start gap-4 p-4 bg-[var(--selected-background)] rounded-lg md:max-w-2xl"
        >

            {/* ====================================================== */}
            {/* 1. NEW: Mobile Layout (Visible by default, hidden on medium+) */}
            {/* ====================================================== */}
            <div className="flex flex-row p-4 gap-4 md:hidden">
                {/* --- Left Column (1/5 width) --- */}
                <div className="w-1/4 flex-shrink-0 flex flex-col items-center">
                    {/* Image */}
                    <div className="relative w-full aspect-square">
                        <Image
                            src={`/images/education/${edu.logo}`}
                            alt={`${edu.school} logo`}
                            fill
                            style={{ objectFit: 'contain' }}
                            className="rounded-md"
                        />
                    </div>
                    {/* Date (Mobile) */}
                    <span className="text-xs text-[var(--foreground-muted)] text-center mt-2">
                        {edu.dateRange}
                    </span>
                </div>

                {/* --- Right Column (4/5 width) --- */}
                <div className="w-4/5 flex flex-col">
                    <h4 className="text-md font-semibold font-serif text-[var(--foreground)]">
                        {edu.school}
                    </h4>
                    <p className="text-sm font-sans text-[var(--foreground-muted)]">
                        {edu.degree}
                    </p>
                    <p className="text-xs text-[var(--foreground-muted)] mt-1">
                        {edu.description}
                    </p>    
                </div>
            </div>

            {/* ====================================================== */}
            {/* 2. EXISTING: Desktop Layout (Hidden by default, visible on medium+) */}
            {/* ====================================================== */}
            <div className="hidden md:flex items-start gap-6 p-6">
                {/* Image (Desktop) */}
                <div className="relative h-20 w-20 flex-shrink-0">
                    <Image
                        src={`/images/education/${edu.logo}`}
                        alt={`${edu.school} logo`}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="rounded-md"
                    />  
                </div>
                {/* Text (Desktop) */}
                <div className="flex-grow">
                    <div className="flex justify-between items-start">
                        <h4 className="text-lg font-semibold font-serif text-[var(--foreground)]">
                            {edu.school}
                        </h4>
                        {/* Date (Desktop) */}
                        <span className="text-xs text-[var(--foreground-muted)] flex-shrink-0 ml-2">
                            {edu.dateRange}
                        </span>
                    </div>
                    <p className="text-lg font-sans text-[var(--foreground-muted)]">
                        {edu.degree}
                    </p>
                    <p className="text-md text-[var(--foreground-muted)] mt-1">
                        {edu.description}
                    </p>
                </div>
            </div>

        </motion.div>
    );
}