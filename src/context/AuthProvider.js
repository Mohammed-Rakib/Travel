import React, { createContext } from "react";
import useBlogs from "../hooks/useBlogs";
import useFirebase from "../hooks/useFirebase";
import useUsers from "../hooks/useUsers";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const {
    currentUser,
    error,
    isLoading,
    signupWithEmailAndPassword,
    signInWithGoogle,
    logInWithEmailAndPassword,
    logOut,
  } = useFirebase();

  const { users } = useUsers();
  const { blogs } = useBlogs();

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        users,
        blogs,
        error,
        isLoading,
        signupWithEmailAndPassword,
        signInWithGoogle,
        logInWithEmailAndPassword,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
