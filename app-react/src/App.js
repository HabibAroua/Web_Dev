import React, { Component } from 'react';
import logo from './logo.svg';
import {x} from './module'
import './App.css';

class App extends Component
{
  render()
  {
    return (
      <div className="App">
        Hello world ! {x*2}
      </div>
    );
  }
}

export default App;
