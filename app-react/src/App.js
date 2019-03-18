import React, { Component } from 'react';
import logo from './logo.svg';
import {x as num1 , y as num2 , Test} from './module'
import Habib from './module'
import {default as Testing} from  './module'

//import {y} from './module'
import './App.css';

class App extends Component
{
  render()
  {
    return (
      <div className="App">
        Hello world ! {num1+num2}
        the function is {Habib()}
        default is {Testing()}
      </div>
    );
  }
}

export default App;
