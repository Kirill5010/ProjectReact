import React from "react";
import '../styles/App.css'
import MyButton from "./UI/Button/MyButton";
const PostItem = (props,) => {

   return (
      <div className='post'>
        <div className='post__contrnt'>
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>{props.post.subtitle}</div>
        </div>
        <div className='post__btn'>
          <MyButton onClick={()=> props.remove(props.post)}>REMOVE</MyButton>
        </div>
      </div>
   )
}

export default PostItem