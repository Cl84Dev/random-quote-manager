import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from "./routes/Home.jsx";
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import ShowQuotes from "./routes/ShowQuotes.jsx";
import AddQuote from "./routes/AddQuote.jsx";
import QuoteActions from "./routes/QuoteActions.jsx";
import Quotes from "./routes/Quotes.jsx";
import SearchByQuote from "./routes/SearchByQuote.jsx";
import SearchByAuthor from "./routes/SearchByAuthor.jsx";

const router = createHashRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/quotes',
                element: <Quotes/>
            },
            {
                path: '/all-quotes',
                element: <ShowQuotes/>
            },
            {
                path: '/by-quote',
                element: <SearchByQuote/>
            },
            {
                path: '/by-author',
                element: <SearchByAuthor/>
            },
            {
                path: '/add-quote',
                element: <AddQuote/>
            },
            {
                path: '/quote/:id',
                element: <QuoteActions/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
