import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import cogoToast from "cogo-toast";
import { useParams } from "react-router-dom";

const EditBlogForm = () => {
  const { currentUser } = useAuth();
  const history = useHistory();

  const { id } = useParams();
  const { blogs } = useAuth();

  const upBlog = blogs.find((blog) => blog._id === id);

  const [image, setImage] = useState(upBlog?.imageUrl);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const blogData = {
      title: data.title,
      traveler: data.author,
      travelerEmail: data.email,
      imageUrl: image,
      description: data.description,
      category: data.category,
      cost: data.cost,
      location: data.location,
    };
    fetch(`https://fathomless-dawn-94067.herokuapp.com/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push("/");
          cogoToast.success("Blog update successfully");
        } else {
          cogoToast.error("There is something wrong");
        }
      });
  };

  // handle banner image
  const bannerImageHandler = (e) => {
    const imageData = new FormData();
    imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="md:w-9/12 w-11/12 mx-auto py-5 border px-3">
      <h3 className="text-3xl font-medium">
        Blogs <span className="text-pink-500">{">"}</span> Update Blog Post
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
        <h6>Upload an image</h6>
        <div>
          <label
            className="py-1 relative cursor-pointer"
            htmlFor="banner-image"
          >
            <img
              className=" bg-gray-800 p-2  md:h-80 h-56 "
              src={image}
              alt=""
            />
          </label>
          <input
            id="banner-image"
            type="file"
            className="border hidden"
            onChange={bannerImageHandler}
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 pt-4">
          <div className=" md:mr-2 mr-0">
            <h6>Blog Author</h6>
            <input
              className=" border w-full md:mb-0 mb-3 py-2 rounded px-1 focus:outline-none"
              defaultValue={currentUser?.displayName}
              {...register("author", { required: true })}
            />
          </div>
          <div>
            <h6>Blog Author email</h6>
            <input
              className=" border w-full py-2 rounded px-1 focus:outline-none "
              defaultValue={currentUser?.email}
              readOnly={true}
              {...register("email", { required: true })}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 pt-4 gap-2">
          <div className=" md:mr-2 mr-0">
            <h6>Category</h6>
            <select
              className=" border w-full  py-2 rounded px-1 focus:outline-none"
              {...register("category", { required: true })}
            >
              <option value={upBlog?.category}>{upBlog?.category}</option>
              <option value="Cultural explorer">cultural explorer</option>
              <option value="Free spirits">Free spirits</option>
              <option value="Gentle explorers">Gentle explorers</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div>
            <h6>Location</h6>
            <input
              className=" border  w-full py-2 rounded px-1 focus:outline-none "
              defaultValue={upBlog?.location}
              {...register("location", { required: true })}
            />
          </div>
          <div>
            <h6>Cost</h6>
            <input
              className=" border w-full py-2 rounded px-1 focus:outline-none "
              type="number"
              defaultValue={upBlog?.cost}
              {...register("cost", { required: true })}
            />
          </div>
        </div>
        <div className="py-1">
          <h6>Blog Title</h6>
          <input
            className=" block py-2 border w-full rounded px-1 focus:outline-none"
            defaultValue={upBlog?.title}
            {...register("title", { required: true })}
          />
        </div>

        <div>
          <h6>Blog Description</h6>
          <textarea
            className="border w-full bg-transparent  px-1 py-2 h-40 rounded focus:outline-none"
            defaultValue={upBlog?.description}
            {...register("description", { required: true })}
          ></textarea>
        </div>

        <div className="py-3">
          <input
            className="py-2 px-3 cursor-pointer  rounded bg-pink-500 text-white"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default EditBlogForm;
