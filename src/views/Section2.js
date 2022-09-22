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
                                <img className="img-fluid" src="images/Note.png" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Notice</div>
                                <div className="portfolio-caption-subheading text-muted">공지사항</div>
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
                                <img className="img-fluid" src="images/Commu.png" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Community</div>
                                <div className="portfolio-caption-subheading text-muted">자유게시판</div>
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
                                <img className="img-fluid" src="images/qna.png" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Q&A</div>
                                <div className="portfolio-caption-subheading text-muted">Q&A게시판</div>
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
