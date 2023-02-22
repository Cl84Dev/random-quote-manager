import {useEffect, useState} from "react";
import axios from "axios";

export const useAxiosGet = (param) => {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        axios.get(param ? `https://random-quote-back-end-production.up.railway.app/quote/${param}` : `https://my-json-server.typicode.com/Cl84Dev/random-quote-db/quotes`)
            .catch(err => console.log(err))
            .then(res => setQuotes(res.data))
    }, [])

    return [quotes]
}