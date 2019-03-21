import React , {Component} from 'react';
import Nav from './compoments/Nav';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from  './compoments/Home';
import About from './compoments/About';
import Blog from   './compoments/Blog';

class App2 extends  Component
{
    render()
    {
        return(
            <BrowserRouter>
                <div>
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route path="/about"  component={About} />
                    <Route path="/blog"   component={Blog}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App2;