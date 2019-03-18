import React, { Component } from 'react';
import logo from './logo.svg';
import {x , y , Test} from './module'
//import {y} from './module'
import './App.css';

class App extends Component
{
  render()
  {
    return (
      <div className="App">
        Hello world ! {x+y}
        the function is { Test() }
      </div>
    );
  }
}

export default App;
