import React, { Component } from 'react'
import '../style/BtnDesign.css'


export default class RemoveMovieBtn extends Component {
    removeMovie= (event)=> {
        this.props.changeRentedStatus(this.props.movieId);
        event.stopPropagation();
        event.preventDefault();
    }
    
    render() {
        return (
            <button type="button" className="btn btn-light btn-floating btn-sm btn-circle pos" onClick={this.removeMovie}>
                <i className="fa fa-minus"></i>
            </button>
        )
    } 
}
