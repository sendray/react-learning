import { useState } from "react";
import { APP_LOGO } from "../utils/constants";

import { Link } from "react-router";

const Header = () => {
  // const [btnName, setBtnName] = useState("Login");

  return (
    <nav className="flex w-full box-border justify-between items-center px-4 sm:px-6 md:px-12 py-4 bg-(--nav-bg) text-(--fg)">
      <div className="logo">
        <div className="bold text-2xl">React Learning</div>
      </div>
      {/* <ul className="flex gap-6 sm:gap-12">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <button
          className="cursor-pointer"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </ul> */}
    </nav>
  );
};

export default Header;
