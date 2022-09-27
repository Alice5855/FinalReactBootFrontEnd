import React, { Component } from "react";

class Section3 extends Component {
    render(){
        return(
            <>
            {/* Contact */}
            <section className="page-section kfont2" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-light">궁금하신 점이나 건의하실 점을 메시지로 남겨주세요</h3>
                    </div>
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* Name input */}
                                    <input className="form-control" id="name" type="text" placeholder="Name *" data-sb-validations="required" />
                                    <div className="invalid-feedback" data-sb-feedback="name:required">이름을 입력해주십시오</div>
                                </div>
                                <div className="form-group">
                                    {/* Email address input */}
                                    <input className="form-control" id="email" type="email" placeholder="Email *" data-sb-validations="required,email" />
                                    <div className="invalid-feedback" data-sb-feedback="email:required">Email을 입력해주십시오</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email을 정확히 입력해주십시오</div>
                                </div>
                                <div className="form-group mb-md-0">
                                    {/* Phone number input */}
                                    <input className="form-control" id="phone" type="tel" placeholder="tel *" data-sb-validations="required" />
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">전화번호를 입력해주십시오</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">
                                    {/* Message input */}
                                    <textarea className="form-control" id="message" placeholder="Message *" data-sb-validations="required"></textarea>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">전하실 메시지를 입력해주십시오</div>
                                </div>
                            </div>
                        </div>
                        {/* Submit success message
                            This is what your users will see when the form
                            has successfully submitted */}
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center text-white mb-3">
                                <div className="fw-bolder">소중한 의견이 전달되었습니다</div>
                                감사합니다
                                <br />
                            </div>
                        </div>
                        {/* Submit error message
                            This is what your users will see when there is
                            an error submitting the form */}
                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">메시지 전달에 실패하였습니다</div></div>
                        {/* Submit Button */}
                        <div className="text-center"><button className="btn btn-warning text-white btn-xl text-uppercase disabled" id="submitButton" type="submit">전송</button></div>
                    </form>
                </div>
            </section>
            </>
        )
    }
}
export default Section3;