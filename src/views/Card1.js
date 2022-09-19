import React from "react";

const Card1 = () => {
    return(
            <div className="px-3 py-5 my-5 text-center rounded-5" style={{backgroundColor: "#5EDDEE"}}>
                <h1 className="display-5 fw-bold">Meet us at Aniplus!</h1>
                <div className="col-lg-12 mx-auto">
                    <p className="my-5">
                        <a href="https://www.aniplustv.com/storeCollaboCafe" target={'_blank'} className="cBanner" rel="noreferrer">
                            <img src="http://localhost:3000/images/banner0.jpg" alt="aniplus banner" width="70%"/>
                        </a>
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <p className="lead mb-4">
                            2022/09/22까지 Aniplus에서 Holo Myth와 만나실 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>
    )
    
}
export default Card1;