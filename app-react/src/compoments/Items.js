import React, { Component } from 'react';

class Items extends Component
{
    render()
    {
        return(
            <div>
                Items : values
                <ul>
                    <li>{this.props.id}</li>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                </ul>
            </div>
        );
    }
}

export default Items;