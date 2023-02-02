import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from "./routes/Home.jsx";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import ShowQuotes from "./routes/ShowQuotes.jsx";
import AddQuote from "./routes/AddQuote.jsx";
import Quote from "./routes/Quote.jsx";
import Quotes from "./routes/Quotes.jsx";
import ByQuote from "./routes/ByQuote.jsx";
import ByAuthor from "./routes/ByAuthor.jsx";

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
                element: <ByQuote/>
            },
            {
                path: '/by-author',
                element: <ByAuthor/>
            },
            {
                path: '/add-quote',
                element: <AddQuote/>
            },
            {
                path: '/quote/:id',
                element: <Quote/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
