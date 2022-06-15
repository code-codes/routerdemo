import React from "react";
import { useNavigate } from "react-router-dom";

function Contactus() {

    const navigate = useNavigate()
    return (
        <div className="text-center">
            <h1>Contact us</h1>
            <button className="btn btn-warning" onClick={() => navigate('/users')}>
                Go to Users
            </button>

        </div>
    )
}

export default Contactus;