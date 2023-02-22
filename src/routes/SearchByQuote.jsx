import "./ByQuote.css";
import { useState } from "react";
import axios from "axios";
import SingleQuote from "../components/SingleQuote.jsx";

const SearchByQuote = () => {
  const [search, setSearch] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [noSearching, setNoSearching] = useState(true);

  const handleSearch = () => {
    if (!search) {
      return;
    }

    axios
      .get(
        `https://random-quote-back-end-production.up.railway.app/quote/quote/${search}`
      )
      .catch((err) => console.log(err))
      .then((res) => {
        setQuotes(res.data);
      });

    setNoSearching(false);
  };

  return (
    <article className="by-quote d-flex flex-column align-items-center p-3 m-3 rounded-2">
      <h2 className="my-3">Search By Quote</h2>
      <label>
        <span className="fw-bold">Enter Quote Words:</span>
        <input
          className="form-control"
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <button className="btn btn-primary my-3" onClick={handleSearch}>
        Search
      </button>

      {quotes.length > 0 && (
        <p>
          Showing <span className="fw-bold">{quotes.length}</span>{" "}
          {quotes.length === 1 ? "quote" : "quotes"}:
        </p>
      )}

      {quotes.length === 0 && !noSearching && (
        <div>No quote matches to your search.</div>
      )}

      {quotes &&
        quotes.map((quote) => <SingleQuote key={quote._id} quote={quote} />)}
    </article>
  );
};

export default SearchByQuote;
