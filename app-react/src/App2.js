import React , {Component} from 'react';
import Nav from './compoments/Nav';
import { BrowserRouter , Route  , Switch} from 'react-router-dom';
import Home from  './compoments/Home';
import About from './compoments/About';
import Blog from   './compoments/Blog';
import Blog1 from  './compoments/Blog1';
import Rout from './compoments/Rout';
import Image from './compoments/Image';
import Post from './compoments/Post';


class App2 extends  Component
{
    render()
    {
        return(

            <BrowserRouter>
                <div>
                    <center><h1 id="text">Page Officiel</h1></center>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about"  component={About} />
                        <Route path="/blog"   component={Blog}/>
                        <Route path="/blog1"   component={Blog1} />
                        <Route path="/image" component={Image} />
                        <Route path="/post" component={Post} />
                        <Route path="/:params_test"    component={Rout} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default App2;