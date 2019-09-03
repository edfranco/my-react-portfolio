import React, { Component } from 'react';

import Aside from '../../components/Aside/Aside';
import Projects from '../../components/Projects/Projects';


import { PROJECTS } from '../../constants/constants';
import './PortfolioContainer.css';



class PortfolioContainer extends Component {
    state = {
        isProjectDisplayed: false,
        projects: PROJECTS,
        projectAsProp: null
    };

    componentDidMount() {
        this.checkForMatch();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.projectName !== this.props.projectName) {
            this.checkForMatch();
        };
    };

    checkForMatch = () => {
        this.state.projects.forEach(project => {
            if (project.name === this.props.projectName) {
                return this.setState({ projectAsProp: project });
            };
        });
    };

    setIsProjectDisplayed = () => {
        this.setState({ isProjectDisplayed: true });
    };

    render() {
        return (
            <div className="portfolio-container">
                <Aside
                    projects={this.state.projects}
                    setIsProjectDisplayed={this.setIsProjectDisplayed} />
                <Projects project={this.state.projectAsProp} />
            </div>
        );
    };
};

export default PortfolioContainer;
