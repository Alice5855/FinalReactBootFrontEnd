import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";

class CBoardReplyDelete extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnum : localStorage.getItem("rnum"),
            
        };




       

        


    }

    CBoardReplyDelete(){
        const  rnum = this.state.rnum;

        axios.post("/CReply/delete", rnum)

        
    }


    render(){
        return(
            <>
                <button onClick={this.CBoardReplyDelete()}>삭제하기</button>
            </>
        )
    }
}

export default CBoardReplyDelete;