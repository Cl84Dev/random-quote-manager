import "./Quotes.css"
import {Link} from "react-router-dom";

const Quotes = () => {
    return (
        <div className="quotes">
            <div className="d-flex flex-column align-items-center">
                <h2 className="my-3">Search Quotes</h2>
                <Link to="/all-quotes">
                    <button className="btn btn-primary my-3">Show All Quotes</button>
                </Link>
                <Link to="/by-quote">
                    <button className="btn btn-primary my-3">Search By Quote</button>
                </Link>
                <Link to="/by-author">
                    <button className="btn btn-primary my-3">Search By Author</button>
                </Link>
            </div>

        </div>
    )
}

export default Quotes