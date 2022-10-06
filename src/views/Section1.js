const Section1 = () => {
    return(
        <>
            {/*Services*/}
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Alternative Society</h2>
                        <h3 className="section-subheading text-muted">Alternative Society는 <span className="fst-italic">'하위 문화'</span> 가 아닌, <span className="fw-bold">'또 다른 사회'</span> 를 꿈꿉니다.</h3>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <i className="bi bi-wechat display-1 scolor2"></i>
                            <h4 className="my-3">Alternative Society</h4>
                            <p className="text-muted">Beyond Subculture</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-headset-vr display-1 scolor2"></i>
                            <h4 className="my-3">Rise of Metaverse</h4>
                            <p className="text-muted">Meta-Society</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-bucket-fill display-1 scolor2"></i>
                            <h4 className="my-3">Anibucket</h4>
                            <p className="text-muted">Online/Offline shop</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section1