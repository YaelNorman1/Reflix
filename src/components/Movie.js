import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../style/Movie.css'

export default class Movie extends Component {
    showMovieInfo(){

    }
  
  
    render() {
        const movie= this.props.movie;
        return (
            <Col>
                <div className="card rounded movie-info mt-2" onClick={this.showMovieInfo}>
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        {/* <button type="button" className="btn btn-primary btn-floating fa-download">
                            <i className="bi-plus"></i>
                        </button> */}
                        <Link to={`/movies/${movie.id}`}>
                            <img src={movie.img} className="card-img-top"/>
                            <a href="#!">
                                <div className="mask" ></div>
                            </a>
                        </Link>
                    </div>
                </div>
           </Col>
        )
    }
}
