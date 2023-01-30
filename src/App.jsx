import NavBar from "./components/NavBar.jsx";
import './App.css'
import {Outlet} from "react-router-dom";

const App = () => (
    <div>
        <NavBar />
        <Outlet />
    </div>
);

export default App
