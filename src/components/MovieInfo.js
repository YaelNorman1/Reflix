import React, { Component } from 'react'
import '../style/MovieInfo.css'


export default class MovieInfo extends Component {
  render() {
    const movie= this.props.movie
    return (
        <div>
            <div className="card movie-info rounded" >
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src={movie.img} className="card-img img-fluid"/>
                    <a href="#!">
                    <div className="mask"></div>
                    </a>
                </div>
                <div className="card-body">
                    <div className="movie">
                        <h5 className="card-title movie-name">{movie.title}</h5>
                        <hr/>
                        <h6 className="card-text">{movie.descrShort}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
