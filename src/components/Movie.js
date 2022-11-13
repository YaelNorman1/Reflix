import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../style/Movie.css'
import AddMovieBtn from './AddMovieBtn';
import RemoveMovieBtn from './RemoveMovieBtn';

export default class Movie extends Component {
    showMovieInfo(){

    }
  
  
    render() {
        const movie= this.props.movie;
        return (
            <Col>
                <Card className="rounded movie-info mt-2" onClick={this.showMovieInfo}>
                    <Link to={`/movies/${movie.id}`}>
                        <Card.Img src={movie.img} className= "card-img-top" alt="Card image" />
                        <Card.ImgOverlay>
                            {movie.isRented? <RemoveMovieBtn changeRentedStatus={this.props.changeRentedStatus} movieId={movie.id}/> : <AddMovieBtn changeRentedStatus={this.props.changeRentedStatus} movieId={movie.id}/>  }
                        </Card.ImgOverlay>
                    </Link>
                </Card>
           </Col>
        )
    }
}
