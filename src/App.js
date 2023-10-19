import "./input.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/Routes/AboutMe";
import { useEffect, useState } from "react";
import { Text, StyleSheet, useColorScheme, View } from 'react-native';
import { Route, Routes } from "react-router-dom";
import React from "react";

// Routes
// import Home from "./components/Home";
import Resume from "./components/Routes/Resume";

// -subRoutes
import Polytopia from "./components/ProjectsFolder/Polytopia";
import ProjectTwo from "./components/ProjectsFolder/ProjectTwo";
import Project3 from "./components/ProjectsFolder/Project3";
import ProjectsPage from "./components/Routes/ProjectsPage";



function App() {

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);


  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const screenSize = windowSize.innerWidth;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);

      // for width only
      let widthInt = window.innerWidth;
      setWindowWidth(widthInt);
      // setWindowWidth([windowWidth.innerWidth]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);





  const [darkModeSwitch, setDarkModeSwitch] = useState(true);

  const handleDarkModeSwitch = () => {
    setDarkModeSwitch(!darkModeSwitch);
  }


  let lightDarkSwitch =
    <div onClick={handleDarkModeSwitch} id="dark-mode-toggle"
      className={`absolute  ${windowWidth > 700 ?  'top-24 w-12 right-0 rounded-l-lg' : 'top-1  w-12 h-auto left-0 rounded-r-lg'}  inline-block cursor-pointer   text-zinc-200 dark:text-zinc-900 p-2 text-3xl`}>
      <i className='fa-solid fa-sun dark:hidden' style={{color: "#f7a531",}}></i>
      <i className='fa-solid fa-moon hidden dark:inline'></i>
    </div>

  return (
    <div className={darkModeSwitch ? 'dark' : `light `}>
{/*   this adds it to the whole body instead  <div className={darkModeSwitch ? `dark ${document.body.classList.add('dark')} ${document.body.classList.remove('light')} ` : `light ${document.body.classList.add('light')} ${document.body.classList.remove('dark')}  `}> */}
            <div>
             <div>
               <Navbar />
             </div>
               {lightDarkSwitch}
           </div>


      <div className="px-4  md:pt-10">
        <div >
          <Routes>
            <Route path="/" element={<AboutMe darkModeSwitch={darkModeSwitch} />} />
            <Route path="resume" element={<Resume windowSize={windowWidth} />} />
            <Route path="projectsPage" element={<ProjectsPage />} />
            <Route path="/projectsPage/polytopia" element={<Polytopia />} />
            <Route path="/projectsPage/projecttwo" element={<ProjectTwo />} />
            <Route path="/projectsPage/projectthree" element={<Project3 />} />
          </Routes>
        </div>
      </div>

    </div>
  );
  // new
}

export default App;

