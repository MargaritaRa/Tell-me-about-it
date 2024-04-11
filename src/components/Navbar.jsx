import { Link } from 'react-router-dom'

function Navbar(){

    return(
        <div id="navbar">
            <Link to="/">Home</Link>
            <br/>
            <Link to="/about">About</Link>
            <br/>
            <Link to='about/portfolio'> About: Portfolio</Link>
            <br/>
            <Link to='about/bio'> About: Bio</Link>
            <br/>
            <Link to='/contact'>Contact</Link>

        </div>
    )
}

export default Navbar