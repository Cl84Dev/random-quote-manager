import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./QuoteActions.css";
import { useAxiosGet } from "../../hooks/useAxiosGet.jsx";

const QuoteActions = () => {
  const { id } = useParams();

  const [quotes] = useAxiosGet(id);

  const navigate = useNavigate();

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [toggleButtons, setToggleButtons] = useState(false);

  const editQuote = () => {
    const data = {
      quote: quote ? quote : quotes.quote,
      author: author ? author : quotes.author,
    };

    axios
      .patch(
        `https://random-quote-back-end-production.up.railway.app/quote/${id}`,
        data
      )
      .catch((err) => console.log(err.response.data))
      .then((res) => console.log(res));

    return navigate("/quotes");
  };

  const deleteQuote = () => {
    axios
      .delete(
        `https://random-quote-back-end-production.up.railway.app/quote/${id}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data));

    return navigate("/quotes");
  };
  return (
    <article className="quote d-flex flex-column align-items-center p-3 m-3 rounded-2">
      <h2 className="my-3">Quote</h2>
      <div className="quote-author p-3 m-3 rounded-2">
        <p className="text-center">
          <span className="fw-bold">Quote:</span> {quotes.quote}
        </p>
        <p className="text-center">
          <span className="fw-bold">Author:</span> {quotes.author}
        </p>
      </div>

      <div className="buttons d-flex justify-content-evenly">
        {!toggleButtons && (
          <button
            className="btn btn-secondary mx-3"
            onClick={() => setToggleButtons(!toggleButtons)}
          >
            Edit Quote
          </button>
        )}
        {!toggleButtons && (
          <button className="btn btn-danger mx-3" onClick={deleteQuote}>
            Delete Quote
          </button>
        )}
        {toggleButtons && (
          <div className="edit-quote d-flex flex-column border rounded shadow-lg p-3 align-items-center">
            <label>
              <span className="fw-bold">Quote:</span>{" "}
              <textarea
                className="form-control"
                defaultValue={quotes.quote}
                onChange={(e) => setQuote(e.target.value)}
              ></textarea>
            </label>
            <label>
              <span className="fw-bold">Author:</span>{" "}
              <input
                className="form-control"
                defaultValue={quotes.author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </label>
            <div className="buttons d-flex justify-content-between my-3">
              <button className="btn btn-primary mx-3" onClick={editQuote}>
                Save Edit
              </button>
              <button
                className="btn btn-danger mx-3"
                onClick={() => setToggleButtons(!toggleButtons)}
              >
                Cancel Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default QuoteActions;
