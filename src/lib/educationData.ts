// src/lib/educationData.ts
export type Education = {
    school: string;
    degree: string;
    description: string;
    dateRange: string;
    logo: string; // Path to the logo in /public/images/education/
};

export const educationData: Education[] = [
    {
        school: 'University of Colorado Denver',
        degree: 'MS Computer Science',
        description: 'Teaching Assistant under Prof. David Ogle',
        dateRange: 'Aug 2023 - May 2025',
        logo: 'cudenver.png',
    },
    {
        school: 'Siddaganga Institute of Technology',
        degree: 'B.E Information Science and Engineering',
        description: 'Gold Medalist for highest GPA',
        dateRange: 'Aug 2016 - May 2020',
        logo: 'sit.png',
    },
];