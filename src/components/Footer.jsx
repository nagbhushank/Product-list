import { useContext } from "react";
import UserContext from "../context/userContext";

const Footer = () => {
    const { LoggedInUser } = useContext(UserContext);
    console.log(LoggedInUser);
    return (
        <div>
            <h2 className="bg-[#182f61] text-[white]">{LoggedInUser}</h2>
        </div>
    );
};

export default Footer;
