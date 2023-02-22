import './ShowQuotes.css'
import {useAxiosGet} from "../../hooks/useAxiosGet.jsx";
import SingleQuote from "../components/SingleQuote.jsx";

const ShowQuotes = () => {
    const [quotes] = useAxiosGet()

    return (
        <article className="quotes d-flex flex-column align-items-center m-3 p-3 rounded-2">
            <h2 className="text-center my-3">Quotes</h2>
            {quotes.length > 0 && <p>Showing <span
                className="fw-bold">{quotes.length}</span> {quotes.length === 1 ? 'quote' : 'quotes'}:</p>}
            {quotes.map(quote => <SingleQuote key={quote._id} quote={quote}/>)}
        </article>
    )
}

export default ShowQuotes