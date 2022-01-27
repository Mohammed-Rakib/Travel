import React from "react";
import Modal from "react-modal";
import cogoToast from "cogo-toast";
import { useForm } from "react-hook-form";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const UpdateBlogStatus = ({ closeModal, modalIsOpen, id }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const updatedUser = {
      status: data.status,
    };

    fetch(`https://fathomless-dawn-94067.herokuapp.com/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          cogoToast.success("User role updated successfully");
          closeModal();
        } else {
          cogoToast.error("something went wrong");
          closeModal();
        }
      });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="User Role Modal"
    >
      <button onClick={closeModal} className="text-red-600">
        close
      </button>
      <div>
        <h1 className="text-2xl font-bold py-4 text-center">Update Role</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-56">
        <select
          className="w-full block text-black border px-3 py-2 my-5 rounded focus:outline-none "
          {...register("status", { required: true })}
        >
          update role
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>

        <div className="text-center">
          <input
            className="border btn-outline-light px-4 py-2 rounded cursor-pointer hover:shadow-gray-100"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </Modal>
  );
};

export default UpdateBlogStatus;
