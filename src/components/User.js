import React, { Component} from "react";
import { Link } from 'react-router-dom';
import '../style/User.css'



class User extends Component {
    constructor() {
        super()
        this.state= {
            currentUser: {}
        }
    }

    saveUserThatClicked= ()=>{
        this.props.getSelectedUser(this.props.userInfo.id)
    }

    render() {

        const userInfo= this.props.userInfo

        return(
                <div className="col-md-3 mt-4">
                    <Link to="/catalog"> 
                        <div className="card user-info rounded" onClick={this.saveUserThatClicked}>
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src={require("../img/temp-user.png")} className="card-img img-fluid"/>
                                <a href="#!">
                                    <div className="mask" ></div>
                                </a>
                                <span>{userInfo.name}</span>
                            </div>
                            
                        </div>
                    </Link>
                </div>
        )
    }
}

export default User;