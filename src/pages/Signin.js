import React from "react";
import GoogleSignin from "../components/authentication/GoogleSignin";
import LoginForm from "../components/authentication/LoginForm";
import Header from "../components/shared/header/Header";

const Signin = () => {
  return (
    <section className="">
      <Header />
      <div
        className="md:w-9/12 w-11/12 mx-auto py-5 flex items-center justify-center"
        style={{ height: "90vh" }}
      >
        <div className="bg-gray-800 py-7 px-3 text-white rounded">
          <h1> Sign in!</h1>
          <LoginForm />
          <GoogleSignin />
        </div>
      </div>
    </section>
  );
};

export default Signin;
