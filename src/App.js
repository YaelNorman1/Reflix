import React, { Component }  from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";




class App extends Component {

  constructor(){
    super()
    this.state= {
      users: [{ id : 0 , name: "A", budget: 100, img: "red"},
              { id : 1 , name: "B", budget: 101, img: "blue"},
              { id : 2 , name: "C", budget: 102, img: "green"},
              { id : 3 , name: "D", budget: 103, img: "orange"}],
      loginUser: {}
    }

  }

  getSelectedUser= id => {
    const currentUser= this.state.users.find(user => user["id"] === id)
    this.setState({loginUser: currentUser})
    // console.log(this.state.loginUser)
  }


  render () {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" render={() => <Home users={this.state.users} getSelectedUser={this.getSelectedUser}/>}/>
          <Route exact path="/catalog" render={() => <Catalog loginUser={this.state.loginUser}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
