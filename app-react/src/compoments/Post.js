import React , {Component} from "react";
import axios from "axios";

class Post extends Component
{
    state =
        {
            getPosts : []
        }
    componentDidMount()
    {
        axios.get("http://192.168.1.8:5000/getPosts")
            .then(res=>
            {
                //console.log("the data is " +res.data);
                this.setState(
                    {
                        getPosts : res.data
                    }
                )
            });
    }

    render()
    {
        const {getPosts}=this.state;
        const userList=getPosts.map(getPost=>
        {
            return (
                <div key={getPost.id}>
                    <div className="content">
                        <div>Id      : {getPost.id}</div>
                        <div>Title   : {getPost.title}</div>
                        <div>Body    : {getPost.body}</div>
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

export default Post;