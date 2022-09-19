import React, { Component } from "react";
import { Route } from "react-router-dom";
import NboardCUDForm from "./NboardCUDForm";
import Nboardlist from "./Nboardlist";
import NboardR from "./NboardR";

class Nboard extends Component {
    render(){
        return(
            <div className="container-fluid py-5 px-5" style={{paddingTop:'30%'}}>
                <div>
                    <h1 className="Title" style={{color: '#25C1FF'}}>
                        공지사항
                    </h1>
                </div>
                <Route path={"/Notice"} component={Nboardlist} exact={true} />
                <Route path={"/Notice/Read"} component={NboardR} />
                {/* *****TEMPORARY LINK***** */}
                <Route path={"/Notice/:crud"} component={NboardCUDForm}/>
                {/* *****TEMPORARY LINK***** */}
            </div>
        )
    }
}
export default Nboard;