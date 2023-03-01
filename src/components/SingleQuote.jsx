import "./SingleQuote.css";
import { Link } from "react-router-dom";

const SingleQuote = ({ quote }) => {
  return (
    <section className="single-quote border rounded shadow-lg m-3 p-3 d-flex flex-column align-items-center text-center">
      <p>{quote.quote}</p>
      <p>{quote.author}</p>
      <Link className="btn btn-primary" to={`/quote/${quote._id}`}>
        See Quote Actions
      </Link>
    </section>
  );
};

export default SingleQuote;
