import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import Movie from './Movie'

export default class MovieList extends Component {

    

    render() {
        return (
            <Row>
                {this.props.movies.map(movie => {
                    return <Movie movie={movie} changeRentedStatus={this.props.changeRentedStatus}/>
                })}
            </Row>

        )
    }
}
