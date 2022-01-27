import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/authentication/PrivateRoute";
import BlogDetails from "../pages/BlogDetails";
import Dashboard from "../pages/Dashboard";
import EditBlog from "../pages/EditBlog";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import WriteBlog from "../pages/WriteBlog";

const Navigation = () => {
  return (
    <>
      <Switch>
        <PrivateRoute path="/blogs/:id">
          <BlogDetails />
        </PrivateRoute>
        <PrivateRoute path="/blogs/edit/:id">
          <EditBlog />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/writeBlog">
          <WriteBlog />
        </PrivateRoute>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default Navigation;
