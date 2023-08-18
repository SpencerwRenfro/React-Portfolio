import React, { useState, useEffect } from 'react';
import '../../CSS/reactions.css';



// pngs
import Like from './images/Reactions/like.png';
import Heart from './images/Reactions/heart.png';
import Wow from './images/Reactions/wow.png';
import Laugh from './images/Reactions/laugh.png';
import Sad from './images/Reactions/sad.png';
import Angry from './images/Reactions/angry.png';

// New small file gifs
import EmojiAngry from './images/Gifs/Emoji_Angry.gif';
import EmojiCare from './images/Gifs/Emoji_Loved.gif';
import EmojiWow from './images/Gifs/Emoji_Wow.gif';
import EmojiHaHa from './images/Gifs/Emoji_haha.gif';
import EmojiLike from './images/Gifs/Emoji_Like.gif';
import EmojiSad from './images/Gifs/Emoji_Sad.gif';


// styled components
// import styled from 'styled-components'
import styles from '../../CSS/reactions.module.css';

export default function Reactions() {


    // on and off switch for mobile like button

    let [likeSwitch, setLikeSwitch] = useState(false);

    function handleLikeSwitch(event) {
            setLikeSwitch(current => !current);    
    }





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


    let like = Like;
    let heart = Heart;
    let wow = Wow;
    let laugh = Laugh;
    let sad = Sad;
    let angry = Angry;

    const [likeReaction, setLikeReaction] = useState(false);
    const [reactionClass, setReactionClass] = useState('');
    const [commentClicked, setCommentClicked] = useState(false);


    const reactionHandler = (event) => {
        console.log(event.target.id + " clicked");
        if (event.target.id === "like") {
            setReactionClass(like)
            console.log('this is the reaction class name: ' + reactionClass)
        } else if (event.target.id === "heart") {
            setReactionClass(heart)
            console.log('this is the reaction class name: ' + reactionClass)
        } else if (event.target.id === "wow") {
            setReactionClass(wow)
            console.log('this is the reaction class name: ' + reactionClass)
        } else if (event.target.id === "laugh") {
            setReactionClass(laugh)
            console.log('this is the reaction class name: ' + reactionClass)
        } else if (event.target.id === "sad") {
            setReactionClass(sad)
            console.log('this is the reaction class name: ' + reactionClass)
        } else if (event.target.id === "angry") {
            setReactionClass(angry)
            console.log('this is the reaction class name: ' + reactionClass)
        }
    }


    return (
        <div>
            <div className="post-interactions ">


   
                            {
                              
                        windowSize[0] <= 780 ?  

                        <button onClick={handleLikeSwitch} className={`${likeSwitch ? styles.button : styles.plainButton}`}>Like
                            <span className="facebook-span bg-base-100 shadow-xl">
                            <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiLike} alt="" id="like" /></button>
                            <button onClick={reactionHandler}>  <img className="img-transform facebook-img" src={EmojiCare} alt="" id="heart" /></button>
                            <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiWow} alt="" id="wow" /></button>
                            <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiHaHa} alt="" id="laugh" /></button>
                            <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiSad} alt="" id="sad" /></button>
                            <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiAngry} alt="" id="angry" /></button>
                        </span>
                        </button>
                        : <button className={`reaction-button ${reactionClass.trim().length > 1 ? `${reactionClass}` : ''}`}>
                            Like
                            <span className="facebook-span bg-base-100 shadow-xl">
                            <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiLike} alt="" id="like" /></button>
                            <button onClick={reactionHandler}>  <img className="img-transform facebook-img" src={EmojiCare} alt="" id="heart" /></button>
                            <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiWow} alt="" id="wow" /></button>
                            <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiHaHa} alt="" id="laugh" /></button>
                            <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiSad} alt="" id="sad" /></button>
                            <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiAngry} alt="" id="angry" /></button>
                            {/* removed className transparent from all buttons */}
                        </span>
                        </button>
                            }
           
                <button className='reaction-button'>comment</button>
                <button className='reaction-button '>share</button>
            </div>
            <img src={reactionClass} className="facebook-img" alt="" />
            <img src={''} className="facebook-img" alt="" />
            <div >
            </div>

        </div>
    );
}


// styled components
// import styled from 'styled-components'
// import styles from '../../CSS/CSS/reactions.module.css';

// export default function Reactions() {


    // on and off switch for mobile like button

    // let [likeSwitch, setLikeSwitch] = useState(false);

    // function handleLikeSwitch(e) {
        // if(windowSize[0] > 780){
        //     return;
        // }
        // console.log("switch is " + likeSwitch);
        //  my version
        // setLikeSwitch(!likeSwitch);
        // internet
        // console.log("before switch " + likeSwitch);
        // setLikeSwitch(current => !current);
        // console.log("after switch " + likeSwitch);

    // }



    // const On = `
    //     background-color: transparent,
    //     border: solid, px, green;
    //     &:first-child:hover> span {
    //         top: -62px;
    //         opacity: 1;
    //         pointer-events: auto;
    //     }
    // `;

    // let on = `border: solid 3px green;`
    //     background-color: "transparent",
    // }.reaction-button:first-child:hover> span{
    //     top: -62px;
    //     opacity: 1;
    //     pointer-events: auto;
    //   }

    // const [windowSize, setWindowSize] = useState([
    //     window.innerWidth,
    //     window.innerHeight,
    // ]);

    // useEffect(() => {
    //     const handleWindowResize = () => {
    //         setWindowSize([window.innerWidth, window.innerHeight]);
    //     };

    //     window.addEventListener('resize', handleWindowResize);

    //     return () => {
    //         window.removeEventListener('resize', handleWindowResize);
    //     };
    // }, []);


    // let like = Like;
    // let heart = Heart;
    // let wow = Wow;
    // let laugh = Laugh;
    // let sad = Sad;
    // let angry = Angry;

    // const [likeReaction, setLikeReaction] = useState(false);
    // const [reactionClass, setReactionClass] = useState('');
    // const [commentClicked, setCommentClicked] = useState(false);


    // const reactionHandler = (event) => {
    //     console.log(event.target.id + " clicked");
    //     if (event.target.id === "like") {
    //         setReactionClass(like)
    //         console.log('this is the reaction class name: ' + reactionClass)
    //     } else if (event.target.id === "heart") {
    //         setReactionClass(heart)
    //         console.log('this is the reaction class name: ' + reactionClass)
    //     } else if (event.target.id === "wow") {
    //         setReactionClass(wow)
    //         console.log('this is the reaction class name: ' + reactionClass)
    //     } else if (event.target.id === "laugh") {
    //         setReactionClass(laugh)
    //         console.log('this is the reaction class name: ' + reactionClass)
    //     } else if (event.target.id === "sad") {
    //         setReactionClass(sad)
    //         console.log('this is the reaction class name: ' + reactionClass)
    //     } else if (event.target.id === "angry") {
    //         setReactionClass(angry)
    //         console.log('this is the reaction class name: ' + reactionClass)
    //     }
    // }


    // return (
        // <div>
        //     <div className="post-interactions ">

                {/* <button className={`reaction-button {reactionClass.length > 1 ? `${reactionClass}` : '' }}}> */}
                {/* <div className={`${windowSize[0] <= 780 ? 'display-none' : 'md:navbar-start pl-10'}`}> */}
                {/* <button className={`reaction-button ${reactionClass.trim().length > 1 ? `${reactionClass}` : ''}`}> */}
                // <div>
                    {/* {
                        windowSize[0] <= 780 ?  
                        <button onClick={handleLikeSwitch} className={`${likeSwitch ? styles.button : ''}`}></button>
                        : <button className={`reaction-button ${reactionClass.trim().length > 1 ? `${reactionClass}` : ''}`}></button>
                         
                    } */}
                // <h1>WINDOW SIZE {windowSize[0]}</h1>
            
                // </div>

                {/* <button onClick={handleLikeSwitch} className={`${likeSwitch ? styles.button : ''}`}> */}
                // <button className={`reaction-button ${reactionClass.trim().length > 1 ? `${reactionClass}` : ''}`}>
                {/* <button className={styles.button}> */}

    
           
//                     like
//                         <span className="facebook-span ">
//                             <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiLike} alt="" id="like" /></button>
//                             <button onClick={reactionHandler}>  <img className="img-transform facebook-img" src={EmojiCare} alt="" id="heart" /></button>
//                             <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiWow} alt="" id="wow" /></button>
//                             <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiHaHa} alt="" id="laugh" /></button>
//                             <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiSad} alt="" id="sad" /></button>
//                             <button onClick={reactionHandler}> <img className="img-transform facebook-img" src={EmojiAngry} alt="" id="angry" /></button>
                   
//                         </span>
//                 </button>
//                 <button className='reaction-button'>comment</button>
//                 <button className='reaction-button'>share</button>
//             </div>
//             <img src={reactionClass} className="facebook-img" alt="" />
//             <img src={''} className="facebook-img" alt="" />
//             <div >
//             </div>

//         </div>
//     );
// }