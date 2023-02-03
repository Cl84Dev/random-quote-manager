import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import axios from "axios";
import './Quote.css'

const Quote = () => {

    const {id} = useParams()

    const navigate = useNavigate()

    const [quote, setQuote] = useState({})
    const [quotation, setQuotation] = useState('')
    const [author, setAuthor] = useState('')
    const [toggle, setToggle] = useState(false)
    const [show, setShow] = useState(false)
    const [showEdit, setShowEdit] = useState(false)


    const handleClose = () => {
        setShow(false)
        return navigate("/quotes")
    };
    const handleShow = () => setShow(true)

    const handleCloseEdit = () => {
        setShowEdit(false)
        return navigate("/quotes")
    };
    const handleShowEdit = () => setShowEdit(true)

    useEffect(() => {
        axios
            .get(`https://random-quote-back-end-production.up.railway.app/quote/${id}`)
            .catch((err) => console.log(err))
            .then((res) => setQuote(res.data));
    }, [])

    const editQuote = () => {
        const data = {
            quotation: quotation ? quotation : quote.quotation,
            author: author ? author : quote.author
        };

        axios
            .patch(`https://random-quote-back-end-production.up.railway.app/quote/${id}`, data)
            .catch((err) => console.log(err.response.data))
            .then((res) => console.log(res));

        handleShowEdit()
    };

    const deleteQuote = () => {
        axios
            .delete(`https://random-quote-back-end-production.up.railway.app/quote/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.response.data));

        handleShow()
    };
    return (
        <div className="quote d-flex flex-column align-items-center px-3 mx-auto">
            <h2 className="my-3">Quote</h2>
            <p className="text-center"><span className="fw-bold">Quote:</span> {quote.quotation}</p>
            <p className="text-center"><span className="fw-bold">Author:</span> {quote.author}</p>
            <div className="buttons d-flex justify-content-evenly">
                {!toggle && (
                    <button
                        className="btn btn-secondary mx-3"
                        onClick={() => setToggle(!toggle)}
                    >
                        Edit Quote
                    </button>
                )}
                {!toggle && (
                    <button className="btn btn-danger mx-3" onClick={deleteQuote}>
                        Delete Quote
                    </button>
                )}
                {toggle && (
                    <div className="d-flex flex-column border rounded shadow-lg p-3 align-items-center">
                        <label><span className="fw-bold">Quote:</span> <textarea className="form-control"
                                                                                 defaultValue={quote.quotation}
                                                                                 onChange={e => setQuotation(e.target.value)}></textarea></label>
                        <label><span className="fw-bold">Author:</span> <input className="form-control"
                                                                               defaultValue={quote.author}
                                                                               onChange={e => setAuthor(e.target.value)}/></label>
                        <div className="buttons d-flex justify-content-between my-3">
                            <button className="btn btn-primary mx-3" onClick={editQuote}>
                                Save Edit
                            </button>
                            <button
                                className="btn btn-danger mx-3"
                                onClick={() => setToggle(!toggle)}
                            >
                                Cancel Edit
                            </button>
                        </div>
                        <Modal centered show={showEdit} onHide={handleCloseEdit}>
                            <Modal.Header closeButton>
                                <Modal.Title>Edit Quote</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Quote edited successfully!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseEdit}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                )}
                <Modal centered show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Quote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Quote deleted successfully!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Quote