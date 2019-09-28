import React, { Component } from 'react';
// internal components
import Nav from './components/Nav/Nav';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Routes from './config/Router';
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
          <Routes />
        </main>
      </div>
    );
  }
};

export default App;
