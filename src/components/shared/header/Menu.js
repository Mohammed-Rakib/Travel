import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { MenuItems } from "./data";

const Menu = () => {
  const menu = MenuItems;

  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logOut, users } = useAuth();

  const user = users.find((user) => user?.email === currentUser?.email);

  return (
    <div className="md:flex hidden items-center">
      {menu.map((item, i) => {
        return (
          <Link
            key={i}
            className="font-medium px-2 hover:text-pink-500"
            to={item.path}
          >
            {item.title}
          </Link>
        );
      })}
      {currentUser ? (
        <div className="relative ">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img
              className=" h-12 w-12 "
              src={currentUser?.photoURL}
              alt=""
              style={{ borderRadius: "30px" }}
            />
          </button>
          <div
            className={
              isOpen
                ? "bg-pink-500 absolute right-0 top-12 px-6 w-52 py-3 text-black rounded"
                : " hidden"
            }
          >
            <h1 className="text-center capitalize text-white font-bold text-xl p-2">
              {currentUser?.displayName}
            </h1>
            {user?.role === "admin" ? (
              <Link
                className="block text-center   bg-white text-black py-1 px-3 my-3"
                to="/dashboard"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                className="block text-center   bg-white text-black py-1 px-3 my-3"
                to="/myBlogs"
              >
                My Blogs
              </Link>
            )}
            <Link
              className="block text-center bg-white text-black py-1 px-3 my-3"
              to="/writeBlog"
            >
              Write a blog
            </Link>
            <button
              onClick={logOut}
              className="bg-white block w-full px-3 py-1 rounded"
            >
              Log out
            </button>
          </div>
        </div>
      ) : (
        <Link
          to="/signin"
          className="mx-2 px-3 py-2 border rounded border-gray-600 hover:bg-white hover:text-gray-800 hover:border-gray-800 transition-all duration-500"
        >
          Sign in
        </Link>
      )}
    </div>
  );
};

export default Menu;
