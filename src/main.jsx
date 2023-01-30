import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from "./routes/Home.jsx";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ShowQuotes from "./routes/ShowQuotes.jsx";
import AddQuote from "./routes/AddQuote.jsx";
import Quote from "./routes/Quote.jsx";

const router = createBrowserRouter([
    {
        path: '/random-quote-manager/',
        element: <App/>,
        children: [
            {
                path: '/random-quote-manager/',
                element: <Home/>
            },
            {
                path: '/random-quote-manager/quotes',
                element: <ShowQuotes/>
            },
            {
                path: '/random-quote-manager/add-quote',
                element: <AddQuote/>
            },
            {
                path: '/random-quote-manager/quote/:id',
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
