import { Component } from "react";

class Script extends Component {
    render() {
        return(
            <div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script>
                    $(document).ready(function() {
                        console.log('ok')
                    });
                </script>
            </div>
        )
    }
}

export default Script;