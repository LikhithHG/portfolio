// src/lib/skillsData.ts
import { ComponentType } from 'react'; // Import React's ComponentType

import JavaScriptIcon from '@/app/components/icons/JavaScriptIcon';
import ReactIcon from '@/app/components/icons/ReactIcon';
import NodeJsIcon from '@/app/components/icons/NodeJsIcon';
import PythonIcon from '@/app/components/icons/PythonIcon';
import JavaIcon from '@/app/components/icons/JavaIcon';
import TypeScriptIcon from '@/app/components/icons/TypeScriptIcon';
import HtmlIcon from '@/app/components/icons/HtmlIcon';
import CssIcon from '@/app/components/icons/CssIcon';
// import TailwindIcon from '@/app/components/icons/TailwindIcon';
import ReduxIcon from '@/app/components/icons/ReduxIcon';
// import ReactNativeIcon from '@/app/components/icons/ReactNativeIcon';
import NextJsIcon from '@/app/components/icons/NextJsIcon';
// import MySqlIcon from '@/app/components/icons/MySqlIcon';
import MongoDbIcon from '@/app/components/icons/MongoDbIcon';
import GitIcon from '@/app/components/icons/GitIcon';
// import OopsIcon from '@/app/components/icons/OopsIcon';
// import NetworkIcon from '@/app/components/icons/NetworkIcon';
// import SecurityIcon from '@/app/components/icons/SecurityIcon';
import AwsIcon from '@/app/components/icons/AwsIcon';
// import SdlcIcon from '@/app/components/icons/SdlcIcon';
// (Create these files in 'src/app/components/icons/')

// --- 2. Update the Skill type ---
export type Skill = {
  name: string;
  // The icon is now a React Component that accepts a className
  icon: ComponentType<{ className?: string }>;
  proficiency: string;
};

// --- 3. Update the skills data array to use the components ---
export const skillsData: Skill[] = [
  // Row 1
  { name: 'JavaScript', icon: JavaScriptIcon, proficiency: 'Advanced' },
  { name: 'React.js', icon: ReactIcon, proficiency: 'Advanced' },
  { name: 'Node.js', icon: NodeJsIcon, proficiency: 'Intermediate' },
  { name: 'Python', icon: PythonIcon, proficiency: 'Intermediate' },
  { name: 'Java', icon: JavaIcon, proficiency: 'Intermediate' },
//   // Row 2
  { name: 'TypeScript', icon: TypeScriptIcon, proficiency: 'Advanced' },
  { name: 'HTML', icon: HtmlIcon, proficiency: 'Expert' },
  { name: 'CSS', icon: CssIcon, proficiency: 'Expert' },
//   { name: 'TailwindCSS', icon: TailwindIcon, proficiency: 'Advanced' },
  { name: 'ReactRedux', icon: ReduxIcon, proficiency: 'Intermediate' },
//   // Row 3
//   { name: 'ReactNative', icon: ReactNativeIcon, proficiency: 'Beginner' },
  { name: 'NextJS', icon: NextJsIcon, proficiency: 'Advanced' },
//   { name: 'MySQL', icon: MySqlIcon, proficiency: 'Intermediate' },
  { name: 'MongoDB', icon: MongoDbIcon, proficiency: 'Intermediate' },
  { name: 'Git', icon: GitIcon, proficiency: 'Advanced' },
//   // Row 4
//   { name: 'OOPs', icon: OopsIcon, proficiency: 'Advanced' },
//   { name: 'Network', icon: NetworkIcon, proficiency: 'Intermediate' },
//   { name: 'CyberSecurity', icon: SecurityIcon, proficiency: 'Beginner' },
  { name: 'AWS', icon: AwsIcon, proficiency: 'Intermediate' },
//   { name: 'SDLC', icon: SdlcIcon, proficiency: 'Advanced' },
];