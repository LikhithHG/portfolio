// src/app/sections/about/EducationCard.tsx
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { type Education } from '@/lib/educationData';

export default function EducationCard({ edu }: { edu: Education }) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-[var(--selected-background)] rounded-lg md:max-w-3xl border border-[var(--border)] overflow-hidden"
        >

            {/* ====================================================== */}
            {/* 1. Mobile Layout (Visible by default, hidden on medium+) */}
            {/* ====================================================== */}
            <div className="flex flex-col justify-between p-4 gap-4 md:hidden">

                {/* Left Side: Image + Text */}
                <div className="flex items-start gap-3">
                    {/* Image */}
                    <div className="w-1/4 flex-shrink-0">
                        <div className="relative w-full aspect-square">
                            <Image
                                src={`/images/education/${edu.logo}`}
                                alt={`${edu.school} logo`}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="rounded-md"
                                sizes="(max-width: 767px) 33vw, 96px"
                            />
                        </div>
                    </div>
                    {/* Text */}
                    <div className="w-3/4 flex flex-col justify-center">
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

                <div className="flex justify-between items-center">
                    <span className="text-xs text-[var(--foreground-muted)] whitespace-nowrap">
                        {edu.dateStart}
                    </span>
                    <span className="text-xs text-[var(--foreground-muted)] whitespace-nowrap">
                        {edu.dateEnd}
                    </span>
                </div>
            </div>

            {/* ====================================================== */}
            {/* 2. Desktop Layout (Hidden by default, visible on medium+) */}
            {/* ====================================================== */}
            <div className="hidden md:flex flex-row justify-between gap-6 p-6">

                {/* Left Side: Image + Text */}
                <div className="flex items-start gap-6">
                    {/* Image (Desktop) */}
                    <div className="relative h-24 w-24 flex-shrink-0">
                        <Image
                            src={`/images/education/${edu.logo}`}
                            alt={`${edu.school} logo`}
                            fill
                            style={{ objectFit: 'contain' }}
                            className="rounded-md"
                            sizes="96px"
                        />
                    </div>

                    {/* Text Block (Desktop) */}
                    <div className="flex-grow">
                        <h4 className="text-lg font-semibold font-serif text-[var(--foreground)]">
                            {edu.school}
                        </h4>
                        <p className="text-lg font-sans text-[var(--foreground-muted)] mt-1">
                            {edu.degree}
                        </p>
                        <p className="text-md text-[var(--foreground-muted)] mt-1">
                            {edu.description}
                        </p>
                    </div>
                </div>

                {/* Right Side: Dates */}
                <div className="flex flex-col justify-between items-end flex-shrink-0 text-sm text-[var(--foreground-muted)] whitespace-nowrap">
                    <span>
                        {edu.dateEnd}
                    </span>
                    <span>
                        {edu.dateStart}
                    </span>
                </div>
            </div>

        </motion.div>
    );
}