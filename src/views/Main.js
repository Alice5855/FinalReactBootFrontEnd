import React, { Component } from "react";
import ReactTube from "./ReactTube"
import "./Main.css";
import Card1 from "./Card1";
import Card2 from "./Card2";

class Main extends Component {
    render() {
        return(
            <>
                <div className="container-fluid">
                    <ReactTube />
                        <div className="d-flex row py-5 mx-5 cardWrapper">
                            <Card1 />
                        </div>
                        <div className="d-flex row py-5 mx-5 cardWrapper">
                            <Card2 />
                        </div>
                </div>
            </>
        )
    }
}
export default Main;