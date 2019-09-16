import React from 'react';

import './Project.css';

const Project = ({ project: { name, image, content, github, deployed } }) => {
    return (
        <>
            <div className="header">
                <div className="links">
                    <h1>{name}</h1>
                    <a href={github}>
                        <i className="fab fa-github"></i>
                    </a>
                </div>

                <img src={image} alt={`${name} screenshot`} />
            </div>
            <div className="description">
                <p>{content}</p>
                <div>
                    Deploy this app <a href={deployed} >here</a>
                </div>
            </div>
        </>

    );
};

export default Project;