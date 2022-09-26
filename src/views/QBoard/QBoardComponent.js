import React, { Component } from "react";
import { Route } from "react-router-dom";
import QBoardList from "./QBoardList";
import QboardReadForm from "./QBoardReadForm";
import QBoardCUD from "./QBoardCUD";
import QBoardAnswer from "./QBoardAnswer";
import SpaceFiller from "../../SpaceFiller";

class QBoardComponent extends Component {
    render(){
        
        return(
            <>
            <SpaceFiller/>
            <div className="container py-5 px-5" style={{paddingTop:'30%'}}>
                <div>
                    <h1 className="kfont2 fs-2 mcolor1" id="boardtitle">
                        Q&A
                    </h1>
                </div>
                <Route path={"/QnA"} component={QBoardList} exact={true} />
                <Route path={"/QnA/crud:crud"} component={QBoardCUD} />
                <Route path={"/QnA/view/bnum=:bnum"} component={QboardReadForm} />
                <Route path={"/QnA/answer/"} component={QBoardAnswer} />
            </div>
            </>
        )
    }
}
export default QBoardComponent;