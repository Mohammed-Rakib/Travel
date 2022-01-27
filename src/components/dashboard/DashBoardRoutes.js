import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiListUnordered } from "react-icons/ri";
import { MdOutlineAdd } from "react-icons/md";
import { FaRegSquare } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
import { useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const DashboardRoutes = () => {
  const { logOut } = useAuth();
  let { url } = useRouteMatch();
  const activeStyle = {
    color: "white",
  };
  return (
    <div className=" text-center px-5 py-10 ">
      <NavLink
        activeStyle={activeStyle}
        className="flex  items-center w-32 text-xl text-black py-2 my-2"
        to={`${url}/blogs`}
      >
        <AiOutlineHome className="text-2xl text-gray-300 mx-2" /> Blogs
      </NavLink>
      <NavLink
        activeStyle={activeStyle}
        className="flex  items-center w-32 text-xl text-black py-2 my-2"
        to={`${url}/users`}
      >
        <MdOutlineReviews className="text-2xl text-gray-300 mx-2" /> Users
      </NavLink>

      <button
        onClick={logOut}
        className="flex mt-10 ml-2 bg-pink-500 items-center  text-xl text-white py-2 px-4 rounded"
      >
        <AiOutlineLogout className="text-2xl  mx-2" /> Log Out
      </button>
    </div>
  );
};

export default DashboardRoutes;
