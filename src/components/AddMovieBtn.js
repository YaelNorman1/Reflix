import React, { Component } from 'react'
import '../style/BtnDesign.css'


export default class AddMovieBtn extends Component {

    addMovieToRented= (event)=> {
        this.props.changeRentedStatus(this.props.movieId);
        event.stopPropagation();
        event.preventDefault();
    }

    render() {
        return (
            <button type="button" className="btn btn-light btn-circle btn-sm float-right pos" onClick={this.addMovieToRented}>
                <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
        )
    } 
}
