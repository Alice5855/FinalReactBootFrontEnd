import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";
import CBoardServices from "./CBoardServices";
import CBoardReply from "./CBoardReply";
import CBoardReplyList from "./CBoardReplyList";
import $ from "jquery";

class CBoardReadForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            bnum : "",
            btitle: "",
            bwriter: "",
            btext: "",
            bnum: props.match.params.bnum,
            fullName:"",
            bregDate: ""
        };

        console.log(this.state.bnum);
        console.log(this.state.fullName);
        this.getBoardData(this.state.bnum);
        localStorage.setItem("bnum",this.state.bnum);
    }


   

    getBoardData(bnum){
        console.log("겟보드데이터 실행")
        CBoardServices.getBoard(bnum).then((res)=>{
            this.setState({
                bnum:res.data.board.bnum,
                btitle: res.data.board.btitle,
                bwriter: res.data.board.bwriter,
                btext: res.data.board.btext,
                bregDate: res.data.board.bregDate,
                fullName:res.data.board.fullName,
                
            })
            console.log(this.state);
        })
        
    }

    imgCheck(){
        if (this.state.fullName != null && this.state.fullName != "/s_") {
            return(
                <img src= {"/CUpload/display?fileName=" + this.state.fullName} onClick={() => {this.showImage()}} />
                )
        }
    }

    showImage(){
        console.log("풀네임 뭐임 뭔데" + this.state.fullName);

        var original = this.state.fullName.replace("/s_", "/")
        
        $(".bigPictureWrapper").css("display", "flex").show();
        
        $(".bigPicture")
        .html("<img src='/CUpload/display?fileName=" + original + "' >")
        .animate({width:'100%', height: '100%'}, 150);
    }

    componentDidMount() {
        $(".bigPictureWrapper").on("click", function(e){
            $(".bigPicture").animate({width:'0%', height: '0%'}, 150);
            setTimeout(function(){
                $('.bigPictureWrapper').hide();
            }, 150);
        });
    }


    render(){
        
        return(
            <>
                <div className="container readBody px-5 my-5" style={{borderTop: '2px solid', borderBottom: '2px solid', borderColor: '#4C51BD'}}>
                    <div class='bigPictureWrapper'>
                        <div class='bigPicture'>
                            
                        </div>
                    </div>
                    <div id="boardTitle" className="border-bottom mx-3 my-5">
                        <div>
                            <h2 className="py-3">
                                        {this.state.btitle}
                            </h2>
                        </div>
                        <div className="d-flex flex-row-reverse py-3">
                            <small className="text-muted">
                                {this.state.bwriter}
                            </small>
                        </div>
                        <div className="d-flex flex-row-reverse py-3">
                            <small className="text-muted">
                                {this.state.bregDate}
                            </small>
                        </div>
                    </div>
                    <div className="my-3">
                        <div className="mb-5">
                            <div className="my-2 mx-4">
                                {this.imgCheck()}
                            </div>
                            <p className="px-4 py-3 kfont2" style={{whiteSpace: 'pre'}}>
                                {this.state.btext}
                            </p>
                        </div>
                    </div>
                    <div>
                        <small className="text-muted float-end py-3">
                            
                        </small>
                    </div>
                </div>
                <div className="my-5">
                    <Link to={"/Community"}>
                        <Button className="float-end" color="primary" outline>
                            리스트
                        </Button>
                    </Link>

                    <Button className="me-3" color="primary" outline onClick={() => 
                        this.props.history.push({
                            pathname: "/Community/crudUpdate",
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

                    <Button className="" color="secondary" outline onClick={() => 
                        this.props.history.push({
                            pathname: "/Community/crudDelete",
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
                </div>
                

            
             
            

            <section class="mb-5">
                        <div class="card bg-light">
                            <div class="card-body">

                                <CBoardReplyList>

                                </CBoardReplyList>

                                <CBoardReply>

                                </CBoardReply>

                        </div>
                    </div>
            </section>

       

            </>
        )
    }
}
export default CBoardReadForm;