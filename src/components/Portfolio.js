import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'project1.jpg',
      deployedLink: 'https://project1.com',
      githubLink: 'https://github.com/yourusername/project1',
    },
    
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
