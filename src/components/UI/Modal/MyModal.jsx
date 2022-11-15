import React from "react";
import './MyModal.modules.css'

const MyModal = ({children, show, setShow}) => {

const rootClass = ['my-modal']
if(show) {
   rootClass.push('my-modal_active')
}

   return (
     <div className={[rootClass.join(' ')]} onClick={()=> setShow(false)}>
        <div className="my-modal__content" onClick={(e)=> e.stopPropagation()}>
         {children}
        </div>
     </div>
   )
}

export default MyModal