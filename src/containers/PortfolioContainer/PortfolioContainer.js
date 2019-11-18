import React, { Component } from 'react';

import { PROJECTS } from '../../constants/constants';
import './PortfolioContainer.css';



class PortfolioContainer extends Component {
    state = {
        projects: PROJECTS,
        project: PROJECTS[0],
    };

    projectImgs = () => {
        const images = [];
        this.state.projects.forEach(project => {
            images.push(
                <div className="project-container div-headers">
                    <h2>{project.name}</h2>
                    <img src={project.image} />
                </div>
            );
        });
        return images;
    };

    render() {
        return (
            <div className="portfolio" id="portfolio">
                <h2 className="div-headers">{this.state.project.name}</h2>
                <div className="project-images">
                    {this.projectImgs()}
                </div>
                {/* <img src={this.state.project.image} alt={this.state.project.name} /> */}
                {/* <div className="project-buttons">
                    <button>Previous</button>
                    <button>Next</button>
                </div> */}
                {/* <p>{this.state.project.content}</p> */}
                {/* <div className="project-buttons">
                    <a href={this.state.project.deployed}>
                        <button>Live</button>
                    </a>
                    <a href={this.state.project.github}>
                        <button>Code</button>
                    </a>
                </div> */}

            </div>
        );
    };
};

export default PortfolioContainer;
