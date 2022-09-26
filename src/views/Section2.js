const Section2 = () => {
    return(
        <>
        {/* image Grid */}
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Boards</h2>
                    <h3 className="section-subheading text-muted">게시판</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/*item 1*/}
                        <div className="portfolio-item">
                            <a className="portfolio-link" href="/Notice">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i class="bi bi-plus-lg fs-1"></i></div>
                                </div>
                                <div className="m-auto" style={{width: '65.8%'}}>
                                    {/* <img className="img-fluid" src="images/Note.png" alt="Notice" /> */}
                                    <img className="img-fluid" src="images/testboardimagen.webp" alt="Notice" />
                                </div>
                            </a>
                            <div className="portfolio-caption font2">
                                <div className="portfolio-caption-heading">Notice</div>
                                <div className="portfolio-caption-subheading text-muted mb-2">공지사항</div>
                                <em className="text-muted" style={{fontSize: '0.5rem'}}>Art by <a className="text-muted text-decoration-none" href="https://twitter.com/walfieee" target={'_blank'} rel="noreferrer">Walfie</a></em>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/*item 2*/}
                        <div className="portfolio-item">
                            <a className="portfolio-link" href="/Community">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i class="bi bi-plus-lg fs-1"></i></div>
                                </div>
                                <div>
                                    {/* <img className="img-fluid" src="images/Commu.png" alt="Community" /> */}
                                    <img className="img-fluid" src="images/testboardimagec.webp" alt="Community" />
                                </div>
                            </a>
                            <div className="portfolio-caption font2">
                                <div className="portfolio-caption-heading">Community</div>
                                <div className="portfolio-caption-subheading text-muted mb-2">자유게시판</div>
                                <em className="text-muted" style={{fontSize: '0.5rem'}}>Art by <a className="text-muted text-decoration-none" href="https://twitter.com/walfieee" target={'_blank'} rel="noreferrer">Walfie</a></em>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        {/*item 3*/}
                        <div className="portfolio-item">
                            <a className="portfolio-link" href="/QnA">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i class="bi bi-plus-lg fs-1"></i></div>
                                </div>
                                <div className="m-auto" style={{width: '84.8%'}}>
                                {/* <img className="img-fluid" src="images/qna.png" alt="Q&A" /> */}
                                    <img className="img-fluid my-auto" src="images/testboardimageq.webp" alt="Q&A" />
                                </div>
                            </a>
                            <div className="portfolio-caption font2">
                                <div className="portfolio-caption-heading">Q&A</div>
                                <div className="portfolio-caption-subheading text-muted mb-2">Q&A게시판</div>
                                <em className="text-muted" style={{fontSize: '0.5rem'}}>Art by <a className="text-muted text-decoration-none" href="https://twitter.com/walfieee" target={'_blank'} rel="noreferrer">Walfie</a></em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Section2;
