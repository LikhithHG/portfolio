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
import TailwindIcon from '@/app/components/icons/TailwindIcon';
import ReduxIcon from '@/app/components/icons/ReduxIcon';
import NextJsIcon from '@/app/components/icons/NextJsIcon';
import MongoDbIcon from '@/app/components/icons/MongoDbIcon';
import GitIcon from '@/app/components/icons/GitIcon';
import MySqlIcon from '@/app/components/icons/MySqlIcon';
import AwsIcon from '@/app/components/icons/AwsIcon';
import DockerIcon from '@/app/components/icons/DockerIcon';
import OciIcon from '@/app/components/icons/OciIcon';
import KubernetesIcon from '@/app/components/icons/KubernetesIcon';
import CyberSecurityIcon from '@/app/components/icons/CyberSecurityIcon';
import ComputerNetworkIcon from '@/app/components/icons/ComputerNetworkIcon';

// --- 2. Update the Skill type ---
export type Skill = {
  name: string;
  // The icon is now a React Component that accepts a className
  icon: ComponentType<{ className?: string }>;
  proficiency: string;
};

// --- 3. Update the skills data array to use the components ---
export const skillsData: Skill[] = [
  { name: 'HTML', icon: HtmlIcon, proficiency: 'Expert' },
  { name: 'CSS', icon: CssIcon, proficiency: 'Expert' },
  { name: 'JavaScript', icon: JavaScriptIcon, proficiency: 'Advanced' },
  { name: 'TypeScript', icon: TypeScriptIcon, proficiency: 'Advanced' },
  { name: 'React.js', icon: ReactIcon, proficiency: 'Advanced' },
  { name: 'NextJS', icon: NextJsIcon, proficiency: 'Advanced' },
  { name: 'Node.js', icon: NodeJsIcon, proficiency: 'Intermediate' },
  { name: 'TailwindCSS', icon: TailwindIcon, proficiency: 'Advanced' },
  { name: 'Python', icon: PythonIcon, proficiency: 'Intermediate' },
  { name: 'Java', icon: JavaIcon, proficiency: 'Intermediate' },
  { name: 'MongoDB', icon: MongoDbIcon, proficiency: 'Intermediate' },
  { name: 'ReactRedux', icon: ReduxIcon, proficiency: 'Intermediate' },
  { name: 'Git', icon: GitIcon, proficiency: 'Advanced' },
  { name: 'MySQL', icon: MySqlIcon, proficiency: 'Advanced' },
  { name: 'OCI', icon: OciIcon, proficiency: 'Intermediate' },
  { name: 'AWS', icon: AwsIcon, proficiency: 'Intermediate' },
  { name: 'Docker', icon: DockerIcon, proficiency: 'Beginmer' },
  { name: 'Kubernetes', icon: KubernetesIcon, proficiency: 'Beginmer' },
  { name: 'Computer Networks', icon: ComputerNetworkIcon, proficiency: 'Advanced' },
  { name: 'Cyber Security', icon: CyberSecurityIcon, proficiency: 'Intermediate' },
];