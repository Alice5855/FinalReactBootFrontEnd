import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";
import CBoardReadForm from "./CBoardReadForm";
import {useState} from "react";
import CBoardServices from "./CBoardServices";
import CBoardReplyList from "./CBoardReplyList";
import AuthService from "../Auth/AuthService";




class CBoardReply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bnum:localStorage.getItem('bnum'),
            rnum:"",
            reply:"",
            replyer:"",
            replyDate:"",
            crud: "Insert",
            nickname: "",
            role: ""
           
        };
        this.sendToken();
        localStorage.removeItem("bnum");
        
        
        if(this.state.crud === "Insert"){
            this.state = {
                bnum:this.state.bnum,
                rnum:"",
                reply:"",
                replyer:localStorage.getItem('authenticatedUser'),
                replyDate:"",
                crud:"Insert"
            }
        } else if (this.state.crud === "Update") {
            this.state = {
                rnum:this.props.location.state.rnum,
                reply:this.props.location.state.reply,
                replyer:this.props.location.state.replyer,
                replyDate:this.props.location.state.replyDate,
                crud: "Update"
            };
        } else if(this.state.crud === "Delete"){
            this.state = {
                rnum: this.props.location.state.rnum,
                reply: this.props.location.state.reply,
                replyer: this.props.location.state.replyer,
                replyDate: this.props.location.state.replyDate,
                crud: "Delete"
            };
        }
        
        console.log(this.state.rnum + "뭐야")

    }
    /*
    props에 VO에 저장된 column명으로 data를 저장할 수 있도록 함
    crud: 각각의 기능을 'view','update','delete','insert'로 구분
    하여 기능 정의 된 data를 Header로 넘김으로서 아래에서 data를
    axios로(ajax와 비슷한것) 넘기거나 form 값을 insert하기 위해 
    정의됨
    Insert의 경우 현재 form에 입력된 값을 data로 저장해 axios로
    값을 백으로 넘기게 됨
    */

    btnCreateBoardCheckLogin(){
        if(localStorage.getItem('token')){
            return(
                this.createCrudBtn()
            )
        }
    }
    

   
    sendToken(){
        AuthService.setupAxiosInterceptors();
        AuthService.loginSuccessGetUserInfoList(localStorage.getItem('token')).then((res)=>{
            console.log(res);
            this.setState({
                replyer:res.data.memnickname,
                nickname:res.data.memnickname,
                role:res.data.memrole
            })
        })
    }



    createHeaderName() {
        const crud = this.state.crud;
        if (crud === "View") {
            return "조회";
        } else if (crud === "Update") {
            return "수정";
        } else if (crud === "Delete") {
            return "삭제";
        } else if (crud === "Insert") {
            return "등록";
        }
    }
    // ViewButton.js에서 Link될 때 mapping된 url에 따라 기능이 구분되어
    // Header에 기능을 정의하는 부분

    createCrudBtn() {
        const crud = this.state.crud;

        let btnColor = "";
        if (crud === "Insert") {
            btnColor = "btn btn-md btn-success"
        } else if (crud === "Update") {
            btnColor = "btn btn-md btn-warning"
        } else if (crud === "Delete") {
            btnColor = "btn btn-md btn-danger"
        } else {
            btnColor = "btn btn-md"
        }

        if (crud === "View") {
            return null;
        } else {
            const crudName =
            crud === "Update" ? "수정" : crud === "Insert" ? "등록" : "삭제";
            return (
                <button className={btnColor} onClick={() => this.crud()}>{crudName}</button>
            );
        }

    }
    // 기능정의되어 넘어온 crud값을 통해 button text와 onClick 링크를
    // 버튼에 mapping 해줌. view의 경우 이미 data가 넘어온 상태일 것이므로
    // btn에 기능정의를 따로 하지 않음
 

    crud() {
        const {bnum, rnum, reply, replyer, crud} = this.state;
        let crudType = "";
        console.log("rnum : " + rnum);
        console.log("reply : " + reply);
        console.log("replyer : " + replyer);
        console.log("bnum : "  + bnum);
        if (crud === "Update") {
            crudType = "/CReply/modify";
        } else if (crud === "Delete") {
            crudType = "/CReply/delete";
        } else if (crud === "Insert") {
            crudType = "/CReply/insert";
        } else if (crud === "View") {
            crudType ="/CReply/read"
        }
        console.log(crud);
        // crud에 정의된 기능에 따라 controller의 기능으로 url을 넘겨줌
        // 이 때 넘길 값들은 props에 저장되는 각각의 column값에 맞춘
        // 값들 (const {}부분)이 된다.

        let form = new FormData();  
        form.append("Reply", reply);
        form.append("Replyer", replyer);
        form.append("BNum", bnum)
        // form.append("RNum", rnum);
        // form.append("ReplyDate", replyDate);
        // form.append("")

        if (crud !== "Insert") {
            form.append("RNum", rnum);
        }
        
       
        
        
       
        // form에 입력된 data를 props에 저장하는 부분. Insert가 아닌
        // 경우 백에서 넘어온 articleID를 사용해야 하므로 if(!==)문을
        // 사용함
        if (crud === "Insert") {
            axios
            .post(crudType, form)
            
            .then((res) => {
                console.log(form);
                console.log(crudType);
                alert("댓글이 등록 됐습니다.");
                
            })
            .catch((err) => {
                alert("error: " + err.response.data.msg);
            });
            
        }else if(crud ==="Update"){
            axios
            .post(crudType, form)
            
            .then((res) => {
                console.log(form);
                console.log(crudType);
                alert("요청이 처리되었습니다");
                
            })
            .catch((err) => {
                alert("error: " + err.response.data.msg);
            });
        };
        if(crud ==="Delete"){
            axios
            .post(crudType, form)
            
            .then((res) => {
                console.log(form);
                console.log(crudType);
                alert("댓글을 삭제 했습니다.");
                
            })
            .catch((err) => {
                alert("error: " + err.response.data.msg);
            });
        };
        
        // axios의 post method로 props의 data(crudType, form)를 넘기고
        // 성공했을 때(.then) .push('/')로 메인 페이지로 forward해주고
        // 실패했을 때(.catch) error message를 alert

        
        window.location.reload();

    }


    


    getData() {
        axios.get("/Community/view.do?=").then((res) => {
            const data = res.data;
            this.setState({
                rnum: data.bnum,
            });
        });
    }

   
   
    
    // view에서 넘어올 때에는 controller에서 넘어온 data를 props에 붙여
    // 출력할 수 있도록 함

    createArticleIdTag() {
        const rnum = this.state.rnum;
        
        
            return <input type="hidden" value={rnum} readOnly />;
         
           
        
    }
    // Insert를 제외한 기능의 경우 이미 존재하는 값을 받아오기 때문에
    // articleId를 readOnly 처리하여 수정할 수 없도록 함

    btnCreateBoardCheckLogin(){
        if(localStorage.getItem('token')){
            return(
                this.createCrudBtn()
            )
        }
    }
   

    render() {
        const reply = this.state.reply;
        const replyer = this.state.replyer;
        return (
            
            <>
                


             
                               
                <input
                      
                      name={replyer}
                      value={this.state.replyer}
                      className="my-3 form-control inputText"
                      style={{resize: 'none', width: '33%', backgroundColor : "#fff",opacity:"0.7"}}
                      readOnly
                  >
                    
                  </input>
                                    <textarea class="form-control"  placeholder="Join the discussion and leave a comment!"
                                    
                                    rows="3"
                        cols="10"
                        type="text"
                        name={reply}
                        value={reply}
                        className='my-3 form-control inputTitle'
                        onChange={(event) =>{
                            this.setState({ reply: event.target.value })
                        }
                            
                        }>
                                        </textarea>

                                          
                    <br /> <br />
                        <div className="float-end">
                            {this.btnCreateBoardCheckLogin()}
                        </div>
                                


                                
                            
                       

            </>

        );
    }
}

export default CBoardReply;