import ReactDom from "react-dom/client";
import MainContainer from "./src/components/MainContainer.jsx";
import "./styles.css";
const App = () => {
    return (
        <div>
            <MainContainer />
        </div>
    );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
