import React from 'react';
import { Code, Wrench, Cpu, Layers } from 'lucide-react'; // Replaced Tool with Wrench
import SkillCard from '../components/SkillCard';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto mt-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>

      <div className="grid gap-8">
        <p className="text-gray-600 dark:text-gray-300">
          I specialize in creating responsive, user-friendly applications that solve real-world problems. My passion lies in crafting 
          clean, efficient code and delivering exceptional user experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Programming Section */}
          <SkillCard
            icon={Code}
            title="Programming"
            skills={['JavaScript', 'Python', 'C / C++', 'Java', 'TypeScript', 'Swift']}
          />
          {/* Tools Section */}
          <SkillCard
            icon={Wrench} // Using Wrench for Tools
            title="Tools"
            skills={['Git / Github', 'Docker', 'MySQL / MongoDB', 'Insomnia','Kubernetes', 'Tableau']}
          />
          {/* Technologies Section */}
          <SkillCard
            icon={Cpu}
            title="Technologies"
            skills={['Node.js', 'REST APIs', 'Redux Toolkit', 'PostgresQL', 'GraphQL', 'Apache Spark']}
          />
          {/* Frameworks Section */}
          <SkillCard
            icon={Layers}
            title="Frameworks"
            skills={['Express.js', 'React.js', 'Flutter', 'Flask', 'Apache Kafka', 'LangChain']}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
