import React from 'react';
import {Link , NavLink} from "react-router-dom";

const Nav = ()=>
{
    return(
        <div className="navbar">
            <div className="container">
                <a className="logo" href="#">Logo</a>
                <ul>
                    <NavLink activeClassName="selected" exact to="/">Home</NavLink>
                    <NavLink activeClassName="selected" to="/about">About</NavLink>
                    <NavLink activeClassName="selected" to="/blog">Blog</NavLink>
                    <NavLink activeClassName="selected" to="/blog1">Blog1</NavLink>
                    <NavLink activeClassName="selected" to="/rout">Rout</NavLink>
                    <NavLink activeClassName="selected" to="/image">Image</NavLink>
                </ul>
            </div>
        </div>

    )
}

export default Nav;