import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";
import AuthService from "../Auth/AuthService";
import QBoardServices from "./QBoardServices";

class QBoardReadForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            bnum : "",
            btitle: "",
            bwriter: "",
            btext: "",
            bnum: props.match.params.bnum,
            bregDate: "",
            banswerText: "",
            banswerRegdate: "",
            nickname: "",
            role: ""
        };

        console.log(this.state.bnum);

        this.sendToken();

        this.getBoardData(this.state.bnum);
    }

    sendToken(){

        AuthService.loginSuccessGetUserInfoList(localStorage.getItem('token')).then((res)=>{
            console.log(res);
            this.setState({
                nickname:res.data.memnickname,
                role:res.data.memrole
            })
        })
    }


    getBoardData(bnum){
        console.log("겟보드데이터 실행")
        QBoardServices.getBoard(bnum).then((res)=>{
            this.setState({
                bnum:res.data.board.bnum,
                btitle: res.data.board.btitle,
                bwriter: res.data.board.bwriter,
                btext: res.data.board.btext,
                bregDate: res.data.board.bregDate,
                banswerText: res.data.board.banswerText,
                banswerRegdate: res.data.board.banswerRegdate
            })
            console.log(this.state);
        })
    }

    createAnswerArea(banswerText){
        if(banswerText != null){
            return(
                <>
                <h3>
                    답글
                </h3>
                <div>
                    <small className="text-muted float-end py-3">
                        {this.state.banswerRegdate}
                    </small>
                </div>
                <textarea
                rows="10"
                cols="20"
                name={banswerText}
                value={banswerText}
                className="my-3 form-control inputText"
                readOnly='readOnly'
                style={{resize: 'none'}}
                ></textarea>
                </>
                )
        }else{

            var randomCount = Math.floor(Math.random()*5);
            var imgLink;
            
            if(randomCount === 0){
                imgLink = "http://localhost:3000/images/no_answer_gif.gif"
            }else if(randomCount === 1){
                imgLink = "http://localhost:3000/images/no_answer_gif2.gif"
            }else if(randomCount === 2){
                imgLink = "http://localhost:3000/images/no_answer_gif3.webp"
            }else if(randomCount === 3){
                imgLink = "http://localhost:3000/images/no_answer_gif4.webp"
            }else if(randomCount === 4){
                imgLink = "http://localhost:3000/images/no_answer_gif5.webp"
            }


            return(
                <>
                    <div className="d-flex flex-row-reverse">
                        <div className="w-25 m-auto">
                            <img src={imgLink} className="img-fluid m-auto" alt="no answer img"></img>
                            <br/>
                        </div>
                            <div className="nav-item">
                                아직 답변이 작성되지 않았어요! <br/>
                                조금만 기다려주시면 감사!
                            </div>
                    </div>
                </>
            )
        }
        
    }

    createAnswerBtnCheckAdmin(){
        if(this.state.role==="ROLE_ADMIN"){
            return(
                <Button className="btn-md" outline color="primary" onClick={() => 
                            this.props.history.push({
                                pathname: "/QnA/answer",
                                state:{
                                    bnum: this.state.bnum,
                                    btitle: this.state.btitle,
                                    bwriter: this.state.bwriter,
                                    btext: this.state.btext,
                                    bregDate: this.state.bregDate
                                }
                            })
                        }>
                    답변
                </Button>
            )
        }
    }

    createDeleteBtnCheckNickname(){
        if(this.state.nickname===this.state.bwriter || this.state.role==="ROLE_ADMIN"){
            return(
                <Button className="btn-md mx-3" outline onClick={() => 
                    this.props.history.push({
                        pathname: "/QnA/crudDelete",
                        state:{
                            bnum: this.state.bnum,
                            btitle: this.state.btitle,
                            bwriter: this.state.bwriter,
                            btext: this.state.btext,
                            bregDate: this.state.bregDate
                        }
                    })
                }>
                    삭제
                </Button>
            )
        }
    }

    createModifyBtnCheckNickname(){
        if(this.state.nickname===this.state.bwriter){
            return(
                <Button className="btn-md my-1" outline color="primary" onClick={() => 
                    this.props.history.push({
                        pathname: "/QnA/crudUpdate",
                        state:{
                            bnum: this.state.bnum,
                            btitle: this.state.btitle,
                            bwriter: this.state.bwriter,
                            btext: this.state.btext,
                            bregDate: this.state.bregDate
                        }
                    })
                }>
                    수정
                </Button>
            )
    }
}

    render(){
        
        return(
            <>
            
            <div className="container readBody px-5 my-5" style={{borderTop: '2px solid', borderBottom: '2px solid', borderColor: '#4C51BD'}}>
                    <div id="boardTitle" className="border-bottom mx-3 my-5">
                        <div className="d-flex flex-row justify-content-between align-items-end">
                            <h2 className="py-3 d-inline">
                                    {this.state.btitle}
                            </h2>
                            <div className="d-flex align-items-center">
                                <small className="text-muted mx-2">
                                            {this.state.bwriter}
                                </small>
                                <small className="text-muted py-3">
                                    {this.state.bregDate}
                                </small>
                            </div>
                        </div>
                    </div>
                        <div className="my-3">
                            <div className="mb-5">
                            <p className="px-4 py-3 kfont2" style={{whiteSpace: 'break-spaces'}}>
                                    {this.state.btext}
                                </p>
                            </div>
                        </div>
                <br/>
                <Card className="d-flex px-5 py-5 mb-5">
                    {this.createAnswerArea(this.state.banswerText)}
                    

                </Card>
                
            </div>
                {this.createModifyBtnCheckNickname()}
                {this.createDeleteBtnCheckNickname()}
                {this.createAnswerBtnCheckAdmin()}
                    <Link to={"/QnA"}>
                        <Button className="btn-sm float-end" color="primary" outline>
                            리스트
                        </Button>
                    </Link>
            </>
            
        )
    }
}
export default QBoardReadForm;