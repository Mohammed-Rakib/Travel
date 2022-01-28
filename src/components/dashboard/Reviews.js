import cogoToast from "cogo-toast";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import UpdateReviewStatus from "./UpdateReviewStatus";

const Reviews = () => {
  const { reviews } = useAuth();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [id, setId] = useState(null);

  function openModal(id) {
    setIsOpen(true);
    setId(id);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // delete a review by id
  const deleteReview = (id) => {
    fetch(`https://fathomless-dawn-94067.herokuapp.com/reviews/${id}`, {
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
      <h1 className="text-2xl font-bold text-pink-500 py-5">Users</h1>
      <div className="w-full block overflow-x-scroll overflow-y-hidden border-b-2">
        <table className="w-full" style={{ borderSpacing: 0 }}>
          <thead>
            <tr className="text-center">
              <th className="m-0 p-2 border border-black">Name</th>
              <th className="m-0 p-2 border border-black">Feedback</th>
              <th className="m-0 p-2 border border-black">Status</th>
              <th className="m-0 p-2 border border-black">Update Status</th>
              <th className="m-0 p-2 border border-black">Delete</th>
            </tr>
          </thead>
          <tbody>
            {reviews?.map((review) => {
              return (
                <tr key={review?._id} className="text-center">
                  <td className="m-0 p-2 border border-black">
                    {review?.name}
                  </td>
                  <td className="m-0 p-2 border border-black text-sm">
                    {review?.description.slice(0, 60)}..
                  </td>
                  <td className="m-0 p-2 border border-black">
                    {review?.status}
                  </td>
                  <td className="m-0 p-2 border border-black">
                    <button
                      onClick={() => openModal(review?._id)}
                      className="px-2 py-1 rounded bg-pink-500 text-white"
                    >
                      Update
                    </button>
                  </td>
                  <td className="m-0 p-2 border border-black">
                    <button
                      onClick={() => deleteReview(review?._id)}
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

      {/* // user update modal */}
      <UpdateReviewStatus
        modalIsOpen={modalIsOpen}
        id={id}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Reviews;
