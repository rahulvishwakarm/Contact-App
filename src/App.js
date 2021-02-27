import React from 'react';
import './App.css';
import Header from '../src/data/Header';
import DisplayContianer from '../src/data/DisplayContainer';
import Classification from '../src/data/Classification';

function App() {
  return (
    <div classNameName="App">
        <Header/>
        <DisplayContianer/>
        <Classification/>
    </div>
  );
}

export default App;