import { NavLink } from "react-router-dom";

const NavigationComponent = () => {
    const menuObject = [
        {
            id: 1,
            label: "Home",
            path: "/",
        },
        {
            id: 2,
            label: "Search",
            path: "/search",
        },
        {
            id: 3,
            label: "Login",
            path: "/login",
        },
    ];

    return (
        <div className="navigation-component">
            {menuObject.map((menu) => {
                const { label, id, path } = menu;
                return (
                    <NavLink key={id} to={path} className="nav-link">
                        {label}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default NavigationComponent;
