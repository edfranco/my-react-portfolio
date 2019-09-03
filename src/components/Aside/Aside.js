import React from 'react';
import { Link } from 'react-router-dom'

import './Aside.css';

const Aside = ({ projects }) => {
    const projectsLinks = projects.map(project => {
        return (
            <div className="link-card" >
                <Link key={project.key} to={`/project/${project.name}`} >{project.name}</Link>
                <p>Languages used: {project.techUsed} </p>
            </div>
        )
    })

    return (
        <div className="aside">
            {projectsLinks}
        </div>
    );
};

export default Aside;
