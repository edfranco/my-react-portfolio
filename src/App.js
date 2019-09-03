import React from 'react';
// internal components
import Nav from './components/Nav/Nav';
import Routes from './config/Router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes />
      </main>
    </div>
  );
};

export default App;
