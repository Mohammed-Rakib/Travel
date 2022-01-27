import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch(
      "https://fathomless-dawn-94067.herokuapp.com/users"
    );
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, [users]);
  return { users };
};

export default useUsers;
