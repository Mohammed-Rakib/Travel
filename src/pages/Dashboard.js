import React from "react";
import DashboardRoutes from "../components/dashboard/DashBoardRoutes";
import { useRouteMatch, Route, Link } from "react-router-dom";
import Blogs from "../components/dashboard/Blogs";
import Users from "../components/dashboard/Users";
import Reviews from "../components/dashboard/Reviews";

const Dashboard = () => {
  let { path } = useRouteMatch();

  return (
    <section className=" lg:w-9/12 w-11/12 mx-auto md:grid grid-cols-12">
      {/* routes */}
      <div className="py-5 lg:col-span-2 md:col-span-4 md:h-screen">
        <h1 className=" pb-5">
          <Link to="/">
            <span className="lg:text-4xl md:text-4xl text-2xl font-bold">
              <span className="text-pink-500">Tr</span>
              <span className="text-gray-600">avel</span>
            </span>
          </Link>
        </h1>
        <DashboardRoutes />
      </div>
      {/* details */}
      <div className="my-5 lg:col-span-10 md:col-span-8 bg-gray-100 md:p-10 p-5">
        <Route exact path={`${path}`}>
          <Blogs />
        </Route>
        <Route path={`${path}/blogs`}>
          <Blogs />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
        <Route path={`${path}/users`}>
          <Users />
        </Route>
      </div>
    </section>
  );
};

export default Dashboard;
