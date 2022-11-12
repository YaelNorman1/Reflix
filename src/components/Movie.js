import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
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
                        <img src={movie.img} className="card-img-top"/>
                        <a href="#!">
                            <div className="mask" ></div>
                        </a>
                        {/* <span>{movie.title}</span> */}
                    </div>
                </div>
           </Col>
        )
    }
}
