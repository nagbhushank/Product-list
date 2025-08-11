import LogoComponent from "./LogoComponent";
import { NavLink } from "react-router-dom";
import { TITLE } from "../utils/Constants";
import NavigationComponent from "./NavigationComponent";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../context/userContext";
const Header = () => {
    const userStatus = useOnlineStatus();

    const { username, setUsername } = useContext(UserContext);

    return (
        <div className="bg-[#182f61] justify-arround fixed top-0 left-0 flex-col h-[100%] w-[13%]">
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
            <div className="text-[white]">
                {console.log(username)} {username}
            </div>
        </div>
    );
};

export default Header;
