import React from 'react';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Demo</a> |
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </div>
  );
}

export default Project;
