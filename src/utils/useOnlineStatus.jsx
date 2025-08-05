import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlinestatus, setOnlineSatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineSatus(true);
        });

        window.addEventListener("offline", () => {
            setOnlineSatus(false);
        });
    }, []);
    return onlinestatus;
};

export default useOnlineStatus;
