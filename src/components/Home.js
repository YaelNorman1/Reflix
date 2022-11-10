import React, { Component } from "react";
import User from "./User";

class Home extends Component {

    render() {

        const users= this.props.users
        return(
        <div>
            <div className="user-info container">
                <div className="p-5 text-center">
                    <h3 className="mb-3">Who's Watching?</h3>
                </div>
                <div className="row">
                    {users.map(element => { return (<User userInfo= {element} getSelectedUser={this.props.getSelectedUser}/>)})}
                </div>
            </div>
        </div>) 
    }
}

export default Home;