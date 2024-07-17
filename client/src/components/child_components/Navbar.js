import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ra = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    ra("/login");
  };
  return (
    <header className="z-[-1]  flex items-center justify-between h-16 px-4 md:px-6 bg-black text-white">
      <Link className="flex items-center gap-2 text-lg font-semibold" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
        </svg>
        FitTrack
        <span className="sr-only">Fitness App</span>
      </Link>
      <nav className="hidden md:flex items-center justify-center flex-1 gap-6 text-sm font-medium">
        <Link className="text-[#CCCCCC] hover:text-white" to="/">
          Home
        </Link>
        {localStorage.getItem("token") && (
          <Link className="text-[#CCCCCC] hover:text-white" to="/dashboard">
            Dashboard
          </Link>
        )}
        <Link className="text-[#CCCCCC] hover:text-white" to="/workout">
          Workout
        </Link>
        <Link className="text-[#CCCCCC] hover:text-white" to="/about">
          About
        </Link>
        <Link className="text-[#CCCCCC] hover:text-white" to="/contact">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        {!localStorage.getItem("token") ? (
          <>
            <Link
              to="/login"
              className="inline-flex h-9 items-center justify-center rounded-md bg-[#4CAF50] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#45a049] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-flex h-9 items-center justify-center rounded-md border border-[#4CAF50] bg-[#1E1E1E] px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-[#4CAF50] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <button
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#4CAF50] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#45a049] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-[#1E1E1E] text-white shadow-lg">
          <div className="flex flex-col items-center p-4 gap-4 text-sm font-medium">
            <Link className="text-[#CCCCCC] hover:text-white" to="/">
              Home
            </Link>
            {localStorage.getItem("token") && (
              <Link className="text-[#CCCCCC] hover:text-white" to="/dashboard">
                Dashboard
              </Link>
            )}
            <Link className="text-[#CCCCCC] hover:text-white" to="/workout">
              Workout
            </Link>
            <Link className="text-[#CCCCCC] hover:text-white" to="/about">
              About
            </Link>
            <Link className="text-[#CCCCCC] hover:text-white" to="/contact">
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
