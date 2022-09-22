import React, { Component } from "react";
import ReactTube from "./ReactTube"
import "./Main.css";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Head from "./Commons/Head";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

class Main extends Component {
    render() {
        return(
            <>
                <Head />
                
                    <Section1 />
                    <Section2 />
                    <ReactTube />
                    <Section3 />
            </>
        )
    }
}
export default Main;