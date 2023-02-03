import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import './AddQuote.css'

const AddQuote = () => {
    const [quotation, setQuotation] = useState('')
    const [author, setAuthor] = useState('')
    const [show, setShow] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const handleClose = () => {
        setShow(false)
        return navigate("/quotes")
    };
    const handleShow = () => setShow(true)

    const handleCloseAlert = () => {
        setShowAlert(false)
    };
    const handleShowAlert = () => setShowAlert(true)

    const navigate = useNavigate()

    const sendQuote = () => {
        const data = {
            quotation,
            author,
        }

        if (!quotation || !author) {
            handleShowAlert()
            //alert("Quotation and author are mandatory fields!")
            return
        }

        axios.post('https://random-quote-back-end-production.up.railway.app/quote', data)
            .catch(err => console.log(err))
            .then(res => console.log(res))

        handleShow()
        //return navigate("/quotes")

    }

    return (
        <div className="add-quote d-flex flex-column mx-auto">
            <div className="border d-flex flex-column align-items-center rounded shadow-lg mx-3">
                <h2 className="my-3">Add Quote</h2>
                <label><span className="fw-bold">Quote:</span> <textarea className="form-control"
                                                                         onChange={e => setQuotation(e.target.value)}></textarea></label>
                <label><span className="fw-bold">Author:</span> <input className="form-control"
                                                                       onChange={e => setAuthor(e.target.value)}/></label>
                <button className="btn btn-primary my-3" onClick={sendQuote}>Add Quote</button>
            </div>
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Quote</Modal.Title>
                </Modal.Header>
                <Modal.Body>Quote added successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal centered show={showAlert} onHide={handleCloseAlert}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Quote</Modal.Title>
                </Modal.Header>
                <Modal.Body>Quotation and author are mandatory fields!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAlert}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddQuote