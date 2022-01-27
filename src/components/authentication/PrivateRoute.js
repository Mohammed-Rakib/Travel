import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ReactLoading from "react-loading";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser, isLoading } = useAuth();
  if (isLoading) {
    return (
      <section
        className="flex items-center justify-center"
        style={{ height: "100vh" }}
      >
        <ReactLoading type="spokes" color="#000" height="60px" width="60px" />
      </section>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
