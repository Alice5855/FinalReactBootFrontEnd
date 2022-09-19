import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";

class NboardCUDForm extends Component {
    render(){
        return(
            <div className="container-fluid px-5 my-5">
                <Card className="px-5 py-5 d-flex formBody">
                    <form>
                        <input
                            type='text'
                            value=''
                            onChange=''
                            className='my-3 form-control inputTitle'
                        />
                        <textarea
                            rows='10'
                            cols='20'
                            value=''
                            onChange=''
                            className="my-3 form-control inputText"
                            style={{resize: 'none'}}
                        />
                    
                        <input
                            type='text'
                            value=''
                            onChange=''
                            className="my-3 form-control inputRegdate"
                            readOnly={true}
                        />
                        <div className="float-end">
                            <Link>
                                <Button className="btn-success me-3">
                                    등록
                                </Button>
                            </Link>
                            <Link>
                                <Button className="btn-warning me-3">
                                    수정
                                </Button>
                            </Link>
                            <Link>
                                <Button className="btn-danger">
                                    삭제
                                </Button>
                            </Link>
                        </div>
                    </form>
                </Card>
                <div className="mt-5">
                    <Link to={"/Notice"}>
                        <Button className="btn-info float-end">
                            리스트
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default NboardCUDForm;