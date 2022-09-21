import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";
import QboardReadForm from "./QBoardReadForm";
import QBoardServices from "./QBoardServices";


class QBoardAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bnum : this.props.location.state.bnum,
            btitle: this.props.location.state.btitle,
            btext: this.props.location.state.btext,
            bwriter: this.props.location.state.bwriter,
            banswerText: ""
        };

        console.log(this.state);

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

    getData() {
        axios.get("/QnA/view.do?=").then((res) => {
            const data = res.data;
            this.setState({
                bnum: data.bnum,
                btitle: data.btitle,
                btext: data.btext,
            });
        });
    }

    sendData(){
        const bnum = this.state.bnum;
        const banswerText = this.state.banswerText;
        let form = new FormData();
        form.append("BAnswerText", banswerText);
        form.append("BNum", bnum);
        

        axios.post("/QnA/answer.do", form).then((res) =>{
            alert("요청 처리되었음");
            this.props.history.push("/QnA");
        })
    }

    
    // view에서 넘어올 때에는 controller에서 넘어온 data를 props에 붙여
    // 출력할 수 있도록 함

    createArticleIdTag() {
        const bnum = this.state.bnum;
        const crud = this.state.crud;
        if (crud !== "Insert") {
            return <input type="hidden" value={bnum} readOnly />;
        } else {
            return null;
        }
    }
    // Insert를 제외한 기능의 경우 이미 존재하는 값을 받아오기 때문에
    // articleId를 readOnly 처리하여 수정할 수 없도록 함

    render() {
        const btitle = this.state.btitle;
        const btext = this.state.btext;
        const bwriter = this.state.bwriter;
        const banswerText = this.state.banswerText;
        

        return (
            <div className="container-fluid px-5 my-5">
                <Card className="px-5 py-5 d-flex formBody">
                {contextValue => <h3>{`contextValueva : ${contextValue}`}</h3>}
                <h1>Q&A 답변쓰기</h1>
                {this.createArticleIdTag()}
                <h3>제목</h3>
                <input
                    type="text"
                    name={btitle}
                    value={btitle}
                    className='my-3 form-control inputTitle'
                    readOnly='readOnly'
                    onChange={(event) =>{
                        this.setState({ btitle: event.target.value })
                    }
                        
                    }
                />
                {/* input form에 값이 변경되었을 때에(onChange)
                    해당 값을 props에 setState로 저장함 */}
                <br />
                <h3>내용</h3>
                <textarea
                    rows="10"
                    cols="20"
                    name={btext}
                    value={btext}
                    className="my-3 form-control inputText"
                    readOnly='readOnly'
                    style={{resize: 'none'}}
                    onChange={(event) =>
                        this.setState({ btext: event.target.value })
                    }
                ></textarea>
                
                <h3>글쓴이</h3>
                <input
                    type="text"
                    name={bwriter}
                    value={bwriter}
                    readOnly='readOnly'
                    className="my-3 form-control inputRegdate"
                    onChange={(event) =>{
                        this.setState({ bwriter: event.target.value })
                    }
                        
                    }
                />
                
                <br /> 

                    {/* createCrudBtn() method 선언부 참고 */}
                </Card>
                <br/>

                <Card className="px-5 py-5 d-flex formBody">
                <h3>답변작성</h3>
                <input
                    type="text"
                    rows="10"
                    cols="20"
                    name={banswerText}
                    value={banswerText}
                    className="my-3 form-control inputRegdate"
                    onChange={(event) =>{
                        this.setState({ banswerText: event.target.value})
                    }
                        
                    }
                />
                                    
                <div className="float-end">
                        <div>
                            <button className="btn btn-md btn-success float-end" onClick={()=> this.sendData()}>
                                답변 작성
                            </button>
                        </div>
                    </div>
                </Card>

                <div className="mt-5">
                    <Link to={"/QnA"}>
                        <Button className="btn-info float-end">
                            취소
                        </Button>
                    </Link>
                </div>
                
            </div>
        );
    }
}

export default QBoardAnswer;