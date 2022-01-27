import React from "react";
import { useHistory } from "react-router-dom";

const TopRated = (props) => {
  const { title, _id } = props.blog;
  const history = useHistory();
  return (
    <div className="py-2 border-b border-gray-400">
      <h1
        onClick={() => history.push(`/blogs/${_id}`)}
        className="font-semibold hover:underline cursor-pointer"
      >
        {title.slice(0, 50)}..
      </h1>
    </div>
  );
};

export default TopRated;
