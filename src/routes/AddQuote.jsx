import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './AddQuote.css'

const AddQuote = () => {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    const navigate = useNavigate()

    const sendQuote = () => {
        const data = {
            quotation: quote,
            author,
        }

        if (!quote || !author) {
            return
        }

        axios.post('https://random-quote-back-end-production.up.railway.app/quote', data)
            .catch(err => console.log(err))
            .then(res => console.log(res))

        return navigate("/quotes")
    }

    return (
        <article className="add-quote d-flex flex-column align-items-center rounded-2 shadow-lg m-3 p-3">
            <h2 className="my-3">Add Quote</h2>
            <label><span className="fw-bold">Quote:</span> <textarea className="form-control"
                                                                     onChange={e => setQuote(e.target.value)}></textarea></label>
            <label><span className="fw-bold">Author:</span> <input className="form-control"
                                                                   onChange={e => setAuthor(e.target.value)}/></label>
            <button className="btn btn-primary my-3" onClick={sendQuote}>Add Quote</button>
        </article>
    )
}

export default AddQuote