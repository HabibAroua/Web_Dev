import React , {Component} from 'react';
import './App.css';

class App extends  Component
{
  constructor()
  {
    super();
    this.state=
        {
          newItemValue: 'Buy some milk',
          items: JSON.parse(localStorage.getItem('state')) || [] //test is null
        }
  }

componentDidUpdate()
{
  localStorage.setItem('state',JSON.stringify(this.state.items))
}

  newItemValueChanged(event)
  {
    this.setState(
        {
          newItemValue: event.target.value
        }
    )
  }

  addItem()
  {
    this.setState({ newItemValue :'', items:[...this.state.items, this.state.newItemValue]})
    localStorage.setItem('state', JSON.stringify(this.state.items))
  }

  render()
  {
    return(
      <div>
        <input onChange={this.newItemValueChanged.bind(this)} placeholder="Item to add" value={this.state.newItemValue} />
        <button onClick={this.addItem.bind(this)}>Add</button>
        {this.state.items.map(item => <li>{item}</li>)}
      </div>
    )
  }
}

export default App;
