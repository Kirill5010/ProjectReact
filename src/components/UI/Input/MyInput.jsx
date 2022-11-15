import React from "react";
import './MyInput.modules.css'
const MyInput = (props) => {
   return (
       <input {...props} className='myInp'></input>
   )
}

export default MyInput