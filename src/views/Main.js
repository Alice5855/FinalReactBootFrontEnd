import React, { Component } from "react";
import ReactTube from "./ReactTube"
import "./Main.css";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Head from "./Commons/Head";

class Main extends Component {
    render() {
        return(
            <>
                <Head />
                <div className="container-fluid">
                    <ReactTube />
                        <div className="d-flex row py-5 mx-5 cardWrapper">
                            <Card1 />
                        </div>
                        <div className="d-flex row py-5 mx-5 cardWrapper">
                            <Card2 />
                        </div>
                        <div className="d-flex row py-5 mx-5 cardWrapper">
                            <Card3 />
                        </div>
                </div>
            </>
        )
    }
}
export default Main;