// src/app/sections/AnimatedGreeting.tsx
"use client"; // Mark as Client Component

import { useState, useEffect } from 'react';
import { greetings } from '@/lib/greetingsData'; // Use alias to import data
import { AnimatePresence, motion } from 'framer-motion'; // Import motion and AnimatePresence

export default function AnimatedGreeting() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup timer
    }, []); // Run only once

    const currentGreeting = greetings[index];

    return (
        <div className="mb-2 h-8 relative"> {/* Add relative positioning */}
            {/* AnimatePresence handles enter/exit animations */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index} // Important for AnimatePresence to detect changes
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    // Position absolute to allow fade in/out in the same spot
                    className="absolute left-0 w-full flex items-center justify-center md:justify-start gap-2 text-xl md:text-2xl font-script text-[var(--color-greeting)]"
                >
                    {currentGreeting.icon}
                    <span>
                        {currentGreeting.text}
                    </span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}