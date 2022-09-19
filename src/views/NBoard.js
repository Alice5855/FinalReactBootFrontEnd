import React, { Component } from "react";
import { Route } from "react-router-dom";
import NBoardCUDForm from "./NBoardCUDForm";
import NBoardlist from "./NBoardlist";
import NBoardR from "./NBoardR";

class NBoard extends Component {
    render(){
        return(
            <div className="container-fluid py-5 px-5" style={{paddingTop:'30%'}}>
                <div>
                    <h1 className="Title" style={{color: '#25C1FF'}}>
                        공지사항
                    </h1>
                </div>
                <Route path={"/Notice"} component={NBoardlist} exact={true} />
                <Route path={"/Notice/Read"} component={NBoardR} />
                <Route path={"/Notice/:crud"} component={NBoardCUDForm} />
            </div>
        )
    }
}
export default NBoard;