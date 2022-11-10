import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>  
                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog">Catalog</Link>
                    </li>
                </ul>
                <img src={require("../img/reflix-logo.png")} className="ms-auto mr-10 img-fluid"/>
            </nav>
        </div>
        )
  }
}

export default Navbar;
