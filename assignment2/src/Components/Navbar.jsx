import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-slate-700 py-2">
      <div className="flex items-center justify-between text-white p-2 w - full md: w-9/12 lg:w-11/12 mx-auto">
        <div className="flex gap-2 items-center">
          {/* <img src={logo} alt="logo image" className='bg-transparent block text-white'></img> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 144"
          >
            <path
              fill="#7c7c7d"
              d="m219.833 71.7l-28.26-28.32l14.123-28.309l45.916 46.013c5.85 5.863 5.85 15.368 0 21.23l-56.514 56.634c-5.85 5.862-15.336 5.862-21.187 0c-5.85-5.863-5.85-15.368 0-21.23z"
            />
            <path
              fill="#151618"
              d="M173.922 4.396c5.85-5.863 15.338-5.86 21.189.002l10.595 10.618L82.09 138.892c-5.85 5.863-15.339 5.86-21.189-.002l-10.596-10.618zm-52.98 38.934L99.75 64.566l-28.26-28.32l-35.323 35.398l28.26 28.319l-14.123 28.309L4.388 82.259c-5.85-5.862-5.85-15.368 0-21.23L60.9 4.399c5.85-5.863 15.338-5.866 21.189-.003z"
            />
          </svg>

          <p className="text-2xl font-bold tracking-widest"> LOXCY</p>
        </div>

        <div className="hidden lg:block">
          <div className="flex gap-10 font-semibold">
            <p className="cursor-pointer text-orange-600">Home</p>
            <p className="hover:text-orange-500 duration-300 cursor-pointer">
              <AnchorLink href="#about">About</AnchorLink>
            </p>
            <p className="hover:text-orange-500 duration-300 cursor-pointer">
              <AnchorLink href="#service">Service</AnchorLink>
            </p>
            <p className="hover:text-orange-500 duration-300 cursor-pointer">
              <AnchorLink href="#price">price</AnchorLink>
            </p>
            <p className="hover:text-orange-500 duration-300 cursor-pointer">
              <AnchorLink href="#contacts">contacts</AnchorLink>
            </p>
          </div>
        </div>
        <Link to="LoginPage">
          <button className="bg-orange-600 pl-8 pr-8 pt-2 pb-2 font-semibold rounded-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-700 ease-in-out">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}
