import React, { Component } from 'react';

import { PROJECTS } from '../../constants/constants';
import './PortfolioContainer.css';



class PortfolioContainer extends Component {
    state = {
        projects: PROJECTS,
        project: PROJECTS[0],
        shouldDisplayProjectOverlay: false
    };

    handleClick = event => {
        const id = event.target.id;
        if (id) {
            this.setState({ project: this.state.projects[id] });
        };
        this.setState({ shouldDisplayProjectOverlay: !this.state.shouldDisplayProjectOverlay });
    };

    projectImgs = () => {
        const images = [];
        this.state.projects.forEach(project => {
            images.push(
                <div key={project.key} className={`project-container`} id={project.key} onClick={this.handleClick}>
                    <h2 className={`div-headers`} id={project.key}>{project.name}</h2>
                    <img id={project.key} src={project.image} alt={project.name} />
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
                <div className="overlay" style={{ display: this.state.shouldDisplayProjectOverlay ? 'flex' : 'none' }}>
                    <div className="close" onClick={this.handleClick}>X</div>
                    <img src={this.state.project.image} alt={this.state.project.name} />
                    <p>{this.state.project.content}</p>
                    <div className="project-buttons">
                        <a href={this.state.project.deployed}>
                            <button>Live</button>
                        </a>
                        <a href={this.state.project.github}>
                            <button>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default PortfolioContainer;
