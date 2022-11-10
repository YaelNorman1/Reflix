import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import LoginUser from "./LoginUser";
import MovieList from "./MovieList";

class Catalog extends Component {

    render() {

        return (
        <div>
            <LoginUser loginUser={this.props.loginUser}/>
            <MovieList isCatalog={false} movies= {this.props.movies}/>
            <MovieList isCatalog={true} movies= {this.props.movies}/>
            

        </div>)
    }
}

export default Catalog;