import "../../input.css";

import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function ProjectsPage() {
  let fbIcon = `${process.env.PUBLIC_URL}/images/Facebook_Logo.png`;
  let poly = `${process.env.PUBLIC_URL}/images/Warrior.png`;
  let login = `${process.env.PUBLIC_URL}/images/login.jpg`;

  return (
    <div className="h-100">
      <div>
        <h1 className="text-center text-7xl "> Projects Page</h1>
      </div>

      <div className="container flex gap-8">


      </div>
      <div className=" lg:flex gap-12 justify-center pb-20">
        <div
          className=" shadow-xl rounded-xl flex flex-col items-center p-5"
        >
          <NavLink to="/projectsPage/polytopia">
            <div className="flex justify-items-center">
              <img alt="" className="w-72 h-72 lg:w-96 lg:h-96" src={poly} />
            </div>
            <h1 className="card-title mt-10 justify-center">Polytopia</h1>
          </NavLink>
        </div>
        <div
          className=" shadow-xl rounded-xl flex flex-col items-center p-5"

        >
          <NavLink to="/projectsPage/projecttwo">
            <div className="flex justify-items-center">
              <img alt="" className="w-72 h-72 lg:w-96 lg:h-96" src={fbIcon} />
            </div>
            <h1 className="card-title mt-10 justify-center">Facebook Reactions</h1>
          </NavLink>
        </div>
        <div
          className=" shadow-xl rounded-xl flex flex-col items-center p-5 "

        >
          <NavLink to="/projectsPage/projectthree">
            <div className="flex justify-items-center">
              <img alt="" className="w-72 h-72 lg:w-96 lg:h-96" src={login} />
            </div>
            <h1 className="card-title mt-10 justify-center">Login Form</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
