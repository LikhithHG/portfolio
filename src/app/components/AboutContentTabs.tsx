// src/app/components/AboutContentTabs.tsx
"use client"; // This component MUST remain a Client Component

import { useState } from 'react';
// Import the new components
import BasicInfo from './BasicInfo';
import Education from './Education';

type Tab = 'basic' | 'education';

export default function AboutContentTabs() {
    const [activeTab, setActiveTab] = useState<Tab>('basic');

    return (
        <div className="w-full">
            {/* Tab Buttons (These remain the same) */}
            <div className="flex justify-center space-x-4 mb-6">
                <button
                    onClick={() => setActiveTab('basic')}
                    className={`
                        px-6 py-2 rounded-md font-semibold transition-colors duration-200
                        ${activeTab === 'basic'
                            ? 'bg-[var(--primary)] text-white'
                            : 'bg-[var(--selected-background)] text-[var(--foreground)] hover:bg-[var(--border)]'
                        }
                    `}
                >
                    Basic Info
                </button>
                <button
                    onClick={() => setActiveTab('education')}
                    className={`
                        px-6 py-2 rounded-md font-semibold transition-colors duration-200
                        ${activeTab === 'education'
                            ? 'bg-[var(--primary)] text-white'
                            : 'bg-[var(--selected-background)] text-[var(--foreground)] hover:bg-[var(--border)]'
                        }
                    `}
                >
                    Education
                </button>
                {/* If you add another button, just add its logic here */}
            </div>

            {/* Tab Content (This is now much cleaner) */}
            <div className="mt-4">
                {activeTab === 'basic' && <BasicInfo />}
                {activeTab === 'education' && <Education />}
                {/* If you add another tab, just render its component here */}
            </div>
        </div>
    );
}