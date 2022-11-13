import React, { Component } from 'react'

export default class SearchInput extends Component {
    
    handleInputChang= (event)=> {
        this.props.handleInputSearch(event.target.value)
    }
  
    render() {
        return (
            <div >
                <input type='text' placeholder="Search movies" className='form-control mr-10' value={this.props.searchInput} onChange={this.handleInputChang}/>    
            </div>
        )
  }
}
