import {Link} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <header className="nav-bar mx-0">
            <h1 className='text-primary text-center bg-white p-3 m-0'>Random Quote Manager</h1>
            <nav className="bg-dark text-center">
                <Link className="link text-white bg-dark fs-3 mx-3" to="/">
                    Home
                </Link>
                <Link className="link text-white bg-dark fs-3 mx-3" to="/quotes">
                    Quotes
                </Link>
                <Link className="link text-white bg-dark fs-3 mx-3" to="/add-quote">
                    Add Quote
                </Link>
            </nav>
        </header>
    )
}

export default Header