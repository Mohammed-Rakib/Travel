import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { FaStar } from "react-icons/fa";
import cogoToast from "cogo-toast";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const MakeReviews = ({ id }) => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const { currentUser } = useAuth();
  const { register, handleSubmit } = useForm();

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const onSubmit = (data) => {
    const reviewInfo = {
      ratings: currentValue,
      name: data.username,
      description: data.message,
      image: currentUser?.photoURL,
      blogId: id,
    };
    console.log(reviewInfo);

    fetch("https://fathomless-dawn-94067.herokuapp.com/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          cogoToast.success("Review upload successfully");
          cogoToast.warn("Review will be shown when admin make approval");
        }
      });
  };
  return (
    <div className="py-5">
      <div className="">
        <div className="">
          <h1 className="text-xl pb-3 font-semibold text-pink-600">
            Share your exprerience
          </h1>
          <div className="flex ">
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>{" "}
          <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="block border w-full focus:outline-none px-10 text-center py-1 my-4 rounded"
              defaultValue={currentUser?.displayName}
              {...register("username", { required: true })}
            />
            <textarea
              className="border block p-3 w-full focus:outline-none"
              cols="30"
              rows="5"
              placeholder="write something.."
              {...register("message", { required: true })}
            ></textarea>
            <div className="">
              <input
                className="my-5 bg-pink-500 px-3 py-1 rounded text-white cursor-pointer"
                type="submit"
                value="Save"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeReviews;
