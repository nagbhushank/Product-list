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
        <div className="flex w-[100%] text-center flex-col">
            {menuObject.map((menu) => {
                const { label, id, path, icon } = menu;
                return (
                    <NavLink
                        key={id}
                        to={path}
                        className="m-[10px] text-[120%] inline-flex items-center text-[1rem] decoration-none text-[#fff] bg-[#4e75e1] px-[1.2rem] py-[0.6rem] rounded-[5px] transition-colors duration-300 ease-in-out hover:bg-[#0449b1]"
                        // className="{({ isActive }) => {
                        //     console.log("Nav", isActive);
                        //     isActive === true ? "nav-link active" : "nav-link";
                        // }}""
                    >
                        {icon} &nbsp;
                        {label}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default NavigationComponent;
