import React from "react";
import Home from "./Home";
import './Navbar.css';
import Fiturr from './Fiturr'
import Script from './script'

const Navbar = () => {
    return(
        <div>
            <Script />
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