import React, { Component } from 'react';

class Items extends Component
{
    render()
    {
        const {items}=this.props;
        const theItems = items.map( item=>
        {
           return(
               <div key={item.id}>
                   <p>{item.id}</p>
                   <p>{item.name}</p>
                   <p>{item.age}</p>
               </div>
           )
        });
        return(
            <div>
                Items : values
                {theItems}
            </div>
        );
    }
}

export default Items;