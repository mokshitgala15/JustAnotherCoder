import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tech,
  github,
  live,
}) => (
  <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col">
    {/* Project Image */}
    <img src={image} alt={title} className="w-full h-36 object-cover" />

    {/* Card Content */}
    <div className="p-2 flex flex-col flex-grow">
      {/* Title */}
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
        {description}
      </p>

      {/* Tech Tags - Stick to the bottom */}
      <div className="flex flex-wrap gap-1 mb-2 mt-auto">
        {tech.map((item) => (
          <span
            key={item}
            className="px-2 py-1 text-xs bg-indigo-100 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-300 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-2">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
        >
          <Github size={18} />
          <span className="text-sm">Code</span>
        </a>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
        >
          <ExternalLink size={18} />
          <span className="text-sm">Live Demo</span>
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
