import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({project}) => {
    const { name, description, image, repository, deploy } = project;

    return (
        <div className='card'>
            <h3>{name}</h3>
            <img src={image} alt={name}/>
            <p>{description}</p>
            <button onClick= {()=>{window.open(deploy,
              "_blank")}}>Deploy</button>
            <button onClick= {()=>{window.open(repository,
              "_blank")}}>Repositorio</button>
        </div>
    );
};

export default ProjectCard;