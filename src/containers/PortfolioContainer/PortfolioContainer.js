import React, { Component } from 'react';

import Aside from '../../components/Aside/Aside';
import Projects from '../../components/Projects/Projects';
import wayfarer from '../../images/wayfarer.png';

import './PortfolioContainer.css';

const PROJECTS = [
    {
        key: 1,
        name: 'Fieldr',
        content: 'A full stack app built using HTML, CSS, and JavaScript for the front-end and Node, Express, and Mongoose for the backend.',
        image: ''
    },
    {
        key: 2,
        name: 'Hikr',
        content: 'A full stack app built using HTML, CSS, and JavaScript for the front-end and Python for the backend using Django.',
        image: ''
    },
    {
        key: 3,
        name: 'Wayfarer',
        content: 'A full stack app built with React and Node, Express and Mongoose for the back-end.',
        image: wayfarer
    }
]

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
