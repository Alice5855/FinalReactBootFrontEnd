import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
        <>
            <div className="flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "15%"}}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Home</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/About">
                        About
                        </a>
                    </li>
                    <li>
                        <a className="nav-link text-white" href="/Find">
                        Find
                        </a>
                    </li>
                    <li>
                        <a className="nav-link text-white" href="/FAQ">
                        FAQ
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar;