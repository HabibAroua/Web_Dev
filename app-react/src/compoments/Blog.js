import React , {Component} from "react";
import axios from "axios";

class Blog extends Component
{
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res=>
            {
                console.log(res);
            });
    }

    render()
    {
        return(
            <div>
                <h2>Blog</h2>
                <p>This is a blog</p>
            </div>
        )
    }
}

export default Blog;