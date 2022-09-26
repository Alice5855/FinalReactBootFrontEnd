import React, { Component } from "react";
import SpaceFiller from "../../SpaceFiller";
import Sidebar from "./Sidebar";
import { Background, Parallax } from "react-parallax";
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
                    <div className="w-100 h-100" id="faq-background">

                        <div className="container col-xxl-8 px-4 py-5">
                        {/* accordion Start */}
                        <div class="accordion" id="accordionExample ">
                        {/* First item Start */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFirst">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFirst" aria-controls="collapseFirst">
                                AniBucket은 어떤 곳인가요?
                            </button>
                            </h2>
                            <div id="collapseFirst" class="accordion-collapse collapse show" aria-labelledby="headingFirst" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>AniBucket</strong> 은 SubCulture 관련 굿즈와 각종 이벤트 상품들을 온 / 오프라인에서 공급하여 여러 소비자들에게 보다 쉽게
                                제공할 수 있는 서비스입니다. <br/>
                                <br/>
                                현재 <strong>AniPlus, Hololive, NIJISANJI, VShojo, MARVEL</strong> 등 여러 코믹스 및 각종 매체와 협력관계로 다양한 상품들을 보일 수 있는 시스템을 통해
                                여러분들께 다가갈 수 있는 서비스가 되도록 하겠습니다.

                            </div>
                            </div>
                        </div>
                        {/* First item End */}

                        {/* Middle item Start */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                오프라인몰은 어디에 있나요?
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                현 페이지의 <Link to={"/FIND"}>FIND</Link> 페이지 또는 안드로이드 애플리케이션을 확인해주세요.
                                <ul>
                                    <li> <Link to={"/FIND"}> FIND 페이지 바로가기 </Link> </li>
                                    <li> <a href="#"> 구글 플레이스토어 바로가기 </a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        {/* Middle item End */}

                        {/* Middle item Start */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                온라인 쇼핑몰은 어디있나요?
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                온라인 쇼핑몰 사이트의 링크는 <a href="#">여기</a>를 클릭해주세요.
                                <br/>
                                쇼핑몰과 커뮤니티의 회원 정보는 공유되기 때문에 한 곳에서 회원가입해도 모든 서비스를 이용할 수 있습니다.
                            </div>
                            </div>
                        </div>
                        {/* Middle item End */}

                        {/* Middle item Start */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                환불은 어떻게 신청하나요?
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                환불 관련은 aniBucket@aniJJang.com 또는 02) 0000 - 0000 를 통해 문의주시기 바랍니다.
                                <br/>
                                상담 시간) 09:00 - 18:00
                                
                            </div>
                            </div>
                        </div>
                        {/* Middle item End */}

                        {/* Middle item Start */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                쇼핑몰의 채팅 화면은 뭔가요?
                            </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>실시간</strong>으로 Anibucket의 상담사와 1:1로 상담을 진행할 수 있는 화면입니다. <br/>
                                문의 내용을 작성하여 보내주시면 상담사가 확인 후 답변드릴 수 있는 시스템입니다.
                            </div>
                            </div>
                        </div>
                        {/* Middle item End */}

                        {/* Middle item Start */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                최신 상품들의 정보는 어디서 볼 수 있나요?
                            </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                최신 상품의 구매정보는 <a href="#">쇼핑몰</a>에서 확인할 수 있습니다. <br/>
                                현재 웹사이트의 <Link to={"/Notice"}>공지사항</Link> 페이지에서도 확인 가능하니 많은 이용 부탁드립니다.
                            </div>
                            </div>
                        </div>
                        {/* Middle item End */}

                        {/* Middle item Start */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSix">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                QnA 게시판에서 답변이 달린걸 어떻게 확인할 수 있나요?
                            </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <Link to={"/QnA"}>QnA게시판</Link>의 우측 끝에 "답변 완료"를 확인하시면 됩니다.
                                </div>
                            </div>
                        </div>
                        {/* Middle item End */}

                        {/* Middle item Start */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSeven">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                광고 관련 문의는 어디로 신청하면 되나요?
                            </button>
                            </h2>
                            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                광고 및 협업 관련 문의는 aniBucket@aniJJang.com 또는 02) 0000 - 0000 를 통해 문의주시기 바랍니다.
                                <br/>
                                상담 시간) 09:00 - 18:00
                            </div>
                            </div>
                        </div>
                        {/* Middle item End */}


                        {/* Final item Start */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFinal">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFinal" aria-expanded="false" aria-controls="collapseFinal">
                                집에 가고싶어요
                            </button>
                            </h2>
                            <div id="collapseFinal" class="accordion-collapse collapse" aria-labelledby="headingFinal" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>저도요</strong>
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