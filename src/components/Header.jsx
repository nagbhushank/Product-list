import LogoComponent from "./LogoComponent";
import { NavLink } from "react-router-dom";
import { TITLE } from "../utils/Constants";
import NavigationComponent from "./NavigationComponent";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const userStatus = useOnlineStatus();
    return (
        <div className="header">
            <NavLink to="/" className="nav-link">
                <div className="logo-container">
                    <LogoComponent />
                    <div className="title-wrapper">
                        {TITLE}
                        <br />
                        <span className={userStatus ? "Online" : "offline"}>
                            {userStatus ? "✅" : "❌"}
                        </span>
                    </div>
                </div>
            </NavLink>

            <div className="navigation-container">
                <NavigationComponent />
            </div>
        </div>
    );
};

export default Header;
