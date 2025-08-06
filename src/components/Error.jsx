import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { PNF404, PAGE_NOT_EXISTS } from "../utils/Constants";
const Error = () => {
    return (
        <div>
            <div className="error-page-wrapper">
                <h1>{PNF404}</h1>
                <p>{PAGE_NOT_EXISTS}</p>
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
