import { useState } from "react";
import { APP_LOGO } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img alt="app-logo" src={APP_LOGO} />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
