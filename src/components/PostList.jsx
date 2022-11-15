import React from "react";
import PostItem from "./PostItem.jsx";

const PostList = (props,) => {
   if(!props.posts.length) {
      return (
          <div className='none'>Список постов пуст!</div>
      )
   }
   return (
   <div>
    <h1 className='title'>{props.title}</h1>
      {props.posts.map(post => <PostItem remove={props.remove} post={post}/>)}
   </div>
   )
}

export default PostList