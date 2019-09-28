import React from 'react';
import { Link } from 'react-router-dom'

import './Aside.css';

const Aside = ({ projects, displayMenu }) => {
    const projectsLinks = projects.map(project => {
        return (
            <div className="link-card" >
                <div className="link-header">
                    <Link key={project.key} to={`/project/${project.name}`} >{project.name}</Link>
                    <img src={project.image} alt="link thumbnail" />
                </div>
                <p>Technologies used: {project.techUsed} </p>
            </div>
        )
    })

    return (
        <>
            <div className="aside">
                {projectsLinks}
            </div>
            <div className="mobile-links" style={displayMenu ? { display: 'block' } : { display: 'none' }}>
                {projectsLinks}
            </div>
        </>
    );
};

export default Aside;
