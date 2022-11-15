import React, { useState } from "react";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";


const PostForm = ({create}) => {
   const [title, setTitle] = useState('')
   const [subtitle, setSubtitle] = useState('')

   const addNuwPost = (e) => {
      e.preventDefault();
      const newPost = {
        id: Date.now(),
        title,
        subtitle
      }
      create(newPost)
      setTitle('')
      setSubtitle('')
   }

   return (
   <div>
      <form>
        <MyInput value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Название поста'></MyInput>
        <MyInput value={subtitle} onChange={(e) => setSubtitle(e.target.value)} type='text' placeholder='Описание поста'></MyInput>
        <MyButton onClick={addNuwPost} >Создать пост</MyButton>
      </form>
   </div>
   )
}


export default PostForm