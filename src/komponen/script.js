import { Component } from "react";

class Script extends Component {
    render() {
        return(
            <div>
                
                    document.getElementById('#btn').click(function() {
                        alert('Anda berhasil keluar!')
                    })
                
            </div>
        )
    }
}

export default Script;