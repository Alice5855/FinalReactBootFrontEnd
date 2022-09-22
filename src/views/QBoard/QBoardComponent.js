import axios from "axios";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import QBoardList from "./QBoardList";
import QboardReadForm from "./QBoardReadForm";
import QBoardCUD from "./QBoardCUD";
import QBoardAnswer from "./QBoardAnswer";

class QBoardComponent extends Component {

    render(){
        
        return(
            <>
            <div id="spaceFiller"></div>
            <div className="container-fluid py-5 px-5" style={{paddingTop:'30%'}}>
                <div>
                    <h1 className="Title" style={{color: '#25C1FF'}}>
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