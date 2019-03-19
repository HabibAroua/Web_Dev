import React , {Component} from 'react';

class App1 extends  Component
{
    state=
        {
            name: '',
            val:''
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
        console.log(this.state.name+' '+this.state.val);
    }

    handleChange2=(e)=>
    {
        this.setState(
            {
                val: e.target.value
            }
        )
    }

    render()
    {
        return(
            <div>
                Form part 1
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" onChange={this.handleChange.bind(this)}/>
                    <select onChange={this.handleChange2}>
                        <option value="val1">Valeur1</option>
                        <option value="val2">Valeur2</option>
                        <option value="val3">Valeur3</option>
                    </select>
                    <button>Submit</button>
                </form>
                {this.state.name}
                {this.state.val}
            </div>
        )
    }
}

export default App1;