import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile"; // Make sure the path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile(); // Use the hook to get the boolean value

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      {/* Hidden by default, visible on screens 'sm' and larger */}
      <nav className="hidden sm:block w-full py-5 px-5 braah-one relative z-50">
        <div className="w-full flex flex-row justify-between items-center">
          <Link to="/">
            <img
              src="siam-white.webp"
              alt="siam logo"
              width={300}
              height={300}
              className="pl-5"
            />
          </Link>
          <div className="w-[45%] py-5">
            <ul className="flex flex-row items-center justify-around">
              <li className="uppercase text-white text-[23px] font-medium">
                <Link to="/about">About us</Link>
              </li>
              <li className="uppercase text-white text-[23px] font-medium">
                <Link to="/team">Team</Link>
              </li>
            </ul>
          </div>
          <div className="w-[45%] py-5">
            <ul className="flex flex-row items-center justify-around">
              <li className="uppercase text-white text-[23px] font-medium">
                <Link to="/events">Events</Link>
              </li>
              <li className="uppercase text-white text-[23px] font-medium">
                <Link to="/domains">Domains</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- MOBILE NAVBAR --- */}
      {/* Visible by default, hidden on screens 'sm' and larger */}
      <nav className="sm:hidden w-full flex items-center justify-between px-5 py-4 relative z-50">
        <Link to="/">
          <img src="siam-white.webp" alt="siam logo" width={150} height={150} />
        </Link>
        <button
          onClick={toggleDropdown}
          className="navbarbutton flex items-center gap-x-2.5 uppercase rounded-full py-0.5 px-6 font-light text-white bg-gradient-to-r from-[#2b684e] to-[#001b0c]"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              color="#ffffff"
              fill="none"
            >
              <path
                d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              color="#f9f9f9"
              fill="none"
            >
              <path
                d="M4 5L20 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19L20 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <span className="audiowide text-white text-[18px]">Menu</span>
        </button>
        {isOpen && (
          <ul className="audiowide uppercase flex flex-col items-center text-center absolute right-3 top-16 mt-2 w-48 bg-black/80 backdrop-blur-md rounded-xl shadow-lg text-white space-y-2 p-2">
            <Link
              to="/about"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <li className="w-full rounded-xl p-0.5 bg-[#0ce46c] cursor-pointer">
                <div className="bg-black text-white p-2 rounded-lg">
                  About us
                </div>
              </li>
            </Link>
            <hr className="w-4/5 border-gray-600" />
            <Link
              to="/team"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <li className="w-full rounded-xl p-0.5 bg-[#0ce46c] cursor-pointer">
                <div className="bg-black text-white p-2 rounded-lg">Team</div>
              </li>
            </Link>
            <hr className="w-4/5 border-gray-600" />
            <Link
              to="/events"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <li className="w-full rounded-xl p-0.5 bg-[#0ce46c] cursor-pointer">
                <div className="bg-black text-white p-2 rounded-lg">Events</div>
              </li>
            </Link>
            <hr className="w-4/5 border-gray-600" />
            <Link
              to="/domains"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <li className="w-full rounded-xl p-0.5 bg-[#0ce46c] cursor-pointer">
                <div className="bg-black text-white p-2 rounded-lg">
                  Domains
                </div>
              </li>
            </Link>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
