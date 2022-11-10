// import React, { Component }  from "react";
// import Home from "./Home";
// import Catalog from "./Catalog";


// class Tabs extends Component{

//     constructor (){
//         super()
//         this.state= {
//             activeTab: "home"
//         }
//     }

//     handleTab = (event) => {
//         const tabName = event.target.getAttribute("tabName");
//         this.setState({ activeTab: tabName })
//     };
    

//     render(){
//         return (
//             <div className="Tabs">
//                 <div className="nav">
//                     <span className={this.state.activeTab === "home" ? "active" : ""} onClick={this.handleTab} tabName='home'>Home</span>
//                     <span className={this.state.activeTab === "catalog" ? "active" : ""} onClick={this.handleTab} tabName='catalog'>Catalog</span>
//                 </div>
//                 <div className="outlet">
//                     {this.state.activeTab === "home" ? <Home /> : <Catalog />}
//                 </div>
//             </div>
//         );
//     }
// };
// export default Tabs;