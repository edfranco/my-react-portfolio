import React from 'react';
import Project from './Project/Project';

const Projects = ({ project }) => {
    return (
        <div className="content">
            <div className="title">
                {project ? <Project project={project} /> : 'Click on a link on the menu to see a project'}
            </div>
        </div>
    );
};

export default Projects;
