import React, { Component } from 'react';
import logo from './logo.svg';
import {x as num1 , y as num2 , Test} from './module'
import Habib from './module';
import {default as Testing} from  './module';
import Child from './Child';
//import {y} from './module'
import './App.css';
import Items from './compoments/Items';

class App extends Component
{
    constructor()
    {
        super();
        console.log("Constrctor");
    }

    componentDidMount()
    {
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState)
    {
        console.log("componentDidUpdate "+prevProps+" "+prevState);
    }

    state =
    {
        name : 'Habib',
        items: [
            {id: '1' , name:'Habib' , age:24 },
            {id: '2' , name:'Nada' ,age:23 },
            {id: '3' , name:'Mounir', age:44},
        ]
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
        alert("on mouse ");
    }

    setName =()=>
    {
        this.setState(
            {
                name : 'Nada'
            }
        )
    }

    handleAdd=(e)=>
    {
        let items = this.state.items;
        items.push({id: '4' , name:'Mai', age:35});
        this.setState( //Edit the item in this instruction
            {
                items : items
            }
        )
    }

    handleDelete=(e)=>
    {
        this.setState(
            {
                items : [{id: '3' , name:'Mounir', age:44}]
            }
        )
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
                <button onClick={this.setName} >Set the name</button>
                <p>{this.state.name}</p>
                <Items items={this.state.items} />
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleDelete}>Delete</button>
                <p>______________________________________________________________</p>
            </div>
    );
  }
}

export default App;
