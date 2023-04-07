import React from 'react';
import { Link } from 'react-router-dom';

function Result() {
    return (
    <div id="content">
        <p>맛있게 냠냠구리~!</p>
        <br/><br/>
        <div>
            <button><Link to="/recommend" style={{ textDecoration: "none", color: "black" }}>Home</Link></button>
        </div>
    </div>
    );
}

export default Result;