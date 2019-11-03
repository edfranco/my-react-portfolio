import React, { Component } from 'react';

import Aside from '../../components/Aside/Aside';
import Projects from '../../components/Projects/Projects';
import MobilePortfolioMenu from '../../components/MobilePortfolioMenu/MobilePortfolioMenu';

import { PROJECTS } from '../../constants/constants';
import './PortfolioContainer.css';



class PortfolioContainer extends Component {
    state = {
        isProjectDisplayed: false,
        projects: PROJECTS,
        projectAsProp: null,
        project: PROJECTS[0],
        displayMenu: false,
        displayButton: true
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

    handleClick = () => {
        this.setState({
            displayMenu: !this.state.displayMenu,
            displayButton: !this.state.displayButton
        })
    }

    render() {
        return (
            <>
                <div className="portfolio-container">
                    <Aside
                        projects={this.state.projects}
                        setIsProjectDisplayed={this.setIsProjectDisplayed} />
                    <MobilePortfolioMenu displayMenu={this.state.displayMenu} handleClick={this.handleClick} />
                    <Projects
                        project={this.state.projectAsProp}
                        defaultProject={this.state.project}
                        handleClick={this.handleClick}
                        displayMenu={this.state.displayMenu} />
                </div>
                <button onClick={this.handleClick} className="see-more">See more projects</button>
            </>
        );
    };
};

export default PortfolioContainer;
