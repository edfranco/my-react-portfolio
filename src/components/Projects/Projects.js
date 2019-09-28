import React from 'react';
import Project from './Project/Project';
import './Projects.css';

const Projects = ({ project, defaultProject, handleClick, displayMenu }) => {
    return (
        <div className="content">
            <div className="title">
                {project
                    ? <Project project={project} foo={handleClick} displayMenu={displayMenu} />
                    : <Project project={defaultProject} foo={handleClick} displayMenu={displayMenu} />}
            </div>
        </div>
    );
};

export default Projects;
