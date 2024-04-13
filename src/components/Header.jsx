import { Link } from "react-router-dom"
// import react icon
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Header() {
    return(
        <nav>
            <div className="container nav-contianer">
                <Link className="nav-logo" to={'/'}>
                    <h3>Margarita <span>In Tech</span></h3>
                </Link>

                <ul className="nav-menu">
                    <li><Link to={"/create"}>Create Post</Link></li>
                    <li><Link to={"/bookList"}>Latest Books</Link></li>
                    <li><Link to={"/authors"}>Authors</Link></li>
                </ul>

                <button className="nav-toggle-button btn .btn-category">
                <FaBars />
                <IoClose />
                </button>
            </div>
        </nav>
    )
}

export default Header