import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills }) => (
  <div className="p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mr-2">{title}</h3>
      <Icon className="w-6 h-6 text-indigo-500" />
    </div>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-sm text-gray-600 dark:text-gray-300">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default SkillCard;
