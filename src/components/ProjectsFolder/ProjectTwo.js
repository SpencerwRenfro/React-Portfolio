import FaceBookBrain from "../FacebookFolder/FaceBookBrain.js";
import { useState, useEffect } from 'react';

export default function ProjectTwo(props) {
    const fbGif2 = `${process.env.PUBLIC_URL}/Gifs/facebook-reactions-recording2.gif`;
    let icon = `${process.env.PUBLIC_URL}/images/svgs/fbicon.svg`
    let fbIcon = `${process.env.PUBLIC_URL}/images/svgs/fbIcon.svg`


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



    return (
        <div>
            <div className="pt-5 pb-5">
                <div>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 
                                lg:col-start-1 lg:col-end-7
                                xl:col-start-2 xl:col-end-8">
                            <img src={fbIcon} alt="Shoes" />
                        </div>

                        <div className="col-span-12 
                                lg:col-start-8 lg:col-end-12
                                xl:col-start-9 xl:col-end-12 ">
                            <h1 className="text-6xl justify-center">Facebook</h1>
                            <h2 className="text-6xl justify-center">Reactions</h2>

                            <p className="text-xl pt-10">
                                This is a project from Teamtreehouse that I added React to, this project works by utilizing the pop-up hover state, I used CSS transitions to animate the appearance and
                                disappearance of the hover state. I used the opacity property to gradually change the transparency
                                of the hover state, while also using the z-index property to ensure that the hover state appears on
                                top of the other elements on the page. Additionally, I used the transform property to scale up the
                                size of the hover state, making it more noticeable to the user.
                                </p>
                                <p className="text-xl pt-10">
                                I also added React useState into this project to render which emoji the user clicks. This works by passing a function 
                                to the onClick for the like button, and having that function call the setState and set it equal to the event.target.id
                                </p>
                                <p className="text-xl pt-10">
                                Overall, this React project is a fun example of how CSS and React can be combined to create engaging
                                user interactions on a web page. By using simple animations and hover states, we can make a static page
                                more interactive and engaging for users.
                                </p>
                            <div className="pt-10">
                                <FaceBookBrain />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

