import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import React from "react";
const Error = () => {
    return (
        <div>
            <div className="error-page-wrapper">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <div className="error-underline"></div>
                <NavLink className="nav-link" path="/home">
                    Home
                </NavLink>
            </div>
        </div>
    );
};

export default Error;
