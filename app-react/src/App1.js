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
    render()
    {
        return(
            <div>
                Form part 1
                <form>
                    <input type="text" onChange={this.handleChange}/>
                    <button>Submit</button>
                    {this.state.name}
                </form>
            </div>
        )
    }
}
export default App1;