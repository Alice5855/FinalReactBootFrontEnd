import React, { Component } from "react";
import { Route } from "react-router-dom";
import NBoardList from "./NBoardlist";
import NBoardReadForm from "./NBoardReadForm";

import NBoardCUD from "./NBoardCUD";

class NBoardComponent extends Component {
    render(){
        
        return(
            <div className="container-fluid py-5 px-5" style={{paddingTop:'30%'}}>
                <div>
                    <h1 className="Title" style={{color: '#25C1FF'}}>
                        공지사항
                    </h1>
                </div>
                <Route path={"/Notice"} component={NBoardList} exact={true} />
                <Route path={"/Notice/crud:crud"} component={NBoardCUD} />
                <Route path={"/Notice/view/bnum=:bnum"} component={NBoardReadForm} />

                
            </div>
        )
    }
}
export default NBoardComponent;