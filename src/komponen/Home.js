import { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <h1>Nama Saya Riki Widiantoro</h1>
                <Footer />
            </div>
        )
    }
}

export default Home;