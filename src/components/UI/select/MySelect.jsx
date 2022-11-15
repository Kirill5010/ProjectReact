import React from "react";
import './MySelect.modules.css'

const MySelect = ({options, defaultValue, value, onChange}) => {

   return (
        <select className="my-select" value={value} onChange={(e)=> onChange(e.target.value)}>
          <option disabled>{defaultValue}</option>
          {options.map(option => <option key={option.value} value={option.value}>
            {option.name}
          </option>)}
        </select>
   )
}

export default MySelect