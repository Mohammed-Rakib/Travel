import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Blog from "./Blog";
import TopRated from "./TopRated";
import "./Blogs.css";

const Blogs = () => {
  const { blogs } = useAuth();

  const approvedBlogs = blogs.filter((blog) => blog.status === "approved");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(approvedBlogs.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = approvedBlogs.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  if (!blogs.length) {
    return (
      <div>
        <h1 className="py-32 text-center text-pink-500 ">
          Blogs are loading...
        </h1>
      </div>
    );
  }

  return (
    <section className="py-5 md:w-9/12 w-11/12 mx-auto md:grid grid-cols-12">
      <div className="py-5 lg:col-span-2 md:col-span-4">
        <h1 className="text-2xl font-bold">Top rated spots</h1>
        <div className="  py-4  rounded ">
          {blogs.slice(0, 4).map((blog) => (
            <TopRated key={blog._id} blog={blog} />
          ))}
        </div>
      </div>

      {/* // blogs */}
      <div className="lg:col-span-10 md:col-span-8  p-5">
        <h1 className="text-2xl px-3 font-bold text-pink-500">Blogs</h1>
        <div className=" py-4  rounded grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">
          {currentItems.map((blog) => (
            <Blog key={blog._id} blog={blog} />
          ))}
        </div>
        {/* pagination */}
        <div className="pagination">
          <ul className="pageNumbers">
            <li>
              <button
                onClick={handlePrevbtn}
                disabled={currentPage === pages[0] ? true : false}
              >
                Prev
              </button>
            </li>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
            <li>
              <button
                onClick={handleNextbtn}
                disabled={
                  currentPage === pages[pages.length - 1] ? true : false
                }
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
