import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  console.log(user);
  const navItem = (
    <>
      <li>
        <Link to="/" className=" no-underline  font-bold">
          Home
        </Link>
      </li>
      <li>
        <Link to="/all" className=" no-underline  font-bold">
          All
        </Link>
      </li>
      <li>
        <Link to="/blog" className=" no-underline  font-bold">
          Blog
        </Link>
      </li>
      <li>
        {user && (
          <Link to="/addtoys" className=" no-underline font-bold">
            Add a Toy
          </Link>
        )}
      </li>
      <li>
        {user && (
          <Link to="/mytoys" className=" no-underline  font-bold">
            My Toys
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar w-full bg-rose-950 text-pink-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
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
            className="menu menu-compact dropdown-content mt-5 p-2 font-bold shadow-xl bg-rose-950 text-pink-100 rounded-box"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            className="w-12 lg:w-12 rounded-xl mr-16 lg:ml-8 items-center"
            src="https://i.postimg.cc/VkwY8M1Q/toy-cooking-logo-2.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>

      <div className="navbar-end mr-8">
        {user ? (
          <div className=" mx-2 flex items-center gap-3">
            <button
              onClick={handleLogOut}
              className="btn mr-2 bg-pink-100 text-rose-950 glass"
            >
              Sign Out
            </button>

            <img
              className="rounded-full w-12 bg-green-500 p-1"
              src={user?.photoURL}
              alt=""
            />
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="btn bg-pink-100 text-rose-950 glass ">
                Sign In
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
