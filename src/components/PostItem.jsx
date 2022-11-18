import React from "react";
import '../styles/App.css'
import MyButton from "./UI/Button/MyButton";
const PostItem = (props,) => {

   return (
      <div className='post'>
        <div className='post__contrnt'>
          <strong className="post__title">{props.post.id}. {props.post.title}</strong>
          <div className="post__subtitle">{props.post.subtitle}</div>
        </div>
        <div className='post__btn'>
          <MyButton onClick={()=> props.remove(props.post)}>Удалить</MyButton>
        </div>
      </div>
   )
}

export default PostItem