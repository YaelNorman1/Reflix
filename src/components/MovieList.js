import React, { Component } from 'react'

export default class MovieList extends Component {

    constructor(){
        super()
        this.state= {
            isCatalog: true,
            isRented: false
        }
    }

    render() {
        // console.log(this.props.isCatalog)
        
        // this.setState({isCatalog: this.props.isCatalog})
        

        return (
            <div>
                {this.state.isCatalog? <h3>Movies: </h3> :  <h3>Rented movies: </h3>}

            </div>
        )
    }
}
