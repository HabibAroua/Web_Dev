import React , {Component} from 'react';
import Nav from './compoments/Nav';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './compoments/Home';
import About from './compoments/About';


class App2 extends  Component
{
    render()
    {
        return(
            <BrowserRouter>
                <div>
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App2;