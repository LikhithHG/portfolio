export type SocialLink = {
    id: "linkedin" | "github" | "leetcode"; // Use string literals for type safety
    url: string;
    label: string;
    color: string; // The unique Tailwind class for hovering
};

export const socialLinks: SocialLink[] = [
    {
        id: "linkedin",
        url: "https://www.linkedin.com/in/likhithhg",
        label: "LinkedIn",
        color: "text-blue-500",
    },
    {
        id: "github",
        url: "https://github.com/LikhithHG",
        label: "GitHub",
        color: "text-black dark:text-white md:text-white",
    },
    {
        id: "leetcode",
        url: "https://leetcode.com/u/Likhith2006/",
        label: "LeetCode",
        color: "text-yellow-500",
    },
];