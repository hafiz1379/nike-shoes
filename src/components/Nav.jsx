/* eslint-disable */
import { TbShoppingBag } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { ReactComponent as NikeLogo } from "../assets/nike-logo.svg";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

function Nav({onClickShoppingBtn}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="z-10 relative flex flex-wrap justify-between items-center">
      {/* Logo */}
      <a href="/" aria-label="Home">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Hamburger Menu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        type="button"
        className="lg:hidden focus:ring-2 focus:ring-gray-200 p-2 rounded-lg"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu List */}
      <div className={`${!isMenuOpen && "hidden"} w-full lg:w-auto lg:block`}>
        <ul className="bg-gray-50 lg:space-x-8 lg:bg-transparent lg:border-none text-lg border border-gray-100 rounded-lg p-4 flex flex-col lg:flex-row">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`lg:hover:bg-transparent lg:hover:text-blue-700 py-2 px-3 cursor-pointer rounded ${
                  i === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-600"
                    : "hover:bg-slate-100"
                } ${(i === 3 || i === 4) && "lg:text-white"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart Button */}
      <div onClick={onClickShoppingBtn} className="transition active:scale-75 fixed left-4 bottom-4 lg:static">
        <div className="h-12 w-12 cursor-pointer flex justify-center items-center rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
