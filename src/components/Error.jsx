import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { PNF404, PAGE_NOT_EXISTS } from "../utils/Constants";
const Error = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-[100vh] text-center bg-[#f9f9f9] p-[2rem]">
                <h1 className="text-[5rem] text-[#4e75e1] mb-[1rem] font-bold">
                    {PNF404}
                </h1>
                <p className="text-[1.5rem] text-[#555] mb-[2rem]">
                    {PAGE_NOT_EXISTS}
                </p>
                <div className="w-[8rem] h-[4px] bg-[#4e75e1] mb-[2rem] rounded-[2px]"></div>
                <NavLink
                    className="m-[10px] text-[120%] inline-flex items-center text-[1rem] decoration-none text-[#fff] bg-[#4e75e1] px-[1.2rem] py-[0.6rem] rounded-[5px] transition-colors duration-300 ease-in-out hover:bg-[#0449b1]"
                    path="/home"
                >
                    Goto &nbsp;
                    <AiOutlineHome />
                </NavLink>
            </div>
        </div>
    );
};

export default Error;
