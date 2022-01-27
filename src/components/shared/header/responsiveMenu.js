import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./data";

const ResponsiveMenu = ({ setIsOpen, isOpen }) => {
  const menu = MenuItems;

  return (
    <div
      className={
        isOpen
          ? "md:hidden relative top-0 pb-10 w-56 sm:px-6 px-2 right-0 py-3 "
          : "hidden transition-all duration-800"
      }
    >
      <div className="pb-2">
        {menu.map((item, i) => {
          return (
            <Link
              key={i}
              className="font-medium px-2 hover:text-pink-500 block my-3 transition-all duration-200"
              to={item.path}
            >
              {item.title}
            </Link>
          );
        })}
      </div>

      <Link
        to="/signin"
        className="mx-2  px-3 py-2 border rounded border-gray-300 hover:bg-white hover:text-gray-800 hover:border-gray-800 transition-all duration-500"
      >
        Sign in
      </Link>
    </div>
  );
};

export default ResponsiveMenu;
