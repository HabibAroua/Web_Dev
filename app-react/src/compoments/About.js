import React , {Component} from 'react';
import axios from 'axios';

class About extends Component
{
    state={
        name:'',
    };


    handleChange=event =>
    {
        this.setState({name:event.target.value});
    }

    handleSubmit=event =>
    {
        event.preventDefault();
        alert(this.state.name);
        const user=
            {
                name : this.state.name,
            }
        axios.post(`http://192.168.1.8:5000/test`,{user})
            .then(res=>{
                console.log(res);
                alert(res);
                alert(res.data);
                console.log(res.data);
            });
    }

    sendLogin(e){
        e.preventDefault();
        fetch('http://192.168.1.8:5000/test', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: this.email.value,
                password: this.password.value
            }),
        }).then(function(response) {
            alert(response);
            return response
        }).then(function(body)
        {
            alert(body.email);
            console.log(body);
        });
    }
    render(){
        return (
            <form onSubmit={(event) => this.sendLogin(event)} class="asdf">
                <input type="text" placeholder="email" ref={(input) => { this.email = input}}/>
                <input type="password" placeholder="password" ref={(input) => { this.password = input }}/>
                <input type="submit" placeholder="submit"/>
            </form>
        )
    }
/*
    render()
    {
        return(
            <div>
                <h2>About</h2>
                <from onSubmit={this.handleSubmit}>
                    <label>
                        Person Name :
                        <input type="text" name="name" onChange={this.handleChange}/>
                        <button type="submit" onClick={this.handleSubmit} >Submit</button>
                    </label>
                </from>
            </div>
        );
    }
    */
}

export default About;