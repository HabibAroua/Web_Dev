import React , {Component} from "react";
import axios from "axios";

class Blog1 extends Component
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
        const {users}=this.state;
        const userList=users.map(user=>
        {
            return (
                <div key={user.id}>
                    <div className="content">
                        <div>Name      : {user.name}</div>
                        <div>User name : {user.username}</div>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <h2>Blog</h2>
                <p>This is a blog</p>
                <div>
                    {userList}
                </div>
            </div>
        )
    }
}

export default Blog1;