import React, { Component } from "react";
import '../style/LoginUser.css'

class LoginUser extends Component {

    render() {

        return(
        <div>
            <h3>Hello {this.props.loginUser.name}</h3>
            <h6>Budget: {this.props.loginUser.budget}$</h6>
            
        </div>) 
    }
}

export default LoginUser;