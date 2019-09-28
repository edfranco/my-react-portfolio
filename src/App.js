import React, { Component } from 'react';
// internal components
import Nav from './components/Nav/Nav';
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
        <div className="mobile-menu" style={this.state.displayMenu ? { display: 'block' } : { display: 'none' }}>
          <h1>Menu</h1>
          <h1 onClick={this.handleClick}>X</h1>
        </div>
        <main>
          <Routes />
        </main>
      </div>
    );
  }
};

export default App;
