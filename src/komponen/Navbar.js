import React from "react";
import Home from "./Home";
import './Navbar.css';
import Fiturr from './Fiturr'

const Navbar = () => {
    return(
        <div>
            <nav>
                <ul>
                    <h2>Riki Widiantoro</h2>
                    <li><a href={Home}>Home</a></li>
                    <li><a href='Fiturr'>Fitur 1</a></li>
                </ul>
                <button id='btn'>Keluar</button>
            </nav>
        </div>

        
)
// function klik() {
//         const btn = document.getElementById('btn');
//         btn.click(function() {
//             alert('Anda berhasil keluar!');
//         });
//     }
// }

export default Navbar;