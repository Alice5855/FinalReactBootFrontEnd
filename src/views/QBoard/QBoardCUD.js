import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";

class QBoardCUD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bnum : "",
            btitle: "",
            btext: "",
            bwriter: "",
            crud: props.match.params.crud
        };

        console.log(this.state);
        
        if(this.state.crud === "Insert"){
            this.state = {
                btitle: "",
                btext: "",
                bwriter: localStorage.getItem('nickname'),
                crud:"Insert"
            }
        } else if (this.state.crud === "Update") {
            this.state = {
                bnum: this.props.location.state.bnum,
                btitle: this.props.location.state.btitle,
                btext: this.props.location.state.btext,
                bwriter: this.props.location.state.bwriter,
                crud: "Update"
            };
        } else if(this.state.crud === "Delete"){
            this.state = {
                bnum: this.props.location.state.bnum,
                btitle: this.props.location.state.btitle,
                btext: this.props.location.state.btext,
                bwriter: this.props.location.state.bwriter,
                crud: "Delete"
            };
        }
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
        let btnOutlineColor = "";
        if (crud === "Insert") {
            btnColor = "btn btn-md"
            btnOutlineColor = "primary"
        } else if (crud === "Update") {
            btnColor = "btn btn-md"
            btnOutlineColor = "info"
        } else if (crud === "Delete") {
            btnColor = "btn btn-md"
            btnOutlineColor = "danger"
        } else {
            btnColor = "btn btn-md"
        }

        if (crud === "View") {
            return null;
        } else {
            const crudName =
            crud === "Update" ? "수정" : crud === "Insert" ? "등록" : "삭제";
            return (
            <Button outline color={btnOutlineColor} className={btnColor} onClick={() => this.crud()}>{crudName}</Button>
            );
        }
    }
    // 기능정의되어 넘어온 crud값을 통해 button text와 onClick 링크를
    // 버튼에 mapping 해줌. view의 경우 이미 data가 넘어온 상태일 것이므로
    // btn에 기능정의를 따로 하지 않음

    crud() {
        const {bnum, btitle, btext, crud, bwriter,bregdate } = this.state;
        let crudType = "";
        console.log("bnum : " + bnum);
        if (crud === "Update") {
            crudType = "/QnA/modify.do";
        } else if (crud === "Delete") {
            crudType = "/QnA/delete.do";
        } else if (crud === "Insert") {
            crudType = "/QnA/insertProcess.do";
        } else if (crud === "View") {
            return null;
        }
        console.log(crud);
        // crud에 정의된 기능에 따라 controller의 기능으로 url을 넘겨줌
        // 이 때 넘길 값들은 props에 저장되는 각각의 column값에 맞춘
        // 값들 (const {}부분)이 된다.

        let form = new FormData();  
        form.append("Btext", btext);
        form.append("Btitle", btitle);
        form.append("Bwriter", bwriter);
        
        if (crud !== "Insert") {
            form.append("BNum", bnum);
        }
        console.log();
        // form에 입력된 data를 props에 저장하는 부분. Insert가 아닌
        // 경우 백에서 넘어온 articleID를 사용해야 하므로 if(!==)문을
        // 사용함
        if (crud === "Insert") {
            axios
            .post(crudType, form)
            
            .then((res) => {
                console.log(form);
                console.log(crudType);
                alert("요청이 처리되었습니다");
                this.props.history.push("/QnA");
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
                this.props.history.push("/QnA");
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
                alert("요청이 처리되었습니다");
                this.props.history.push("/QnA");
            })
            .catch((err) => {
                alert("error: " + err.response.data.msg);
            });
        };
        
        // axios의 post method로 props의 data(crudType, form)를 넘기고
        // 성공했을 때(.then) .push('/')로 메인 페이지로 forward해주고
        // 실패했을 때(.catch) error message를 alert
    }

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
        

        return (
            <div className="container-fluid px-5 my-5">
                <Card className="px-5 py-5 d-flex formBody">
                {contextValue => <h3>{`contextValueva : ${contextValue}`}</h3>}
                <h1>Q&A {this.createHeaderName()}</h1>
                {this.createArticleIdTag()}
                <h3>제목</h3>
                <input
                    type="text"
                    name={btitle}
                    value={btitle}
                    className='my-3 form-control inputTitle'
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
                    style={{resize: 'none'}}
                    onChange={(event) =>
                        this.setState({ btext: event.target.value })
                    }
                ></textarea>
                
                <h3>글쓴이</h3>
                <input readOnly
                    type="text"
                    name={bwriter}
                    value={bwriter}
                    className="my-3 form-control inputRegdate"
                    onChange={(event) =>{
                        this.setState({ bwriter: event.target.value })
                    }
                        
                    }
                />

                
                <br /> <br />
                    <div className="float-end">
                        {this.createCrudBtn()}
                    </div>
                    {/* createCrudBtn() method 선언부 참고 */}
                </Card>
                <div className="mt-5">
                    <Link to={"/QnA"}>
                        <Button className="float-end" outline color="warning">
                            취소
                        </Button>
                    </Link>
                </div>
                
            </div>
        );
    }
}

export default QBoardCUD;