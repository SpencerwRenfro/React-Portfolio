import "../../input.css";

import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function ProjectsPage() {
  let fbIcon = `${process.env.PUBLIC_URL}/images/Facebook_Logo.png`;
  let poly = `${process.env.PUBLIC_URL}/images/Warrior.png`;
  let login = `${process.env.PUBLIC_URL}/images/login.jpg`;
  let sword = `${process.env.PUBLIC_URL}/images/Swordsman.png`;
  return (
    <div className="h-100">
      <div>
        <h1 className="text-center text-7xl "> Projects Page</h1>
      </div>

      <div className="container flex gap-8">

        {/* <div className="polyImg shadow-xl rounded-xl">
          <NavLink to="/projectsPage/polytopia">
            <div>
              <img className="enlarge" src={sword} alt="" />
            </div>

            <div className="card-body">
              <h2 className="card-title">Polytopia</h2>
            </div>
          </NavLink>
        </div> */}

        {/* <div className="fbImg rounded-xl shadow-xl flex justify-items-center">
          <NavLink to="/projectsPage/projecttwo">
            <div className="flex justify-center">
              <img className="w-64 h-64" src={fbIcon} alt="" />
            </div>
          </NavLink>

            <h2 className="self-end  card-title">
              Facebook Reactions
            </h2>

        </div> */}

        {/* <div className="loginImg rounded-xl  shadow-xl ">
          <NavLink to="/projectsPage/projectthree">
            <img className="loginRadious" src={login} alt="" />
            <div className="card-body">
              <h2 className="card-title">Login Form</h2>
            </div>
          </NavLink>
        </div> */}

      </div>
      <div className=" lg:flex gap-12 justify-center pb-20">
        <div
          className=" shadow-xl rounded-xl flex flex-col items-center p-5"
          // style={{ border: "solid 3px black", maxWidth: "500px" }}
        >
          <NavLink to="/projectsPage/polytopia">
            <div className="flex justify-items-center">
              <img alt="" className="w-96 h-96" src={poly} />
            </div>
            <h1 className="card-title mt-10">Polytopia</h1>
          </NavLink>
        </div>
        <div
          className=" shadow-xl rounded-xl flex flex-col items-center p-5"
          // style={{ border: "solid 3px black", maxWidth: "500px" }}
        >
          <NavLink to="/projectsPage/projecttwo">
            <div className="flex justify-items-center">
              <img alt="" className="w-96 h-96" src={fbIcon} />
            </div>
            <h1 className="card-title mt-10">Facebook Reactions</h1>
          </NavLink>
        </div>
        <div
          className=" shadow-xl rounded-xl flex flex-col items-center p-5 "
          // style={{ border: "solid 3px black", maxWidth: "500px" }}
        >
          <NavLink to="/projectsPage/projectthree">
            <div className="flex justify-items-center">
              <img alt="" className="w-96 h-96" src={login} />
            </div>
            <h1 className="card-title mt-10">Login Form</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
