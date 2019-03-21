import React , {Component} from 'react';

const Rout =(props) =>
{
    let x = props.match.params.params_test;
    return(
        <div>
            <h2>Rout</h2>
            <p>This is Rout section</p>
            <p>The value is {x}</p>
        </div>
    )
}

export default Rout;