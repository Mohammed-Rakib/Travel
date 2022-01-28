import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  const loadBlogs = async () => {
    const response = await fetch(
      "https://fathomless-dawn-94067.herokuapp.com/reviews"
    );
    const data = await response.json();
    setReviews(data);
  };

  useEffect(() => {
    loadBlogs();
  }, [reviews]);
  return { reviews };
};

export default useReviews;
