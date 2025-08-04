import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Error = () => {
    return (
        <div>
            <div className="error-page-wrapper">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <div className="error-underline"></div>
                <NavLink className="nav-link" path="/home">
                    Goto &nbsp;
                    <AiOutlineHome />
                </NavLink>
            </div>
        </div>
    );
};

export default Error;
