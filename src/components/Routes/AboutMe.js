import { useState, useEffect } from "react";
import Card from "./Card";

export default function AboutMe() {
  let nodeImage = `${process.env.PUBLIC_URL}/images/nodeJS.png`;
  let cImage = `${process.env.PUBLIC_URL}/images/Cimg.png`;
  let gitHub = `${process.env.PUBLIC_URL}/images/github.png`;
  let restAPI = `${process.env.PUBLIC_URL}/images/RestApi.png`;


  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="">


    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12
      lg:col-start-1 lg:col-end-5
       xl:col-start-2 xl:col-end-5">
        <Card />
      </div>

      <div className="col-span-12
      lg:col-start-5 lg:col-end-12
      xl:col-start-6 xl:col-end-12
      ">
        <div className="card-body">

          <div className="pb-5">
            <h1 className=" text-3xl font-bold">
              About Me
            </h1>
            <p className="text-xl">

              As a junior front-end developer, I am proficient in React, HTML, CSS,
              and JavaScript. With my skills and knowledge, I am able to create dynamic
              and responsive user interfaces that make a lasting impression. I am very familiar
              in the principles of React and can leverage them to create reusable components,
              effectively architect applications, and deliver performant solutions.
            </p>

            <p className="text-xl my-2">
            I have strong problem-solving abilities, detail-orientation, and great communication skills.
            I am passionate about crafting meaningful user experiences and am always eager to stay
            up-to-date with the latest trends and techniques in front-end development. In summary,
            I am a motivated and capable junior front-end developer who brings a strong foundation in
            React, HTML, CSS, and JavaScript to any team.
            </p>
          </div>
          <div className="pb-5">
            <h2 className=" text-3xl font-bold">
              What I Do
            </h2>
            <p className="text-xl">
              I specialize in Single Page Applications in React creating
              websites that do not have to send multiple server requests to
              load.{" "}
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4 pb-5">
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-2xl font-bold">
                Application Development
              </h2>
              <p className="text-xl">
                Developing applications using a top-down methodology approach,
                handling events and driving user interfaces with a data-first
                approach.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h2 className=" text-2xl font-bold">Front-End Design</h2>
              <p className="text-xl">
                Leveraging front-end frameworks that implement mobile first
                design to create a beautiful UI/UX on the web.{" "}
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-2xl font-bold">
                API Creation & Consumption
              </h2>
              <p className="mt-2 text-xl">
                Managing application state with NodeJS and producing adaptable
                REST APIs.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-2xl font-bold">DOM Manipulation</h2>
              <p className="text-xl">
                Working with front-end interfaces Document Object Models are
                essential for user friendly experiences.
              </p>
            </div>
          </div>

          <h2 className=" text-xl text-center pb-3">
            Favorite Technologies
          </h2>

          <div className="grid grid-cols-12 justify-items-center gap-4 flex-wrap">
            <div className="col-span-6 md:col-span-3 pb-5">
              <img
                className="w-4/6 md:w-1/2 mx-auto pb-3"
                src={cImage}
                alt="react img"
              />
              <p className="text-center">C</p>
            </div>
            <div className="col-span-6 md:col-span-3 pb-5">
              <img
                className="w-4/6 md:w-1/2 mx-auto pb-3"
                src={nodeImage}
                alt="react img"
              />
              <p className="text-center">Node.js</p>
            </div>
            <div className="col-span-6 md:col-span-3 pb-5">
              <img
                className="w-4/6 md:w-1/2 mx-auto pb-3"
                src={restAPI}
                alt="react img"
              />
              <p className="text-center">Rest APIs</p>
            </div>
            <div className="col-span-6 md:col-span-3 pb-5">
              <img
                className="w-4/6 md:w-1/2 mx-auto pb-3"
                src={gitHub}
                alt="react img"
              />
              <p className="text-center">GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
