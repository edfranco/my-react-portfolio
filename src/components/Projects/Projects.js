import React from 'react';
import Project from './Project/Project';
import './Projects.css';

const Projects = ({ project, defaultProject }) => {
    return (
        <div className="content">
            <div className="title">
                {project ? <Project project={project} /> : <Project project={defaultProject} />}
            </div>
        </div>
    );
};

export default Projects;
