import LogoComponent from "./LogoComponent";
import { NavLink } from "react-router-dom";
import { DARK_THEME, TITLE } from "../utils/Constants";
import NavigationComponent from "./NavigationComponent";
import { useUserName } from "../context/LoginUserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
    const userStatus = useOnlineStatus();

    const { username, updateUserName } = useUserName();
    const { theme, updateTheme } = useTheme();

    console.log(theme);

    return (
        // <div className="bg-[#182f61] justify-arround fixed top-0 left-0 flex-col h-[100%] w-[13%]">
        <div
            className={`justify-arround fixed top-0 left-0 flex-col h-[100%] w-[13%] ${
                theme === DARK_THEME ? "bg-white" : "bg-black"
            }`}
        >
            <NavLink
                to="/"
                className="m-[10px] text-[120%] inline-flex items-center text-[1rem] decoration-none text-[#fff] bg-[#4e75e1] px-[1.2rem] py-[0.6rem] rounded-[5px] transition-colors duration-300 ease-in-out hover:bg-[#0449b1]"
            >
                <div className="flex">
                    <LogoComponent />
                    <div className="text-none color-[aliceblue] pt-[15%] font-extrabold">
                        {TITLE}
                        <br />
                        <span
                            className={
                                userStatus ? "text-[green]" : "text-[red]"
                            }
                        >
                            {userStatus ? "Online" : "Offline"}
                        </span>
                    </div>
                </div>
            </NavLink>

            <div className="flex justify-between flex-col items-baseline pl-5%">
                <NavigationComponent />
            </div>
            <div
                className={`grid ${
                    theme === DARK_THEME ? "text-black" : "text-white"
                }`}
            >
                <h2>{username}</h2>
            </div>

            <div className="grid">
                <button
                    onClick={updateTheme}
                    className={`${
                        theme === DARK_THEME ? "text-black" : "text-white"
                    } p-[1rem] text-[1.5rem] hover:cursor-pointer`}
                >
                    {theme === DARK_THEME ? "🌑" : "☀️"}
                </button>
            </div>
        </div>
    );
};

export default Header;

// const handleOnClick =()=>{}
//  const updateTheme = () => {
//     setTheme(theme === "dark" ? "white" : "dark");
// };

// onClick = {handleOnClick} by reference => whenever component rerenders
// onClick = {(e)=>handleOnClick(e)} everytime calls when
// onClick = {()=>{}} inline => bad practice
