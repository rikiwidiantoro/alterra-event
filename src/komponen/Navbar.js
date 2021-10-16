import React from "react";
import Home from "./Home";
import './Navbar.css';

const Navbar = () => {
    return(
        <div>
            <nav>
                <ul>
                    <h2>Riki Widiantoro</h2>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Fitur 1</a></li>
                </ul>
                <button id='btn'>Keluar</button>
            </nav>
        </div>
    )
}

export default Navbar;