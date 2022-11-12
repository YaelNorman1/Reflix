import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import Movie from './Movie'

export default class MovieList extends Component {

    

    render() {
        return (
            // <div className='row'>
                <Row>
                    {this.props.movies.map(movie => {
                        return <Movie movie={movie}/>
                    })}
                </Row>

            // </div>
        )
    }
}
