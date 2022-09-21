import React, { Component, useEffect } from "react";
import { Button, Card } from "reactstrap";
import "./Find.css";
import Sidebar from "./Sidebar";


class Find extends Component{
    render(){

        return(
                <>
            <div id="spaceFiller"></div>
            <div className="d-flex flex-nowrap">
                <Sidebar />
                <div>
                    <div className="mx-4 my-5">
                        <h1 className="abtTitle" style={{color: '#50A0F4'}}>
                            <img src="http://localhost:3000/images/Justlogo.png" alt="Logo" width={'50px'} style={{display: 'inline'}} />
                            Virtual Agency
                        </h1>
                    </div>
                    <div className="divider" />
                    <div>
                        <div class="container col-xxl-8 px-4 py-5">
                            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div class="col-10 col-sm-8 col-lg-6">
                                    <img src="http://localhost:3000/images/bak1.jpg" className="rounded shadow d-block mx-lg-auto img-fluid" alt="Introduce" width="700" height="500" loading="lazy" />
                                </div>
                                <div class="col-lg-6">
                                    <h1 class="display-5 fw-bold lh-1 mb-3">Make, Believe </h1>
                                    <p class="lead">
                                        Virtual Agency는 국경과 세대를 넘어 많은 이에게 사랑 받는 2차원 엔터테인먼트를, Provider와 Consumer를 이어주는 연결다리가 되어 더욱 많은 이들에게 꿈꾸었던, 바랐던 것들을 이룰 수 있도록 조력하는 것을 목표로 하고 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider" />
                    <div>
                        <div class="container col-xxl-8 px-4 py-5">
                            <div class="row flex-lg-row align-items-center g-5 py-5">
                                <div class="col-lg-6">
                                    <iframe className="rounded shadow d-block mx-lg-auto img-fluid"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.715525697402!2d126.88006235596498!3d37.50301732243484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e6c37cd41b1%3A0x623b282305b2c863!2z6rWs66Gc7Jet!5e0!3m2!1sko!2skr!4v1663726334814!5m2!1sko!2skr"
                                    width={650}
                                    height={450}
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider" />
                    <div>
                        <div class="container col-xxl-8 px-4 py-5">
                            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div class="col-10 col-sm-8 col-lg-6">
                                    <img src="http://localhost:3000/images/bak3.jpg" className="rounded shadow d-block mx-lg-auto img-fluid" alt="Introduce" width="800" height="600" loading="lazy" />
                                </div>
                                <div class="col-lg-6">
                                    <h1 class="display-5 fw-bold lh-1 mb-3">Faster Than Second</h1>
                                    <p class="lead">
                                        Virtual Agency는 Creater와 Viewer를 잇는 다리로서 더 많은 사람들에게 더욱 쉽게 접근 할 수 있는 초단위보다 빠른, 밀리초 단위의 속도를 가진 인터넷을 매개로 선택하였습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider" />
                </div>
            </div>
            </>
        );
    }
}

export default Find;
