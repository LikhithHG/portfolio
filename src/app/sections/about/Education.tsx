// src/app/components/Education.tsx
import { educationData } from '@/lib/educationData';
import EducationCard from './EducationCard'; // <-- 1. Import the new component

// This remains a Server Component
export default function Education() {
    return (
        // This div now applies spacing for both mobile and desktop
        <div className="space-y-6">

            {/* Title is now back on top */}
            <h3 className="text-2xl font-bold font-serif text-[var(--foreground)]">
                My Academic Journey
            </h3>

            {/* This map renders your animated cards */}
            {educationData.map((edu) => (
                <EducationCard key={edu.school} edu={edu} />
            ))}
        </div>
    );
}