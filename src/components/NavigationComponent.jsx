import { BrowserRouter, NavLink } from "react-router-dom";

const NavigationComponent = () => {
  const menuObject = [
    {
      id: 1,
      label: "Home",
    },
    {
      id: 2,
      label: "Receipes",
    },
    {
      id: 3,
      label: "Login",
    },
    {
      id: 4,
      label: "Cart",
    },
  ];

  return (
    <div className="navigation-component">
      {menuObject.map((menu) => {
        const { label, id } = menu;
        return (
          <NavLink key={id} to="/" className="nav-link">
            {label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavigationComponent;
