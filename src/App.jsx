import Header from "./components/Header.jsx";
import './App.css'
import {Outlet} from "react-router-dom";

const App = () => (
    <main className="d-flex flex-column align-items-center">
        <Header/>
        <Outlet/>
    </main>
);

export default App
