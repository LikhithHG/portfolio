// src/lib/skillsData.ts
export type Skill = {
    name: string;
    icon: string; // Path to the icon in /public/images/skills/
    proficiency: string; // Text for the hover tooltip
};

export const skillsData: Skill[] = [
    // Row 1
    { name: 'JavaScript', icon: 'js.svg', proficiency: 'Advanced' },
    { name: 'React.js', icon: 'react.svg', proficiency: 'Advanced' },
    { name: 'Node.js', icon: 'node.svg', proficiency: 'Intermediate' },
    { name: 'Python', icon: 'python.svg', proficiency: 'Intermediate' },
    { name: 'Java', icon: 'java.svg', proficiency: 'Intermediate' },
    // Row 2
    { name: 'TypeScript', icon: 'ts.svg', proficiency: 'Advanced' },
    { name: 'HTML', icon: 'html.svg', proficiency: 'Expert' },
    { name: 'CSS', icon: 'css.svg', proficiency: 'Expert' },
    { name: 'TailwindCSS', icon: 'tailwind.svg', proficiency: 'Advanced' },
    { name: 'ReactRedux', icon: 'redux.svg', proficiency: 'Intermediate' },
    // Row 3
    { name: 'ReactNative', icon: 'react-native.svg', proficiency: 'Beginner' },
    { name: 'NextJS', icon: 'nextjs.svg', proficiency: 'Advanced' },
    { name: 'MySQL', icon: 'mysql.svg', proficiency: 'Intermediate' },
    { name: 'MongoDB', icon: 'mongodb.svg', proficiency: 'Intermediate' },
    { name: 'Git', icon: 'git.svg', proficiency: 'Advanced' },
    // Row 4
    { name: 'OOPs', icon: 'oops.png', proficiency: 'Advanced' }, // Example .png
    { name: 'Network', icon: 'network.png', proficiency: 'Intermediate' },
    { name: 'CyberSecurity', icon: 'security.png', proficiency: 'Beginner' },
    { name: 'AWS', icon: 'aws.svg', proficiency: 'Intermediate' },
    { name: 'SDLC', icon: 'sdlc.png', proficiency: 'Advanced' },
];