import React, { Component } from "react";
import SpaceFiller from "../../SpaceFiller";
import Sidebar from "./Sidebar";
import "./About.css";

class About extends Component {
    render(){
        return(
            <>
            <SpaceFiller/>
            <div className="flex-nowrap subpage text-white kfont2">
                <Sidebar />
                <div className="w-100">

                    <div className="mx-4 my-5">
                        <img className="me-3 card bg-dark p-2" src="http://localhost:3000/images/testlogo3.png" alt="Logo" style={{display: 'inline', width: '7rem'}} />
                        <img className="card bg-light p-2" src="http://localhost:3000/images/testlogo2.png" alt="Logo" style={{display: 'inline', width: '4.1rem'}} />
                        <p className="display-5 scolor1 font1 mt-3">
                            <span className="abtTitle">
                                Alternative Society / AniBucket
                            </span>
                        </p>
                    </div>
                    <div>
                        <div className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div className="col-10 col-sm-8 col-lg-6">
                                    <img src="http://localhost:3000/images/Commu.png" className="rounded shadow d-block mx-lg-auto img-fluid" alt="Introduce" loading="lazy" />
                                </div>
                                <div className="col-lg-6">
                                    <p className="display-6 fw-bold lh-1 mb-3 font1">Alternative Society</p>
                                    <p className="lead font2">
                                        We claim it is not <span className="fst-italic">'Sub Culture'</span> , it is <span className="fw-bold">'Alternative Society'</span>.
                                    </p>
                                    <p className="lead kfont2">
                                        Alternative Society는 <span className="fst-italic">'하위 문화'</span> 가 아닌, <span className="fw-bold">'또 다른 사회'</span> 를 꿈꿉니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="container col-xxl-8 px-4 py-5">
                            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div class="col-lg-6">
                                    <p class="display-6 fw-bold lh-1 mb-3 font2">Rise of Metaverse</p>
                                    <p class="lead font3">
                                        We are preparing <em>Meta-Society</em> for Metaverse era
                                    </p>
                                    <p class="lead kfont3">
                                        Alternative Society에서는 Metaverse 시대의 개막에 맞춰 <em>메타-사회</em> 구축을 준비중에 있습니다.
                                    </p>
                                </div>
                                <div class="col-10 col-sm-8 col-lg-6">
                                    <img src="http://localhost:3000/images/about2.png" className="rounded shadow d-block mx-lg-auto img-fluid" alt="Introduce" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="container col-xxl-8 px-4 py-5">
                            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div class="col-10 col-sm-8 col-lg-6">
                                    <img src="http://localhost:3000/images/qna.png" className="rounded shadow d-block mx-lg-auto img-fluid" alt="Introduce" loading="lazy" />
                                </div>
                                <div class="col-lg-6">
                                    <p class="display-6 fw-bold lh-1 mb-3 font3">AniBucket</p>
                                    <p class="lead font4">
                                        Offline / Online shop of Alternative Society
                                    </p>
                                    <p class="lead kfont4">
                                        AniBucket은 Alternative Society의 오프라인 / 온라인 매장입니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </>
        )
    }
}
export default About;