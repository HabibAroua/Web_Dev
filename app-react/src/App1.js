import React , {Component} from 'react';

class App1 extends  Component
{
    state=
        {
            name: ''
        }

    handleChange=(e)=>
    {
        this.setState(
            {
                name : e.target.value
            }
        )
    }

    handleSubmit=(e)=>
    {
        e.preventDefault(e);
        console.log(this.state.name);
    }
    render()
    {
        return(
            <div>
                Form part 1
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" onChange={this.handleChange.bind(this)}/>
                    <button>Submit</button>
                    {this.state.name}
                </form>
            </div>
        )
    }
}
export default App1;