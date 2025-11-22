"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { type Experience } from '@/lib/experienceData';
import { FiCalendar, FiMapPin, FiX, FiArrowRight } from 'react-icons/fi';

interface ExperienceCardProps {
  experience: Experience;
  compact?: boolean;
  expanded?: boolean;
  onClick?: () => void;
  onClose?: () => void;
}

export default function ExperienceCard({ experience, compact, expanded, onClick, onClose }: ExperienceCardProps) {

  // --- MODE 1: COMPACT (The Summary Card in the Grid) ---
  if (compact) {
    return (
      <motion.div
        layoutId={`card-${experience.id}`}
        onClick={onClick}
        whileHover={{ scale: 1.02, borderColor: "var(--primary)" }}
        className="bg-[var(--selected-background)] border border-[var(--border)] rounded-xl p-6 cursor-pointer transition-colors duration-300 group relative overflow-hidden"
      >
        {/* Subtle Gradient Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex items-center gap-4">
          {/* Logo */}
          <div className="relative w-16 h-16 flex-shrink-0 bg-white rounded-full p-2 shadow-sm">
             <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-full p-1"
             />
          </div>
          
          {/* Text */}
          <div>
            <h3 className="text-lg font-bold font-serif text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
              {experience.title}
            </h3>
            <p className="text-sm font-medium text-[var(--foreground-muted)]">
              {experience.company}
            </p>
            <span className="text-xs font-mono text-[var(--foreground-muted)] mt-1 block">
               {experience.startDate} — {experience.endDate}
            </span>
          </div>

          {/* Arrow Icon (Visual cue to click) */}
          <div className="ml-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
             <FiArrowRight className="text-[var(--primary)] w-5 h-5" />
          </div>
        </div>
      </motion.div>
    );
  }

  // --- MODE 2: EXPANDED (The Full Modal) ---
  if (expanded) {
    return (
      <motion.div
        layoutId={`card-${experience.id}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[var(--selected-background)] border border-[var(--border)] rounded-xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
      >
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--border)] transition-colors z-20"
        >
            <FiX className="w-6 h-6 text-[var(--foreground)]" />
        </button>

        {/* --- Header --- */}
        <div className="flex items-start gap-6 mb-8 relative z-10">
           <div className="relative w-20 h-20 flex-shrink-0 bg-white rounded-full p-2 shadow-md">
             <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-full p-1"
             />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-[var(--foreground)] mb-1">
              {experience.title}
            </h2>
            <p className="text-xl text-[var(--primary)] font-medium">
              {experience.company}
            </p>
          </div>
        </div>

        {/* --- Metadata Bar --- */}
        <div className="flex flex-wrap gap-6 mb-8 text-sm text-[var(--foreground-muted)] font-mono border-y border-[var(--border)] py-4">
            <span className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4 text-[var(--primary)]" /> 
              {experience.startDate} — {experience.endDate}
            </span>
            <span className="flex items-center gap-2">
              <FiMapPin className="w-4 h-4 text-[var(--primary)]" /> 
              {experience.location}
            </span>
        </div>

        {/* --- Description ---
        <div className="text-[var(--foreground-muted)] leading-relaxed font-serif mb-8 text-base md:text-lg">
           <p>{experience.description}</p>
        </div> */}
        {/* Description - Full Bullet List */}
        <ul className="list-disc pl-5 space-y-2 text-md text-[var(--foreground-muted)] mb-6 font-serif leading-relaxed">
            {experience.description.map((point, index) => (
                <li key={index}>
                    {point}
                </li>
            ))}
        </ul>

        {/* --- Tags --- */}
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--primary)] text-xs font-medium tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

      </motion.div>
    );
  }

  return null;
}