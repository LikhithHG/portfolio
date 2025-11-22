"use client";

import { useState } from "react";
import { type Experience } from "@/lib/experienceData";
import ExperienceCard from "./ExperienceCard";
import { AnimatePresence, motion } from "framer-motion";

export default function ExperienceClient({ data }: { data: Experience[] }) {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    // Changed max-w-5xl to max-w-3xl for a better vertical look
    <div className="max-w-3xl mx-auto mt-10">
      
      {/* 1. VERTICAL LIST OF COMPACT CARDS */}
      {/* Changed grid to flex-col for vertical stacking */}
      <div className="flex flex-col gap-6">
        {data.map((exp) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            compact // Render summary card
            onClick={() => setActiveId(exp.id)}
          />
        ))}
      </div>

      {/* 2. THE MODAL OVERLAY (Remains the same) */}
      <AnimatePresence>
        {activeId !== null && (
          <>
            {/* Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* The Expanded Card (Modal) */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <div className="pointer-events-auto w-full max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-hide">
                <ExperienceCard
                  experience={data.find((e) => e.id === activeId)!}
                  expanded // Render full details
                  onClose = {() => setActiveId(null)}
                />
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}