import LogoComponent from "./LogoComponent";
import { TITLE } from "../utils/Constants";
import NavigationComponent from "./NavigationComponent";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <div>
          <LogoComponent />
        </div>
        <div className="title-wrapper">{TITLE}</div>
      </div>

      <div className="navigation-container">
        <NavigationComponent />
      </div>
    </div>
  );
};

export default Header;
