import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";

class NboardR extends Component {
    render(){
        return(
            <div className="container-fluid readBody px-5 my-5">
                <Card className="px-5 py-5">
                    <div>
                        <div>
                            <p>Title</p>
                        </div>
                        <div>
                            <p>Content</p>
                        </div>
                        <div>
                            <p>RegDate</p>
                        </div>
                    </div>
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
export default NboardR;