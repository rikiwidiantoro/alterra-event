import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IsiFitur1 from './IsiFitur1';

class Fiturr extends Component {
    render() {
        return(
            <div>
                ReactDOM.render(
                    <React.StrictMode>
                        <IsiFitur1 />
                    </React.StrictMode>
                );

            </div>
        )
    }
}


export default Fiturr;