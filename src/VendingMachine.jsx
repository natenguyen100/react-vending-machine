import React from "react";
import { Link } from 'react-router-dom';

const VendingMachine = () => {
    return (
        <div className="vending-machine">
            <div className="vending-machine-greeting">
                <p>I'm a vending machine. What do you like?</p>
            </div>
            <div className="vending-machine-items">
                <Link to="/chips">Chips</Link>
                <Link to="/soda">Soda</Link>
                <Link to="/chips">Candy</Link>
            </div>
        </div>
    )
}

export default VendingMachine;