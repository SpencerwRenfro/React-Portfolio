
import { useState,useEffect } from 'react'


export default function Polytopia() {
    const rGif = `${process.env.PUBLIC_URL}/Gifs/Polytopia-React-recording2.gif`;
    const cGif = `${process.env.PUBLIC_URL}/Gifs/Polytopia-C-recording2.gif`;
    const jsGif = `${process.env.PUBLIC_URL}/Gifs/Polytopia-JS-recording.gif`;
    const polyImg = `${process.env.PUBLIC_URL}/images/Warrior.png`;

    let [emptyGif, setEmptyGif] = useState(rGif);

    let [reactGif, setReactGif] = useState(false);
    let [javascriptGif, setJavascriptGif] = useState(false);
    let [cImage, setCImage] = useState(false);

 

    const sizeOne = 
    {
        height: '400px',
        width: '300px'
    }

      const sizeTwo = 
         {
            height: '300px',
            width: '250px'
        };
      

      const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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


    function gifHandler(e) {
        console.log(e.target.innerHTML);
        if (e.target.innerHTML === 'React Preview') {
            console.log('React verified');
            setReactGif(true);
            setEmptyGif(rGif);
            console.log(emptyGif + '   empty React gif')
            if (e.target.HTML === 'close') {
                setReactGif(false);
                console.log('React closed');
            }
            // setJavascriptGif = false;
            // setCImage = false;

        } else if (e.target.innerHTML === 'C-code Preview') {
            console.log('C verified');
            setCImage(true);
            // setReactGif = false;
            // setJavascriptGif = false;
            setEmptyGif(cGif);
            console.log(emptyGif + ' empty C');
            if (e.target.HTML === 'close') {
                setCImage(false);
                console.log('C closed');
            }
        } else if (e.target.innerHTML === 'JavaScript Preview') {
            console.log('javascript verified');
            setJavascriptGif(true);
            // setCImage = false;
            // setReactGif = false;
            setEmptyGif(jsGif);
            console.log(emptyGif + ' empty JS');
            if (e.target.HTML === 'close') {
                setJavascriptGif(false);
                console.log('js closed');
            }
        }

    }

    return (
        <div className=" py-5 px-10">
            <div className="grid grid-cols-12">
                <div className="col-span-12 
                                lg:col-start-1 lg:col-end-7
                                xl:col-start-4 xl:col-end-8">
                    <img style={windowWidth > 700 ? sizeOne : sizeTwo} src={polyImg} alt="Warrior" />
                </div>

                <div className="col-span-12 
                                lg:col-start-8 lg:col-end-12
                                xl:col-start-9 xl:col-end-12 ">
                {/* "col-span-12 lg:col-span-4" */}
                    <h1 className=" pt-10 text-3xl justify-center font-bold ">Polytopia</h1>
                    <h2 className="text-2xl justify-center">Battle Calculator</h2>
                    <p className="text-xl pt-10">
                        Polytopia is a 2D chess like strategy game where you build an army, and conqure the enemy villages
                    </p>
                    <p className="text-xl pt-10">
                        For each attack there is a formula that is done that is based off the attackers health, attack rating,
                        as well as the defenders health, defense rating, and even attack force (if the defender is not killed
                        during attackers attack there is retaliation damage done to the attacker)
                    </p>

                </div>

            </div>
 
            <div className=" pt-10 lg:ml-10 lg:px-20  card  shadow-xl  ">
           
                <h2 className="mt-10 text-3xl font-bold">What it does</h2>
                <p className="mt-2 text-xl">This is a damage calculator that the mobile game of Polytopia uses for their characters. This allows you to select the type of character you
                    want to see the battle results of, while being able to change some input variables of the game. Variables such as, input health, defense, poison,
                    attack boost and veteran.
                </p>
                <h2 className="mt-10 text-3xl font-bold" >Challenge</h2>
                <p className="mt-2 text-xl">
                    I had no issues developing this code in C, but it was not user friendly in the version I initially developed. Having to only use keyboard inputs,
                    it was not ideal, so my next step was to take this to JavaScript, and being able to use markup languages and DOM interaction. This made my project
                    more complex to create a user friendly design. Lastly I joined with a senior developer to take this project further with React.js. The change from vanilla javascript to React was huge in this project’s user interface. Functionally, the code is the same in all three projects, but in React it is dynamically changing the user’s selection and rendering images and automatically generating the results based on the selection.
                </p>

                <h2 className="mt-10  text-3xl font-bold ">Transitions: C-Code</h2>
                <p className="mt-2 text-xl" >This code works by importing a text file of the character data into an array on start, then the code will prompt the user for input of either an integer of the character name from the displayed list, following being prompted for a number input for the health. This is scanned then used to search the character array for a match, and the match if found will show the character data or display there was not a match. The user
                    is then prompted for other defense or attack bonuses and then lastly the battle results are calculated based on the users’ inputs. </p>
                <div className="flex justify-center">
                    <img className="p-6" src={cGif} alt="" />
                </div>


                <h2 className="mt-10  text-3xl font-bold">JavasCript</h2>
                <p className="mt-2 text-xl">This code is functionally the same but instead of prompting the user for inputs, the inputs are stored from onClick events using
                    the DOM. This layout was created by using two form layouts, one for the attacker and one for the defender. </p>
                <div className="flex justify-center">
                    <img className="p-6 " src={jsGif} alt="" />
                </div>
                <div className="previewButton flex justify-center">

                    {/* <label htmlFor="my-modal" className="btn btn-primary" onClick={gifHandler}>JavaScript Preview</label> */}
                </div>

                <h2 className="mt-10  text-3xl font-bold ">React</h2>
                <p className="mt-2 text-xl">
                    Lastly in React the user interface is much nicer with using a CSS framework of Tailwind, and I have incorporated an API to load all of the characters
                    with React Query instead of having all the character data hard coded.
                </p>
                <div className="flex justify-center">
                    <img className="p-6" src={rGif} alt="" />
                </div>
                <div className="previewButton flex justify-center">

                    {/* <label htmlFor="my-modal" className="btn btn-primary" onClick={gifHandler}>React Preview</label> */}
                </div>

                <input type="checkbox" id="my-modal" className="modal-toggle w-full" />
                <div className="modal w-full">
                    <div className=" w-3/4">
                        <div className="object-none w-full">

                            <img src={`${emptyGif.length > 0 ? `${emptyGif}` : ''}`} alt="" />
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn btn-primary" onClick={gifHandler}>close</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


