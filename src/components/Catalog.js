import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import LoginUser from "./LoginUser";
import MovieList from "./MovieList";

class Catalog extends Component {

    render() {

        return (
        <div>
            <LoginUser loginUser={this.props.loginUser}/>
            <h3>Rented Movies</h3>
            <MovieList movies= {this.props.movies.filter(movie => movie.isRented)}/>
            <h3>All Movies</h3>
            <MovieList movies= {this.props.movies.filter(movie => !movie.isRented)}/>
            

        </div>)
    }
}

export default Catalog;