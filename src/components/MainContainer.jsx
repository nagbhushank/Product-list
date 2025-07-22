import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import RecipeDetails from "./RecipeDetails";
import SearchComponent from "./SearchComponent";
import Error from "./Error";

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <div className="main-content">
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
            { path: "/search", element: <SearchComponent /> },
            { path: "/*", element: <Error /> },
        ],
    },
]);

const MainContainer = () => {
    return (
        <div className="main-container">
            <div>
                <RouterProvider router={appRouter} />
            </div>
        </div>
    );
};
export default MainContainer;
