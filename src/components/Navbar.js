
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import "../CSS/index.css";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';


export default function Navbar(props) {

  const [windowSize, setWindowSize] = useState([window.innerWidth]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      // for width only
      let widthInt = window.innerWidth;
      setWindowSize(widthInt);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }







  return (

    <div className='main-nav'>
      <Disclosure as="nav" className=" shadow">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <div
                      className="inline-flex items-center border-b-2 hover:rounded-lg border-transparent  border-indigo-500 px-1 pt-1 text-sm font-medium "
                    >
                      <NavLink className="link no-underline text-center px-8 py-1 rounded-lg" to="/" end>About</NavLink>
                    </div>
                    <div
                      className="inline-flex items-center border-b-2 hover:rounded-lg border-transparent  border-indigo-500 px-1 pt-1 text-sm font-medium "
                    >
                      <NavLink className="link no-underline text-center px-8 py-1 rounded-lg" to="resume" >Education</NavLink>
                    </div>
                    <div
                      className="inline-flex items-center border-b-2 hover:rounded-lg border-transparent  border-indigo-500 px-1 pt-1 text-sm font-medium"

                    >
                      <NavLink className="link no-underline text-center px-8 py-1 rounded-lg" to="/projectsPage" >Projects</NavLink>

                    </div>
                  </div>
                </div>

                <div className="mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pb-3 pt-2">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button
                  as="a"
                  className="block border-l-4  border-b-2 hover:rounded-lg border-transparent  border-indigo-500 py-2 pl-3 pr-4 text-base font-medium text-gray-500"
                  >
                  <NavLink to="/" end>About</NavLink>
                </Disclosure.Button>


                <Disclosure.Button
                  as="a"
                  className="block border-l-4  border-b-2 hover:rounded-lg border-transparent  border-indigo-500 py-2 pl-3 pr-4 text-base font-medium text-gray-500"
                >
                  <NavLink to="resume" >Education</NavLink>
                </Disclosure.Button>


              </div>
              <Disclosure.Button
                as="a"
                className="block border-l-4  border-b-2 hover:rounded-lg border-transparent  border-indigo-500 py-2 pl-3 pr-4 text-base font-medium text-gray-500"
                >
                <NavLink  to="projectsPage" end>Projects Page</NavLink>
              </Disclosure.Button>

            </Disclosure.Panel>
          </>
        )}
      </Disclosure>





    </div>
  );
}

