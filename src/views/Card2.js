import React from "react";

const Card2 = () => {
    return(
            <div className="px-3 py-5 my-5 text-center rounded-5" style={{backgroundColor: "#25C1FF"}}>
                <h1 className="display-5 fw-bold">Shops</h1>
                <div className="col-lg-12 mx-auto">
                    <p className="my-5">
                        <a href="https://shop.hololivepro.com/en" target={'_blank'} className="cBanner" rel="noreferrer">
                            <img src="http://localhost:3000/images/offshop.jpg" alt="official shop" width="27%"/>
                        </a>
                        <a href="https://shop.geekjack.net/pages/hololive" target={'_blank'} className="cBanner" rel="noreferrer">
                            <img src="http://localhost:3000/images/geekjack.jpg" alt="geekjack" width="30%"/>
                        </a>
                        <a href="https://www.omocat-shop.com/collections/omocat-x-hololive-en" target={'_blank'} className="cBanner" rel="noreferrer">
                            <img src="http://localhost:3000/images/omocat.png" alt="omocat" width="30%"/>
                        </a>
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

                    </div>
                </div>
            </div>
    )
    
}
export default Card2;