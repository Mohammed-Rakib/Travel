import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import cogoToast from "cogo-toast";

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
const UserModal = ({ closeModal, modalIsOpen, user }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const updatedUser = {
      username: user.username,
      email: user.email,
      role: data.role,
    };

    fetch("https://fathomless-dawn-94067.herokuapp.com/users", {
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
          {...register("role", { required: true })}
        >
          update role
          <option value="user">User</option>
          <option value="admin">Admin</option>
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

export default UserModal;
