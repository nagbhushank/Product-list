import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch, AiOutlineLogin } from "react-icons/ai";

const NavigationComponent = () => {
    const menuObject = [
        {
            id: 1,
            label: "Home",
            path: "/",
            icon: <AiOutlineHome />,
        },
        {
            id: 2,
            label: "Search",
            path: "/search",
            icon: <AiOutlineSearch />,
        },
        {
            id: 3,
            label: "Login",
            path: "/login",
            icon: <AiOutlineLogin />,
        },
    ];

    return (
        <div className="navigation-component">
            {menuObject.map((menu) => {
                const { label, id, path, icon } = menu;
                return (
                    <NavLink key={id} to={path} className="nav-link">
                        {icon} &nbsp;
                        {label}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default NavigationComponent;
