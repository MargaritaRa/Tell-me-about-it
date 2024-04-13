import { Link } from "react-router-dom"

function Footer(){
    return(
        <footer>
            <ul className="footer-categories">
                <li><Link to={`/post/categories/Education`}>Education</Link></li>
                <li><Link to={`/post/categories/Entertainment`}>Entertainment</Link></li>
                <li><Link to={`/post/categories/Art`}>Art</Link></li>
                <li><Link to={`/post/categories/Business`}>Business</Link></li>
                <li><Link to={`/post/categories/Fashion`}>Fashion</Link></li>
                <li><Link to={`/post/categories/SelfHelp`}>SelfHelp</Link></li>
                <li><Link to={`/post/categories/Music`}>Music</Link></li>
            </ul>
        </footer>
    )
}

export default Footer