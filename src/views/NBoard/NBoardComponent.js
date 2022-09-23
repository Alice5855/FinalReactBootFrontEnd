import React, { Component } from "react";
import { Route } from "react-router-dom";
import NBoardList from "./NBoardList";
import NBoardReadForm from "./NBoardReadForm";

import NBoardCUD from "./NBoardCUD";

class NBoardComponent extends Component {
    render(){
        
        return(
            <>
            <div id="spaceFiller"></div>
            <div className="container py-5 px-5" style={{paddingTop:'30%'}}>
                <div>
                    <p id="boardtitle" className="kfont2 fs-2 mcolor1">
                        공지사항
                    </p>
                </div>
                <div className="w-50 m-auto">
                    <img className="img-fluid" src="http://localhost:3000/images/test.jpg" />
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