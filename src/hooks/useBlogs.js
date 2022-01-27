import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const loadBlogs = async () => {
    const response = await fetch(
      "https://fathomless-dawn-94067.herokuapp.com/blogs"
    );
    const data = await response.json();
    setBlogs(data);
  };

  useEffect(() => {
    loadBlogs();
  }, [blogs]);
  return { blogs };
};

export default useBlogs;
