import { useEffect, useState } from "react";
import axios from "axios";

export const useAxiosGet = (param) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get(
        param
          ? `https://random-quote-back-end-production.up.railway.app/quote/${param}`
          : `https://random-quote-back-end-production.up.railway.app/quote`
      )
      .catch((err) => console.log(err))
      .then((res) => setQuotes(res.data));
  }, []);

  return [quotes];
};
