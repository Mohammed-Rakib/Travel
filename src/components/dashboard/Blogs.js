import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import UpdateBlogStatus from "./UpdateBlogStatus";
import cogoToast from "cogo-toast";
import { useHistory } from "react-router-dom";

const Blogs = () => {
  const { blogs } = useAuth();
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [id, setId] = useState(null);

  function openModal(user) {
    setIsOpen(true);
    setId(user);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // delete a blog by id
  const deleteBlog = (id) => {
    fetch(`https://fathomless-dawn-94067.herokuapp.com/blogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          cogoToast.success("Blog deleted successfully");
        }
      });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-pink-500 py-5">Blogs</h1>
      <div className="w-full block overflow-x-scroll overflow-y-hidden border-b-2">
        <table className="w-full" style={{ borderSpacing: 0 }}>
          <thead>
            <tr className="text-center">
              <th className="m-0 p-2 border border-black">Title</th>
              <th className="m-0 p-2 border border-black">Email</th>
              <th className="m-0 p-2 border border-black">Status</th>
              <th className="m-0 p-2 border border-black">Update status</th>
              <th className="m-0 p-2 border border-black">Edit & Delete</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map((blog) => {
              return (
                <tr key={blog?._id} className="text-center">
                  <td className="m-0 p-2 border border-black">
                    {blog?.title.slice(0, 30)}..
                  </td>
                  <td className="m-0 p-2 border border-black text-sm">
                    {blog?.travelerEmail}
                  </td>
                  <td className="m-0 p-2 border border-black">
                    {blog?.status}
                  </td>
                  <td className="m-0 p-2 border border-black">
                    <button
                      onClick={() => openModal(blog._id)}
                      className="px-2 py-1 rounded bg-pink-500 text-white"
                    >
                      Update
                    </button>
                  </td>
                  <td className="m-0 p-2 border border-black">
                    <button
                      onClick={() => history.push(`/blogs/edit/${blog?._id}`)}
                      className="px-2 py-1 rounded bg-green-500 xl:mr-2 mr-0 mb-2 text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteBlog(blog._id)}
                      className="px-2 py-1 rounded bg-red-500 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <UpdateBlogStatus
        modalIsOpen={modalIsOpen}
        id={id}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Blogs;
