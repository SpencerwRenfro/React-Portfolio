import React from 'react';
import { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import PDF from '../../spencer-renfro-resume-2023.pdf'



export default function Card() {

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);

      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

      const openPdfInNewTab = () => {
        const pdfUrl = 'http://www.google.com';
        window.open(pdfUrl, '_blank');
      };


    let profileImage = `${process.env.PUBLIC_URL}/images/me.png`;

  /**
     // fetch request
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch("../SpencerResume.pdf").then((response) => {
          response.blob().then((blob) => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Spencer-Renfro-Resume.pdf";
            alink.click();
          });
        });
    }
    */
 // end

//  const onButtonClick = () => {
//   // using Java Script method to get PDF file
//   fetch("../SpencerResume.pdf").then((response) => {
//     response.blob().then((blob) => {
//       console.log(response.blob);
//       response.blob = new Blob(response, {type: "application/pdf"});
//       console.log(response.blob);
//       // Creating new object of PDF file
//       const fileURL = window.URL.createObjectURL(blob);
//       // Setting various property values
//       let alink = document.createElement("a");
//       alink.href = fileURL;
//       alink.download = "Spencer-Renfro-Resume.pdf";
//       alink.click();
//     });
//   });
// }


    return (
          <div className="card shadow-2xl profile-card">
                <div className="card-body ">


                    <figure>
                        <img className="profile-image" src={profileImage} alt="Spencer Renfro" />
                    </figure>
                    <h2 className={`${windowSize[0] >= 560 ? 'display-none' : ''} self-center p-1.5 rounded-lg `}>Spencer W Renfro</h2>

                    <h3 className={`${windowSize[0] >= 560 ? 'display-none' : ''}  self-center p-1.5 rounded-lg`}>Front End Developer</h3>



                    <div className="grid grid-cols-12 gap-2  pt-5 pb-5">

                        <a className="col-span-12 btn btn-primary" href="https://github.com/SpencerwRenfro?tab=projects" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                        <a className=" col-span-12 btn btn-primary" href="https://www.linkedin.com/in/spencer-renfro-854b22174/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                          <a className="col-span-12 btn btn-primary"  href={PDF} target="_blank" rel="noopener noreferrer" >Resume</a>
                    </div>

                    <div>
                        <ul className=" p-2 rounded-lg flex flex-col lg:pt-10 lg:pb-10">
                            <li> Phone: 217-313-4416</li>
                            <li>Location: Boulder CO</li>
                            <li>Email: Developer@spencerwrenfro.com</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}