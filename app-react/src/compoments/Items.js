import React, { Component } from 'react';
import './Items.css';

class Items extends Component
{

    render()
    {
        const {items}=this.props;
        const theItems = items.map( item=>
        {
            if(item.id>0)
            {
                return(

                    <div key={item.id}>
                        <p className="p1">{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.age}</p>

                    </div>

                )
            }
        });
        return(
            <div className="item">
                Items : values
                {theItems}
            </div>
        );
    }
}

export default Items;