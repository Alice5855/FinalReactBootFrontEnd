import React, { Component } from "react";

class Footer extends Component {
    render(){
        return(
            <>
                <div className="container-fluid mt-5" style={{}}>
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex align-items-center ms-4">
                            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                <img src="http://localhost:3000/images/Justlogo.png" alt="logo" width='45px'/>
                            </a>
                            <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Virtual Agency, Inc</span>
                        </div>

                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-5 snsLinks">
                            <li className="linkIcon">
                                <a className="text-muted" href="https://www.reddit.com/r/Hololive/" target={'_blank'} rel="noreferrer">
                                    <img src="http://localhost:3000/images/rd_icon.svg" alt="Hololive reddit" width="35"/>
                                </a>
                            </li>
                            <li className="linkIcon" style={{marginLeft: '5%'}}>
                                <a className="text-muted" href="https://twitter.com/hololive_en" target={'_blank'} rel="noreferrer">
                                    <img src="http://localhost:3000/images/tw_icon.svg" alt="Hololive twitter" width="35"/>
                                </a>
                            </li>
                            <li className="linkIcon" style={{marginLeft: '5%'}}>
                                <a className="text-muted" href="https://www.youtube.com/channel/UCJFZiqLMntJufDCHc6bQixg" target={'_blank'} rel="noreferrer">
                                    <img src="http://localhost:3000/images/yt_icon.svg" alt="Hololive youtube" width="35"/>
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </>
        )
    }
}
export default Footer;