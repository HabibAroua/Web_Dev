import React , {Component} from 'react';

class App1 extends  Component
{
    handleChange=(e)=>
    {
        console.log(e.target.value);
    }
    render()
    {
        return(
            <div>
                Form part 1
                <form>
                    <input type="text" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default App1;