import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'


class Navbar extends Component {
  
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>  
                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog">Catalog</Link>
                    </li>
                </ul>
                <img src={require("../img/reflix-low-resolution-logo-black-on-transparent-background.png")} className="logo ms-auto mr-10 img-fluid"/>
            </nav>
        </div>
        )
  }
}

export default Navbar;
