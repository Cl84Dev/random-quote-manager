import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './AddQuote.css'

const AddQuote = () => {
    const [quotation, setQuotation] = useState('')
    const [author, setAuthor] = useState('')

    const navigate = useNavigate()

    const sendQuote = () => {
        const data = {
            quotation,
            author,
        }

        if (!quotation || !author) {
            alert("Quotation and author are mandatory fields!")
            return
        }

        axios.post('https://random-quote-back-end-production.up.railway.app/quote', data)
            .catch(err => console.log(err))
            .then(res => console.log(res))

        return navigate("/random-quote-manager/quotes")
    }

    return (
        <div className="add-quote d-flex flex-column mx-auto">
            <div className="border d-flex flex-column align-items-center rounded shadow-lg mx-3">
                <h2 className="my-3">Add Quote</h2>
                <label><span className="fw-bold">Quote:</span> <textarea className="form-control"
                                                                         onChange={e => setQuotation(e.target.value)}></textarea></label>
                <label><span className="fw-bold">Author:</span> <input className="form-control"
                                                                       onChange={e => setAuthor(e.target.value)}/></label>
                <button className="btn btn-primary my-3" onClick={sendQuote}>Add</button>
            </div>
        </div>
    )
}

export default AddQuote