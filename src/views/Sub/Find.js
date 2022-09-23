import React, { Component, useEffect } from "react";
import { Button, Card } from "reactstrap";
import "./Find.css";
import Sidebar from "./Sidebar";
import { Parallax } from "react-parallax";


class Find extends Component{

    render(){

        const textAlign ={
            textAlign: "center"
        }

        return(
            <>
            <Parallax bgImage={"http://localhost:3000/images/animeBuildingBlur.jpg"} strength={900}>

            <div id="spaceFiller"></div>
            <div className="d-flex flex-nowrap">
                <Sidebar />
                <div className="w-100">
                    
                    <div>
                        <div class="container col-xxl-8 px-4 py-5 ">
                            <div class="row flex-lg-row align-items-center g-5 py-5 kfont1" style={textAlign}>
                                <div className="display-5 fw-bold lh-1 mt0 find-subTitle fs-6">찾 아 오 는 길</div>
                                <h1 class="display-5 fw-bold lh-1 mt-3 find-Title">방문을 환영합니다!</h1>
                                <div className="mt-4 ad">
                                    서울특별시 구로구 구로중앙로 174 (구로동 589-14번지)
                                </div>
                                <div>
                                    
                                </div>
                                <div class="col-lg-6 mapCover mt0">
                                    <iframe className="rounded shadow d-block mx-lg-auto img-fluid googleMap"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.715525697402!2d126.88006235596498!3d37.50301732243484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e6c37cd41b1%3A0x623b282305b2c863!2z6rWs66Gc7Jet!5e0!3m2!1sko!2skr!4v1663726334814!5m2!1sko!2skr"
                                    width={650}
                                    height={450}
                                    ></iframe>
                                </div>
                                <div className="addInfo">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Parallax>
            </>
        );
    }
}

export default Find;
