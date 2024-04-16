import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import PostForm from './PostForm';

function Header() {
  return (
    <nav>
      <div className="container nav-container">
        <Link className="nav-logo" to="/">
          <h3>Tell <span>Me About </span>It</h3>
        </Link>

        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/postForm" >Create New Post</Link></li>
          <li><Link to="/bookList">Latest Books</Link></li>
        </ul>

        <button className="nav-toggle-button">
          <FaBars />
          <IoClose />
        </button>
      </div>
    </nav>
  );
}

export default Header;
