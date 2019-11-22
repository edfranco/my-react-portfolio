import React, { Component } from 'react';

import { PROJECTS } from '../../constants/constants';
import './PortfolioContainer.css';



class PortfolioContainer extends Component {
    state = {
        projects: PROJECTS,
        project: PROJECTS[0],
        shouldDisplayProjectOverlay: false,
        imageIndex: 0
    };

    handleClick = event => {
        const id = event.target.id;
        if (id) {
            this.setState({ project: this.state.projects[id] });
        };
        this.setState({
            shouldDisplayProjectOverlay: !this.state.shouldDisplayProjectOverlay,
            imageIndex: 0
        });
    };

    projectImgs = () => {
        const images = [];
        this.state.projects.forEach(project => {
            images.push(
                <div key={project.key} className={`project-container`} id={project.key} onClick={this.handleClick}>
                    <h2 className={`div-headers`} id={project.key}>{project.name}</h2>
                    <img id={project.key} src={project.images[0]} alt={project.name} />
                </div>
            );
        });
        return images;
    };

    incrementImageIndex = () => {
        const nextIndex = this.state.imageIndex + 1;
        const hasPassedLength = nextIndex > this.state.project.images.length - 1;
        this.setState({ imageIndex: hasPassedLength ? 0 : nextIndex });
    };

    decrementIndex = () => {
        const prevIndex = this.state.imageIndex - 1;
        const indexBelowZero = this.state.imageIndex <= 0;
        this.setState({ imageIndex: indexBelowZero ? this.state.project.images.length - 1 : prevIndex });
    };

    render() {
        return (
            <div className="portfolio container" id="portfolio">
                <h2 className="div-headers">My Portfolio</h2>
                <div className="project-images">
                    {this.projectImgs()}
                </div>
                <div className="overlay" style={{ display: this.state.shouldDisplayProjectOverlay ? 'flex' : 'none' }}>
                    <div className="close" onClick={this.handleClick}>X</div>
                    <div className="technologies">
                        <h4 className="div-headers">Technologies Used:</h4>
                        <div>{this.state.project.techUsed}</div>
                    </div>
                    <img src={this.state.project.images[this.state.imageIndex]} alt={this.state.project.name} />
                    {this.state.project.images.length > 1
                        && <div className="arrow-container">
                            <i onClick={this.decrementIndex} className="arrows fas fa-arrow-left"></i>
                            <i onClick={this.incrementImageIndex} className="arrows fas fa-arrow-right"></i>
                        </div>}
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
