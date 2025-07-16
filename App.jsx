import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
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

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
