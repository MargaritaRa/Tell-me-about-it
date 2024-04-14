import { Link } from "react-router-dom"
// import react icon
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Posts from "./Posts";

function Header() {
    return(
        <nav>
            <div className="container nav-contianer">
                <Link className="nav-logo" to={'/'}>
                    <h3>Margarita <span>In </span>Tech</h3>
                </Link>

                <ul className="nav-menu">
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/create"}>Create New Post</Link></li>
                    <li><Link to={"/bookList"}>Latest Books</Link></li>
                </ul>

                <button className="nav-toggle-button">
                <FaBars />
                <IoClose />
                </button>
            </div>
        </nav>
    )
}

export default Header