import React from "react";
import Home from "./Home";
import './Navbar.css';
import Fiturr from './Fiturr'

const Navbar = () => {
    return(
        <div>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <nav>
                <ul>
                    <h2>Riki Widiantoro</h2>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Fitur 1</a></li>
                </ul>
                <button id='btn'>Keluar</button>
            </nav>
            <script src='script.js'></script>
        </div>
    )
}

export default Navbar;