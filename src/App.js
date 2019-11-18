import React, { Component } from 'react';
// internal components
import Nav from './components/Nav/Nav';
import MobileMenu from './components/MobileMenu/MobileMenu';
import headshot from './images/headshot.jpg';
import Projects from './containers/PortfolioContainer/PortfolioContainer';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import './App.css';



class App extends Component {
  state = {
    displayMenu: false
  }

  handleClick = () => {
    this.setState({ displayMenu: !this.state.displayMenu })
  }

  render() {
    return (
      <div className="App">
        <Nav handleClick={this.handleClick} />
        <MobileMenu handleClick={this.handleClick} displayMenu={this.state.displayMenu} />
        <main>
          <div className="landing">
            <img src={headshot} className="headshot" />
            <p>Fullstack engineer knowledgable
              in the MERN stack, and Python,
              seeking new opportunities
              in an engaging and open
              collaborative environment. </p>
          </div>
          <Projects />
          <About />
          <Resume />
          <Contact />
        </main>
      </div>
    );
  }
};

export default App;
