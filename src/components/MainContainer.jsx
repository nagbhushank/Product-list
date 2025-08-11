import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import RecipeDetails from "./RecipeDetails";
// import SearchComponent from "./SearchComponent";
import Error from "./Error";
import { lazy, Suspense, useContext, useState } from "react";
import Shimmer from "./Shimmer";
import UserContext from "../context/userContext";

const LazySearchComponent = lazy(() => import("./SearchComponent"));

const AppLayout = () => {
    const [username, setUsername] = useState("Abhishek");
    return (
        <div>
            <UserContext.Provider value={{ username, setUsername }}>
                <Header />
            </UserContext.Provider>
            <div className="ml-[13%]">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Body /> },
            { path: "/recipe/:id", element: <RecipeDetails /> },
            // { path: "/search", element: <SearchComponent /> },
            {
                path: "/search",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <LazySearchComponent />
                    </Suspense>
                ),
            },

            { path: "/*", element: <Error /> },
        ],
    },
]);

const MainContainer = () => {
    const { LoggedInUser } = useContext(UserContext);
    return (
        <div>
            <UserContext.Provider value={{ LoggedInUser }}>
                <RouterProvider router={appRouter} />
            </UserContext.Provider>
        </div>
    );
};
export default MainContainer;
