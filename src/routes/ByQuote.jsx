import "./ByQuote.css"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const ByQuote = () => {
    const [search, setSearch] = useState('')
    const [quotes, setQuotes] = useState([])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        if (!quotes.length && search) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }, [quotes])

    const handleSearch = () => {
        if (!search) {
            alert('You must to enter a quote word to search!')
            return
        }

        axios.get(`https://random-quote-back-end-production.up.railway.app/quote/quotation/${search}`)
            .catch(err => console.log(err))
            .then(res => {
                setQuotes(res.data)
            })
    }

    return (
        <div className="by-quote">
            <div className="d-flex flex-column align-items-center">
                <h2 className="my-3">Search By Quote</h2>
                <label><span className="fw-bold">Enter Quote Words:</span><input className="form-control"
                                                                                 onChange={(e) => setSearch(e.target.value)}/></label>
                <button className="btn btn-primary my-3" onClick={handleSearch}>Search</button>

                {toggle && <div>No quote matches to your search.</div>}

                {quotes && quotes.map(quote => (
                    <div key={quote._id}
                         className="quote border rounded shadow-lg m-3 p-3 d-flex flex-column align-items-center text-center">
                        <p>{quote.quotation}</p>
                        <p>{quote.author}</p>
                        <Link className="btn btn-primary" to={`/quote/${quote._id}`}>
                            See Quote Actions
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ByQuote