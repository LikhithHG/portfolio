// src/lib/greetingsData.tsx
import React from 'react';
// Import the icons you need from react-icons
import { FaRegHandshake, FaHandsPraying, FaOm } from 'react-icons/fa6';
import { GiMonkFace } from 'react-icons/gi'; // Example for 'Hola', replace if needed

// Define the type for a greeting object
export type Greeting = {
    text: string;
    icon: React.ReactNode; // Type for React components/JSX
};

// Export the array
export const greetings: Greeting[] = [
    { text: 'Hello', icon: <FaRegHandshake className="inline-block text-[var(--color-greeting)]" /> },
    { text: 'Namaste,', icon: <FaHandsPraying className="inline-block text-yellow-500" /> }, // Example color
    { text: 'Om Shiva,', icon: <FaOm className="inline-block text-red-500" /> }, // Example color
    { text: 'Hola,', icon: <GiMonkFace className="inline-block text-green-500" /> }, // Example icon & color
];