import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItem = (
    <>
      <li>
        <Link to="/" className=" no-underline text-2xl font-bold">
          Home
        </Link>
      </li>
      <li>
        <Link to="/all" className=" no-underline text-2xl font-bold">
          All
        </Link>
      </li>
      <li>
        <Link to="/blog" className=" no-underline text-2xl font-bold">
          Blog
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar w-full bg-rose-950 text-pink-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 font-bold shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            className="w-16 rounded-xl ml-8"
            src="https://i.postimg.cc/VkwY8M1Q/toy-cooking-logo-2.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end mr-8">
        <a className="btn">Profile</a>
      </div>
    </div>
  );
};

export default Header;
