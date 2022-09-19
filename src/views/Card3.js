import React from "react";

const Card3 = () => {
    return(
            <div className="px-3 py-5 my-5 text-center rounded-5" style={{backgroundColor: "#50A0F4"}}>
                <h1 className="display-5 fw-bold">Memorial</h1>
                <div className="col-lg-12 mx-auto">
                    <p className="my-5">
                        <a href="https://www.youtube.com/c/ksonONAIR" target={'_blank'} className="secretLink" rel="noreferrer">
                            <span className="secretLink" style={{display: 'inline-block', width: '40px', height: '40px'}} />
                        </a>
                            <img src="http://localhost:3000/images/Logo8.png" className="img-fluid logoImg" alt="friendC" width="20%"/>
                        <span className="me-5 filler"></span>
                        <a href="https://www.youtube.com/channel/UCx6h43OXFM7OuER4iJqWaSg" target={'_blank'} className="secretLink" rel="noreferrer">
                            <span className="secretLink" style={{display: 'inline-block', width: '40px', height: '40px'}} />
                        </a>
                            <img src="http://localhost:3000/images/Logo9.png" className="img-fluid logoImg" alt="friendS" width="20%"/>
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <p className="lead mb-4">
                            Thank you for the memories Legendary Dragon & Beeg Sana!
                        </p>
                    </div>
                </div>
            </div>
    )
    
}
export default Card3;