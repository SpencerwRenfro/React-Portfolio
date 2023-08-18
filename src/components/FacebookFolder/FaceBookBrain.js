import React, { useState } from 'react';
// import '../../App.css';
import Post from './Post';
import Header from './Header';



function FaceBookBrain(props) {

  const [comments, setComments] = useState([
  {text: '',
    id: ''
  }
  ]);

  const addCommentHandler = enteredText => {
    setComments(prevComment => {
      const updatedComment = [...prevComment];
      updatedComment.unshift({text: enteredText, id: Math.random().toString() })
      return updatedComment;
    });
};

let commentOne = `For mobile version just tap the like button once then select the emoji you would like to render.`

let commentTwo = 'For Desktop just hover over and select.'


  return (
    <div className='layout ' >
    <div className='facebook-card  bg-zinc-900'>
    <Post />
    <div className='py-5'>
    <Header commentOne={commentOne} commentTwo={commentTwo} />
    </div>
    </div>
    </div>
  );
}

export default FaceBookBrain;
