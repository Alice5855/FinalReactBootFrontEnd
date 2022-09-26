import React, { Component } from "react";
import { Route } from "react-router-dom";
import NBoardList from "./NBoardList";
import NBoardReadForm from "./NBoardReadForm";

import NBoardCUD from "./NBoardCUD";
import SpaceFiller from "../../SpaceFiller";

class NBoardComponent extends Component {
    render(){
        
        return(
            <>
            <SpaceFiller/>
            <div className="container py-5 px-5" style={{paddingTop:'30%'}}>
                <div className="mb-5">
                    <p id="boardtitle" className="kfont2 fs-2 mcolor1">
                        공지사항
                    </p>
                </div>
                <div className="w-50 m-auto">
                    <img className="img-fluid rounded" src="http://localhost:3000/images/bleh.webp" />
                </div>
                <Route path={"/Notice"} component={NBoardList} exact={true} />
                <Route path={"/Notice/crud:crud"} component={NBoardCUD} />
                <Route path={"/Notice/view/bnum=:bnum"} component={NBoardReadForm} />
            </div>
            </>
        )
    }
}
export default NBoardComponent;