import LogoComponent from "./LogoComponent";
import { NavLink } from "react-router-dom";
import { TITLE } from "../utils/Constants";
import NavigationComponent from "./NavigationComponent";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <NavLink to="/">
                <div className="logo-container">
                    <LogoComponent />
                    <div className="title-wrapper">{TITLE}</div>
                </div>
            </NavLink>

            <div className="navigation-container">
                <NavigationComponent />
            </div>
        </div>
    );
};

export default Header;
