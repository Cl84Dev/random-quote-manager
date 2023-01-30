import {Link} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="nav-bar mx-0">
            <h1 className='text-primary text-center bg-white p-3 m-0'>Random Quote Manager</h1>
            <nav className="bg-dark text-center">
                <Link className="link text-white fs-3 mx-3" to="/random-quote-manager/">
                    Home
                </Link>
                <Link className="link text-white fs-3 mx-3" to="/random-quote-manager/quotes">
                    Quotes
                </Link>
                <Link className="link text-white fs-3 mx-3" to="/random-quote-manager/add-quote">
                    Add Quote
                </Link>
            </nav>
        </div>
    )
}

export default NavBar