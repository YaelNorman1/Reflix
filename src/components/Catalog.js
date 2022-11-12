import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import LoginUser from "./LoginUser";
import MovieList from "./MovieList";

class Catalog extends Component {

    render() {

        return (
        <div>
            <LoginUser loginUser={this.props.loginUser}/>
            <h5>Rented Movies</h5>
            <MovieList movies= {this.props.movies.filter(movie => movie.isRented)}/>
            <h5>All Movies</h5>
            <MovieList movies= {this.props.movies.filter(movie => !movie.isRented)}/>
            

        </div>)
    }
}

export default Catalog;