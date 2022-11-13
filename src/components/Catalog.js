import React, { Component } from "react";
import LoginUser from "./LoginUser";
import MovieList from "./MovieList";
import SearchInput from "./SearchInput";

class Catalog extends Component {
    constructor(){
        super()
        this.state= {
            searchInput: ''
        }
    }

    handleInputSearch= (input) =>{
        console.log(input)
        this.setState({searchInput: input})
    }

    render() {

        return (
        <div>
            <LoginUser loginUser={this.props.loginUser}/>
            <SearchInput searchInput={this.state.searchInput} handleInputSearch={this.handleInputSearch}/>
            <br/>
            <h5>Rented Movies</h5>
            <MovieList movies= {this.props.movies.filter(movie => movie.isRented).filter(movie => movie.title.toUpperCase().includes(this.state.searchInput.toUpperCase()))} changeRentedStatus={this.props.changeRentedStatus}/>
            <hr/>
            <h5>All Movies</h5>
            <MovieList movies= {this.props.movies.filter(movie => !movie.isRented).filter(movie => movie.title.toUpperCase().includes(this.state.searchInput.toUpperCase()))} changeRentedStatus={this.props.changeRentedStatus}/>
        </div>)
    }
}

export default Catalog;