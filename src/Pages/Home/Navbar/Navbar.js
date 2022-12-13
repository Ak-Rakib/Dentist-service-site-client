import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        {user?.email ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link onClick={signOut}>Logout</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/">Contact Us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Doctor Portal
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0  mt-3">
          <div className="hidden md:flex">{navItems}</div>
          <li tabIndex={0}></li>
        </ul>
      </div>
      <label tabIndex={0} className="btn btn-ghost lg:hidden" htmlFor="dashboard-drawer">
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
    </div>
  );
};

export default Navbar;
