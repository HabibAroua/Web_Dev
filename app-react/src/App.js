import React, { Component } from 'react';
import logo from './logo.svg';
import {x as num1 , y as num2 , Test} from './module'
import Habib from './module';
import {default as Testing} from  './module';
import Child from './Child';
//import {y} from './module'
import './App.css';

class App extends Component
{
    state =
    {
        name : 'Habib'
    }
    Test()
    {
        return " Hello test intern";
    }

    Test2 =()=>
    {
        return " Hello test intern 2";
    }

    handleClick()
    {
        alert("Hello world "+this.state.name);
    }

    hndleMouse()
    {
        alert("on mouse "+this.state.name);
    }
    render()
    {
        return (
            <div className="App">
                Hello world ! {num1+num2}
                the function is {Habib()}
                default is {Testing()}
                <Child />
                the result the function intern N° 1 : {this.Test()}
                the result the function intern N° 1 : {this.Test2()}
                <button onClick={this.handleClick.bind(this)}>Click here</button>
                <button onMouseMove={this.hndleMouse}>Mouse Mouve</button>
            </div>
    );
  }
}

export default App;
