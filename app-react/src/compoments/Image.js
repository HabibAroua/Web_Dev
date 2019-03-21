import React , {Component} from "react";
import pic from './../Picture/mai.jpg';
class Image extends Component
{
    render()
    {
        return(
            <div>
                <img  src={pic} className="img" />
            </div>
        )
    }
}

export default Image;