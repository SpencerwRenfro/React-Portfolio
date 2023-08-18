import '../../input.css';

import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";

function ProjectsPage() {
    let fbIcon = `${process.env.PUBLIC_URL}/images/svgs/fbIcon.svg`
    let poly = `${process.env.PUBLIC_URL}/images/Warrior.png`
    let login = `${process.env.PUBLIC_URL}/images/login.jpg`
    let sword = `${process.env.PUBLIC_URL}/images/Swordsman.png`
    return (
        <div className="h-full">

            <div>
                <h1 className="text-center text-7xl p-10 "> Projects Page</h1>
            </div>
           
                <div className="container flex gap-8">

                    <div className="polyImg shadow-xl rounded-xl">
                        <NavLink to="/projectsPage/polytopia">
                            <div>
                                <img className="enlarge" src={sword} alt="" />
                            </div>


                            <div className="card-body">
                                <h2 className="card-title">Polytopia</h2>
                    
                            </div>
                        </NavLink>
                    </div>

                    <div className="fbImg rounded-xl shadow-xl" >
                        <NavLink to="/projectsPage/projecttwo">
                            <img src={fbIcon} alt="" />

                            <div className="card-body">
                                <h2 className="card-title">Facebook Reactions</h2>
                      
                            </div>
                        </NavLink>
                    </div>

                    <div className="loginImg rounded-xl  shadow-xl " >
                        <NavLink to="/projectsPage/projectthree">
                            <img className="loginRadious" src={login} alt="" />
                            <div className="card-body">
                                <h2 className="card-title">Login Form</h2>
                         
                            </div>
                        </NavLink>
                    </div>
                </div>
        </div>
    )
}

export default ProjectsPage