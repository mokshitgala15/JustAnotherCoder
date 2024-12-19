import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialLink from '../components/SocialLink';

const Home = () => {
  return (
    <div className="text-center w-full">
      <img
  src="https://tools.corenexis.com/image/cnxm/M24/12/50d4fc2162.webp"
  alt="Profile"
  className="w-36 h-38 rounded-full mx-auto mb-8 border-4 border-white dark:border-gray-800 shadow-lg"/>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Mokshit Gala
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Full Stack Developer
      </p>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        I craft elegant solutions to complex problems, specializing in React, Node.js, and modern web technologies.
      </p>
      <div className="flex justify-center space-x-10">
        <SocialLink href="https://github.com/mokshitgala15" icon={Github} label="GitHub" />
        <SocialLink href="https://www.linkedin.com/in/mokshitgala/" icon={Linkedin} label="LinkedIn" />
        <SocialLink href="mailto:mokshitgala@gmail.com" icon={Mail} label="Email" />
      </div>
    </div>
  );
};

export default Home;