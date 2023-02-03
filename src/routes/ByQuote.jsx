import "./ByQuote.css"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ByQuote = () => {
    const [search, setSearch] = useState('')
    const [quotes, setQuotes] = useState([])
    const [toggle, setToggle] = useState(false)
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true)

    useEffect(() => {
        if (!quotes.length && search) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }, [quotes])

    const handleSearch = () => {
        if (!search) {
            handleShow()
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

                {quotes.length > 0 && <p>Showing <span
                    className="fw-bold">{quotes.length}</span> {quotes.length === 1 ? 'quote' : 'quotes'}:</p>}

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
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Search By Quote</Modal.Title>
                </Modal.Header>
                <Modal.Body>You must to enter a quote word to search!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ByQuote