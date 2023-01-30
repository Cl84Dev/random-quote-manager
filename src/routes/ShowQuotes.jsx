import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import './ShowQuotes.css'

const ShowQuotes = () => {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        axios.get('https://random-quote-back-end-production.up.railway.app/quote')
            .catch(err => console.log(err))
            .then(res => setQuotes(res.data))
    }, [])

    return (
        <div className="quotes d-flex flex-column align-items-center">
            <h2 className="text-center">Quotes</h2>
            {quotes.map(quote => (
                <div key={quote._id}
                     className="quote border rounded shadow-lg m-3 p-3 d-flex flex-column align-items-center text-center">
                    <p>{quote.quotation}</p>
                    <p>{quote.author}</p>
                    <Link className="btn btn-primary" to={`/random-quote-manager/quote/${quote._id}`}>
                        See Quote Actions
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ShowQuotes