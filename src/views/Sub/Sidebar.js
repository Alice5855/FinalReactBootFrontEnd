import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
        <>
            <div className="flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "15%"}}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Sidebar</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-white">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link text-white">
                        Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link text-white">
                        Orders
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link text-white">
                        Products
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link text-white">
                        Customers
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar;