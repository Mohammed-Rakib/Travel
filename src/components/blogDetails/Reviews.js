import React from "react";
import useAuth from "../../hooks/useAuth";
import Review from "./Review";

const Reviews = ({ id }) => {
  const { reviews } = useAuth();

  const approvedReviews = reviews.filter(
    (review) => review.status === "approved" && review.blogId === id
  );
  console.log(approvedReviews);
  return (
    <div className="py-3">
      <h1 className="text-3xl font-bold py-2">
        {approvedReviews.length} Feedbacks
      </h1>
      <hr />
      {approvedReviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
