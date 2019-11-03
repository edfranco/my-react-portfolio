import React from 'react';
import { Link } from 'react-router-dom'

import './Aside.css';

const Aside = ({ projects, displayMenu }) => {
    const projectsLinks = projects.map(project => {
        return (
            <Link className="link-card-anchor" key={project.key} to={`/project/${project.name}`} >
                <div className="link-card" >
                    <div className="link-header">
                        {project.name}
                        <img src={project.image} alt="link thumbnail" />
                    </div>
                    <p>Technologies used: {project.techUsed} </p>
                </div>
            </Link>
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
