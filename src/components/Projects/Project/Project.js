import React from 'react';

import './Project.css';

const Project = ({ project: { name, image, content } }) => {
    return (
        <>
            <div className="header">
                <h1>{name}</h1>
                <img src={image} alt={`${name} screenshot`} />
            </div>
            <div className="description">
                <p>{content}</p>
            </div>
        </>

    );
};

export default Project;