import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import RecipeDetails from "./RecipeDetails";
// import SearchComponent from "./SearchComponent";
import Error from "./Error";
import { lazy, Suspense, useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { UserProvider } from "../context/LoginUserContext";
import { ThemeProvider } from "../context/ThemeContext";

const LazySearchComponent = lazy(() => import("./SearchComponent"));

const AppLayout = () => {
    return (
        <div>
            <Header />
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
    return (
        <div>
            <ThemeProvider>
                <UserProvider>
                    <RouterProvider router={appRouter} />
                </UserProvider>
            </ThemeProvider>
        </div>
    );
};
export default MainContainer;
