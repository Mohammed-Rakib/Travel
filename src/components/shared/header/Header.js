import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { RiMenuFoldFill } from "react-icons/ri";
import ResponsiveMenu from "./responsiveMenu";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" bg-gray-700 text-white ">
      <div className="lg:w-9/12 w-11/12 mx-auto flex items-center justify-between py-4">
        {/* // website logo */}
        <div>
          <Link to="/">
            <span className="lg:text-4xl md:text-4xl text-2xl font-bold">
              <span className="text-pink-500">Tr</span>
              <span className="text-gray-100">avel</span>
            </span>
          </Link>
        </div>
        {/* // menu */}
        <div>
          {/* // menu for desktop/laptop  */}
          <Menu />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden block"
          >
            {isOpen ? (
              <ImCross className="text-2xl transition-all transform hover:rotate-180 hover:text-pink-500 duration-300" />
            ) : (
              <RiMenuFoldFill className="text-3xl" />
            )}
          </button>
        </div>
      </div>
      <div>
        <ResponsiveMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
