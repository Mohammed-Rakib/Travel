import React from "react";
import StarRatings from "react-star-ratings";

const Review = (props) => {
  console.log(props.review);
  const { date, description, image, name, ratings } = props.review;
  return (
    <div className="px-2 py-1 my-1 border flex items-center justify-between">
      <div>
        <div className="flex item-center">
          <img
            className="w-10 rounded-full border border-pink-600"
            src={image}
            alt=""
          />
          <h6 className="capitalize ml-1  mt-2">{name}</h6>
        </div>

        <StarRatings
          rating={ratings}
          starRatedColor="orange"
          starDimension="20px"
          starSpacing="1px"
        />
        <h1 className=" py-1 text-sm">{description}</h1>
        <div className="flex item-center">
          <p className="mt-2 text-sm text-gray-400">
            {new Date(date).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
