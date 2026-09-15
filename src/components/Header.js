import { useState } from "react";
import { APP_LOGO } from "../utils/constants";

import { Link } from "react-router";

const Header = () => {
  // const [btnName, setBtnName] = useState("Login");

  return (
    <nav className="flex justify-between items-center px-12 py-4 bg-(--nav-bg) text-(--fg)">
      <div className="logo">
        {/* <img alt="app-logo" src={APP_LOGO} className="w-12" /> */}
        <div className="bold text-2xl">React Learning</div>
      </div>
      <ul className="flex gap-12">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/about">About</Link>
        </li> */}
        {/* <button
          className="cursor-pointer"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button> */}
      </ul>
    </nav>
  );
};

export default Header;
