'use client';

import { useState } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

interface Experience {
    id: number;
    title: string;
    company: string;
    companyLogo: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    tags: string[];
}

interface ExperienceCardProps {
    experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative group h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Card Container */}
            <div className="relative h-full bg-[var(--selected-background)] border border-[var(--border)] rounded-lg p-6 transition-all duration-300 transform hover:shadow-xl hover:scale-105 cursor-pointer overflow-hidden">
                
                {/* Animated Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-[#20B2AA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Header: Company Logo Badge + Job Title */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-semibold font-serif text-[var(--foreground)] mb-1">
                                {experience.title}
                            </h3>
                            <p className="text-sm text-[var(--primary)] font-medium">
                                {experience.company}
                            </p>
                        </div>
                        {/* Company Logo Badge */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#20B2AA] flex items-center justify-center ml-3 shadow-md">
                            <span className="text-xs font-bold text-white text-center px-1">
                                {experience.companyLogo}
                            </span>
                        </div>
                    </div>

                    {/* Date and Location */}
                    <div className="flex flex-col gap-2 mb-4 text-sm text-[var(--foreground-muted)]">
                        <div className="flex items-center gap-2">
                            <FiCalendar className="h-4 w-4 text-[var(--primary)]" />
                            <span>{experience.startDate} - {experience.endDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FiMapPin className="h-4 w-4 text-[var(--primary)]" />
                            <span>{experience.location}</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-8 h-1 bg-gradient-to-r from-[#FFD700] to-[#20B2AA] rounded mb-4"></div>

                    {/* Description */}
                    <p className="text-sm text-[var(--foreground-muted)] mb-4 leading-relaxed">
                        {experience.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {experience.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-block text-xs px-3 py-1 rounded-full bg-[var(--background)] text-[var(--primary)] border border-[var(--primary)] transition-all duration-200 group-hover:bg-[var(--primary)] group-hover:text-white"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Icon in Corner */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        <FiBriefcase className="h-8 w-8 text-[var(--primary)]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
