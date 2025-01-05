import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Housifyr',
      description: 'Real Estate Marketplace',
      image: 'https://alnehayan.ae/wp-content/uploads/2022/03/REAL-ESTATE.jpg',
      tech: ['MERN', 'Redux','CRUD'],
      github: 'https://github.com/mokshitgala15/realestate',
      live: 'https://project1.com',
    },
    {
      title: 'Ledger',
      description: 'Distributed File Storage System',
      image: 'https://th.bing.com/th/id/OIP.I771bDt6Z4Jo-l49YhyVbwHaEo?rs=1&pid=ImgDetMain',
      tech: ['Node.js', 'GoLang'],
      github: 'https://github.com/project2',
      live: 'https://project2.com',
    },
    {
      title: 'Skinvision',
      description: 'Skin cancer classification using Computer Aided Diagnosis',
      image: 'https://studyfinds.org/wp-content/uploads/2023/04/Skin-cancer-scaled.jpeg',
      tech: ['scikit-learn', 'TensorFlow'],
      github: 'https://github.com/mokshitgala15/Skin-Cancer-Classification',
      live: 'https://skinvision-ai.onrender.com/',
    },
    {
      title: 'ARchitexa',
      description: 'Home decoration using Augmented Reality',
      image: 'https://cgifurniture.com/wp-content/uploads/2022/04/augmented-reality-for-furniture-sales-online-e1649065582144.jpg',
      tech: ['C#', 'Unity'],
      github: 'https://github.com/project4',
      live: 'https://project4.com',
    },
  ];

  return (
    <div className="flex justify-start gap-2 w-full overflow-x-hidden px-0">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
