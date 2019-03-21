import React , {Component} from "react";
import axios from "axios";

class Blog extends Component
{
    state =
        {
            users : []
        }
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res=>
            {
                console.log(res.data);
                this.setState(
                    {
                        users : res.data
                    }
                )
            });
    }

    render()
    {
        return(
            <div>
                <h2>Blog</h2>
                <p>This is a blog</p>
                <div>
                    <table border="1px">
                    {this.state.users.map(user=><tr><td>{user.name}</td><td>{user.username}</td></tr>)}
                    </table>
                </div>
            </div>
        )
    }
}

export default Blog;