"use client";

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { type Experience } from '@/lib/experienceData';
// 1. Changed Import: Added FiMaximize2, Removed FiArrowRight usage
import { FiCalendar, FiMapPin, FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';

interface ExperienceCardProps {
  experience: Experience;
  compact?: boolean;
  expanded?: boolean;
  onClick?: () => void;
  onClose?: () => void;
}

export default function ExperienceCard({ experience, compact, expanded, onClick, onClose }: ExperienceCardProps) {
  const tagsRef = useRef<HTMLDivElement>(null);
  
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const checkScroll = () => {
    if (tagsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tagsRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const checkDevice = () => {
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouchDevice(isTouch);
    };
    
    checkDevice();
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [experience.tags]);

  const scrollTags = (direction: 'left' | 'right', e: React.MouseEvent) => {
    e.stopPropagation();
    if (tagsRef.current) {
      const scrollAmount = 200;
      tagsRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // --- MODE 1: COMPACT ---
  if (compact) {
    return (
      <motion.div
        layoutId={`card-${experience.id}`}
        onClick={onClick}
        whileHover={{ scale: 1.01, borderColor: "var(--primary)" }}
        whileTap={{ scale: 0.98 }}
        className="bg-[var(--selected-background)] border border-[var(--border)] rounded-xl p-4 md:p-6 cursor-pointer transition-colors duration-300 group relative overflow-hidden md:overflow-visible"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl overflow-hidden" />

        <div className="relative z-10 flex items-start gap-4">
          
          {/* Logo */}
          <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-white rounded-full p-2 shadow-sm mt-1">
             <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-full p-1"
                sizes="(max-width: 768px) 48px, 64px"
             />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
                <h3 className="text-base md:text-lg font-bold font-serif text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-tight">
                {experience.title}
                </h3>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 mb-3 gap-1 sm:gap-2">
                <p className="text-sm md:text-base font-bold text-[var(--foreground-muted)]">
                  {experience.company}
                </p>
                <span className="text-xs md:text-sm font-mono text-[var(--foreground-muted)] opacity-80">
                   {experience.startDate} — {experience.endDate}
                </span>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-2 mb-3 relative">
                {!isTouchDevice && canScrollLeft && (
                    <button 
                        onClick={(e) => scrollTags('left', e)}
                        className="p-1 rounded-full bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] text-[var(--foreground)] shadow-sm z-10 transition-colors"
                    >
                        <FiChevronLeft className="w-3 h-3" />
                    </button>
                )}

                <div 
                    ref={tagsRef}
                    onScroll={checkScroll}
                    className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth mask-linear-fade pr-4 md:pr-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {experience.tags.map((tag) => (
                        <span key={tag} className="whitespace-nowrap text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md bg-[var(--background)] border border-[var(--border)] text-[var(--foreground-muted)]">
                            {tag}
                        </span>
                    ))}
                </div>

                {!isTouchDevice && canScrollRight && (
                    <button 
                        onClick={(e) => scrollTags('right', e)}
                        className="p-1 rounded-full bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] text-[var(--foreground)] shadow-sm z-10 transition-colors"
                    >
                        <FiChevronRight className="w-3 h-3" />
                    </button>
                )}
                <div className="md:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[var(--selected-background)] to-transparent pointer-events-none" />
            </div>

            <p className="text-xs md:text-sm text-[var(--foreground-muted)] line-clamp-2 leading-relaxed">
                {experience.summary}
            </p>

            {/* === MOBILE EXPAND BUTTON === */}
            {/* Changed text to "Expand" and icon to Maximize */}
            <div className="md:hidden flex justify-end mt-2 -mb-1">
               <div className="flex items-center gap-1 text-xs font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1.5 rounded-full">
                 Read More <FiMaximize2 />
               </div>
            </div>

          </div>
        </div>

        {/* === DESKTOP EXPAND BUTTON === */}
        {/* Replaced Arrow with Maximize Icon */}
        <div className="hidden md:block absolute top-1/2 -right-16 -translate-y-1/2 z-20 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
            <div className="bg-[var(--background)] border border-[var(--primary)] p-3 rounded-full shadow-lg">
               <FiMaximize2 className="text-[var(--primary)] w-5 h-5" />
            </div>
        </div>

      </motion.div>
    );
  }

  // --- MODE 2: EXPANDED ---
  if (expanded) {
    return (
      <motion.div
        layoutId={`card-${experience.id}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[var(--selected-background)] border border-[var(--border)] rounded-xl p-6 md:p-10 shadow-2xl relative overflow-hidden w-full"
      >
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--border)] transition-colors z-20"
        >
            <FiX className="w-6 h-6 text-[var(--foreground)]" />
        </button>
        {/* ... Rest of Expanded content (Header, Metadata, Description, Tags) stays same ... */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8 relative z-10">
           <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-white rounded-full p-2 shadow-md">
             <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-full p-1"
                sizes="(max-width: 768px) 64px, 80px"
             />
          </div>
          <div>
            <h2 className="text-xl md:text-3xl font-bold font-serif text-[var(--foreground)] mb-1">
              {experience.title}
            </h2>
            <p className="text-lg md:text-xl text-[var(--primary)] font-medium">
              {experience.company}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-6 mb-8 text-xs md:text-sm text-[var(--foreground-muted)] font-mono border-y border-[var(--border)] py-4">
            <span className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4 text-[var(--primary)]" /> 
              {experience.startDate} — {experience.endDate}
            </span>
            <span className="flex items-center gap-2">
              <FiMapPin className="w-4 h-4 text-[var(--primary)]" /> 
              {experience.location}
            </span>
        </div>

        <ul className="list-disc pl-5 space-y-2 text-sm md:text-md text-[var(--foreground-muted)] mb-8 font-serif leading-relaxed">
            {experience.description.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>

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