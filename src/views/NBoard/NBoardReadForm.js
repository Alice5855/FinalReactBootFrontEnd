import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import NBoardServices from "./NBoardServices";

class NBoardReadForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            bnum : "",
            btitle: "",
            btext: "",
            bnum: props.match.params.bnum,
            bregDate: ""
        };

        console.log(this.state.bnum);
        this.getBoardData(this.state.bnum);
    }

    getBoardData(bnum){
        console.log("겟보드데이터 실행")
        NBoardServices.getBoard(bnum).then((res)=>{
            this.setState({
                bnum:res.data.board.bnum,
                btitle: res.data.board.btitle,
                btext: res.data.board.btext,
                bregDate: res.data.board.bregDate
            })
            console.log(this.state);
        })
        
    }

    render(){
        
        return(
            <>
                <div className="container readBody px-5 my-5" style={{borderTop: '2px solid', borderBottom: '2px solid', borderColor: '#4C51BD'}}>
                        <div id="boardTitle" className="border-bottom mx-3 my-5">
                            <div>
                                <h2 className="py-3">
                                        {this.state.btitle}
                                </h2>
                            </div>
                            <div className="d-flex flex-row-reverse py-3">
                                <small className="text-muted">
                                    {this.state.bregDate}
                                </small>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="mb-5">
                                <p className="px-4 py-3 kfont2" style={{whiteSpace: 'pre'}}>
                                    {this.state.btext}
                                </p>
                            </div>
                        </div>
                </div>
                <div className="my-5">
                    <Link to={"/Notice"}>
                        <Button className="float-end" color="primary" outline>
                            리스트
                        </Button>
                    </Link>

                        <Button className="me-3" color="primary" outline onClick={() => 
                            this.props.history.push({
                                pathname: "/Notice/crudUpdate",
                                state:{
                                    bnum: this.state.bnum,
                                    btitle: this.state.btitle,
                                    btext: this.state.btext,
                                    bregDate: this.state.bregDate
                                }
                            })
                        }>
                            수정
                        </Button>

                        <Button className="" color="secondary" outline onClick={() => 
                            this.props.history.push({
                                pathname: "/Notice/crudDelete",
                                state:{
                                    bnum: this.state.bnum,
                                    btitle: this.state.btitle,
                                    btext: this.state.btext,
                                    bregDate: this.state.bregDate
                                }
                            })
                        }>
                            삭제
                        </Button>
                </div>
            </>
        )
    }
}
export default NBoardReadForm;