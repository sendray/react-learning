import { APP_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img alt="app-logo" src={APP_LOGO} />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
