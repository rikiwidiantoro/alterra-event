import { Component } from "react";

class Script extends Component {
    render() {
        return(
            <div>
                <script>
                    document.getElementById('#btn').click(function() {
                        alert('Anda berhasil keluar!')
                    })
                </script>
            </div>
        )
    }
}

export default Script;