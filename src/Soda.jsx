import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Soda = () => {
    const [sodas, setSodas] = useState([]);

    const getSodas = () => {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        setSodas(items=>[...items, {x, y}]);
    }
    
    const img = sodas.map((sodas, i) => (
        <img src={sodas} alt="img" key={i} className="soda-img" style={{ top: `${sodas.y}px`, left: `${sodas.x}px` }}/>
    ));

    return (
        <div className="sodas">
             <div className="soda-card">
                <p>You've got: {sodas.length} sodas...</p>    
                <button onClick={getSodas}>More</button>
                <br></br>
                <Link to="/">Go Back</Link>
            </div>
            {img}
        </div>
    )
}

export default Soda;