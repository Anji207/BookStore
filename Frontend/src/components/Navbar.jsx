import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/our-team">Our Team</a></li>
    </>
  );

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${sticky ? "shadow-md transition-all" : ""}`}>
      <div className="w-full bg-base-200 dark:bg-slate-700 dark:text-white">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="navbar dark:bg-slate-800 dark:text-white">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navItems}
                </ul>
              </div>
              <a className="text-2xl font-bold cursor-pointer">bookStore</a>
            </div>

            <div className="navbar-end space-x-3">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navItems}</ul>
              </div>

              {/* Search Box */}
              <form
                onSubmit={handleSearch}
                className="hidden md:flex items-center px-3 py-2 border rounded-md"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="grow outline-none px-1 dark:bg-slate-900 dark:text-white"
                  placeholder="Search"
                />
                <button type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>

              {/* Theme Toggle */}
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />
                <svg
                  className="swap-off fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <path d="M5.64 17.657L4.22 19.07A9.953 9.953 0 0 0 12 22c2.21 0 4.243-.716 5.88-1.93l-1.415-1.415A7.962 7.962 0 0 1 12 20a7.962 7.962 0 0 1-6.36-2.343z" />
                </svg>
                <svg
                  className="swap-on fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <path d="M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zM4.22 4.22a1 1 0 1 1 1.42 1.42l-.71.71a1 1 0 1 1-1.42-1.42l.71-.71zm13.44 0a1 1 0 0 1 1.42 1.42l-.71.71a1 1 0 1 1-1.42-1.42l.71-.71zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" />
                </svg>
              </label>

              {/* Auth Buttons */}
              {authUser ? (
                <Logout />
              ) : (
                <div>
                  <a
                    className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 cursor-pointer"
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </a>
                  <Login />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
