import React, { Component } from "react";
import SpaceFiller from "../../SpaceFiller";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import "./FAQ.css";



class FAQ extends Component {
    render(){
        return(
            <>
            <div>
                <SpaceFiller/>
                <div className="d-flex flex-nowrap">
                    <Sidebar/>
                    <div className="w-100 h-100 kfont2" id="faq-background">
                        <div className="container col-xxl-8 px-4 py-5 my-5" id="accordionWrapper">
                        {/* accordion Start */}
                        <div className="accordion m-5" id="accordionExample ">
                            {/* First item Start */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFirst">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFirst" aria-controls="collapseFirst">
                                    AniBucket은 어떤 곳인가요?
                                </button>
                                </h2>
                                <div id="collapseFirst" className="accordion-collapse collapse show" aria-labelledby="headingFirst" data-bs-parent="#accordionExample">
                                <div className="accordion-body bg-light">
                                    <strong>AniBucket</strong> 은 SubCulture 굿즈와 각종 이벤트 상품들을 판매하는 Alternative Society가 제공하는 온 / 오프라인 샵입니다.
                                    <br/>
                                    <br/>
                                    <strong>AniPlus, Hololive, NIJISANJI, VShojo, MARVEL</strong> 등 각종 매체와의 협력관계로 보다 다양한 상품들을 선보이고 있습니다.
                                </div>
                                </div>
                            </div>
                            {/* First item End */}

                            {/* Middle item Start */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    오프라인몰은 어디에 있나요?
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body bg-light">
                                    <Link to={"/FIND"}>FIND</Link> 페이지 또는 안드로이드 애플리케이션에서 오프라인 몰의 위치를 확인하실 수 있습니다.
                                    <br/><br/>
                                    <ul className="list-unstyled">
                                        <li> <Link to={"/FIND"}> FIND 페이지 </Link> </li>
                                        <li> <a href="#"> 구글 플레이스토어 </a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            {/* Middle item End */}

                            {/* Middle item Start */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    온라인 쇼핑몰은 어디있나요?
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body bg-light">
                                    온라인 쇼핑몰 사이트의 링크는 <a href="http://localhost:9005">여기</a>를 클릭해주세요. 페이지 최 하단의 로고를 통해서도 온라인 몰로 이동하실 수 있습니다.
                                    <br/>
                                    쇼핑몰과 커뮤니티의 회원 정보는 공유되기 때문에 한 곳에서 회원가입해도 모든 서비스를 이용할 수 있습니다.
                                </div>
                                </div>
                            </div>
                            {/* Middle item End */}

                            {/* Middle item Start */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    환불은 어떻게 신청하나요?
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body bg-light">
                                    환불 관련은 aniBucket@alternativesociety.com 또는 02&#41; 0000 - 0000 를 통해 문의주시기 바랍니다.
                                    <br/>
                                    상담 시간&#41; 09:00 - 18:00
                                </div>
                                </div>
                            </div>
                            {/* Middle item End */}

                            {/* Middle item Start */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    쇼핑몰의 채팅 화면은 뭔가요?
                                </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body bg-light">
                                    <strong>실시간</strong>으로 Anibucket의 상담사와 1:1로 상담을 진행할 수 있는 화면입니다. <br/>
                                    문의 내용을 작성하여 보내주시면 상담사가 확인 후 답변드릴 수 있는 시스템입니다.
                                </div>
                                </div>
                            </div>
                            {/* Middle item End */}

                            {/* Middle item Start */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    최신 상품들의 정보는 어디서 볼 수 있나요?
                                </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body bg-light">
                                    최신 상품의 구매정보는 <a href="http://localhost:9005">쇼핑몰</a>에서 확인할 수 있습니다. <br/>
                                    현재 웹사이트의 <Link to={"/Notice"}>공지사항</Link> 페이지에서도 확인 가능하니 많은 이용 부탁드립니다.
                                </div>
                                </div>
                            </div>
                            {/* Middle item End */}

                            {/* Middle item Start */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    QnA 게시판에 답변이 달렸는지 확인하고 싶어요.
                                </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-light">
                                        <Link to={"/QnA"}>QnA게시판</Link>의 글 목록에서 우측에 <em>"답변 없음"</em> 이 <em>"답변 완료"</em> 로 바뀌면 답변을 확인하시면 됩니다.
                                    </div>
                                </div>
                            </div>
                            {/* Middle item End */}

                            {/* Middle item Start */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSix">
                                    Alternative Society에서 일 하고 싶어요.
                                </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-light">
                                        recruit@alternativesociety.com로 메일 주시거나 <Link to={"/"}>메인 페이지</Link>의 Contact Us 폼을 통해 지원하실 수 있습니다.
                                    </div>
                                </div>
                            </div>
                            {/* Middle item End */}

                            {/* Final item Start */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFinal">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFinal" aria-expanded="false" aria-controls="collapseSeven">
                                    광고 관련 문의는 어디로 신청하면 되나요?
                                </button>
                                </h2>
                                <div id="collapseFinal" className="accordion-collapse collapse" aria-labelledby="headingFinal" data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-light">
                                        광고 및 협업 문의는 admin@alternativesociety.com 또는 02&#41; 0000 - 0000 를 통해 문의주시기 바랍니다.
                                        <br/>
                                        상담 시간&#41; 09:00 - 18:00
                                    </div>
                                </div>
                            </div>
                            {/* Final item End */}
                        </div>
                        {/* accordion End */}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default FAQ;