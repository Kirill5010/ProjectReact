import React from "react";
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/select/MySelect";
const PostFilter = ({filter, setFilter}) => {
    return (
      <div>
      <MyInput 
      placeholder='Пойск...'
      value={filter.query}
      onChange={(e)=> setFilter({...filter, query: e.target.value})}
      />
      <MySelect 
        defaultValue={'Сортировка'}
        value={filter.sort}
        onChange={selctedSort => setFilter({...filter, sort: selctedSort})}
        options={[
          {value: 'title', name: 'По заголовку'},
          {value: 'subtitle', name: 'По описанию'}
        ]}
      />
      </div>
    )
}

export default PostFilter