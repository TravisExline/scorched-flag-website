import React from 'react';
import NavBar from '.componants/NavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Scorched Wood Flag, Co.</p>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
