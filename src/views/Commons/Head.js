const Head = () => {
    return(
        <>
            {/* masthead */}
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">Welcome To Alternative Society</div>
                    <div className="masthead-heading text-uppercase">Where minor is new major</div>
                    <a className="btn btn-warning text-white btn-lg text-uppercase" href="/About" style={{borderRadius: '0'}}>About us</a>
                </div>
            </header>
        </>
    )
}
export default Head;