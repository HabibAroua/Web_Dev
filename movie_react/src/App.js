import React , {Component} from 'react';
import './App.css';
import Navbar from './compoment/navbar/Navbar'
import Movie from './compoment/movie/Movie';
import axios from "axios";

class App extends  Component
{
    state =
    {
        movies : []
    }


    componentDidMount()
    {
        axios.get("http://www.omdbapi.com/?apikey=b3410783&s=frozen")
            .then(res=>
            {
                this.setState(
                    {
                        movies : res.data.Search
                    }
                )
            });
    }


    render()
  {
      const {movies}=this.state;
      const moevieList=movies.map(movie=>
      {
          return (
              <div className={"col-4"}> <Movie title={movie.Title} poster={movie.Poster}/></div>
          )
      })
    return(
        <div>
            <Navbar/>
            <div className={"container mt-5"}>
                <div className={"row"}>
                    {moevieList}
                </div>
            </div>
        </div>
    )
  }
}

export default App;
//Drriblere pour des templates
