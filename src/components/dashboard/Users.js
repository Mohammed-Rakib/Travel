import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import UserModal from "./UserModal";

const Users = () => {
  const { users } = useAuth();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [user, setUser] = useState(null);

  function openModal(user) {
    setIsOpen(true);
    setUser(user);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-pink-500 py-5">Users</h1>
      <div className="w-full block overflow-x-scroll overflow-y-hidden border-b-2">
        <table className="w-full" style={{ borderSpacing: 0 }}>
          <thead>
            <tr className="text-center">
              <th className="m-0 p-2 border border-black">Username</th>
              <th className="m-0 p-2 border border-black">Email</th>
              <th className="m-0 p-2 border border-black">Role</th>
              <th className="m-0 p-2 border border-black">Update role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              return (
                <tr key={user?._id} className="text-center">
                  <td className="m-0 p-2 border border-black">
                    {user?.username}
                  </td>
                  <td className="m-0 p-2 border border-black text-sm">
                    {user?.email}
                  </td>
                  <td className="m-0 p-2 border border-black">{user?.role}</td>
                  <td className="m-0 p-2 border border-black">
                    <button
                      onClick={() => openModal(user)}
                      className="px-2 py-1 rounded bg-pink-500 text-white"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* // user update modal */}
      <UserModal
        modalIsOpen={modalIsOpen}
        user={user}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Users;
