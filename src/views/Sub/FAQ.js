import React, { Component } from "react";
import SpaceFiller from "../../SpaceFiller";
import Sidebar from "./Sidebar";

class FAQ extends Component {
    render(){
        return(
            <>
            <SpaceFiller/>
            <div className="d-flex flex-nowrap">
                <Sidebar/>
                
            </div>
            </>
        )
    }
}
export default FAQ;