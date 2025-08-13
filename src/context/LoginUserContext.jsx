import { createContext, useContext, useState } from "react";

const LoginUserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("Abhishek Kumbar");

    const updateUserName = (user) => {
        setUsername(user);
    };

    return (
        <LoginUserContext.Provider value={{ username, updateUserName }}>
            {children}
        </LoginUserContext.Provider>
    );
};

export const useUserName = () => useContext(LoginUserContext);
