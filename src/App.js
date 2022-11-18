import React, { useMemo, useState } from 'react'
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyModal from './components/UI/Modal/MyModal';

import './styles/App.css'
function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Природа', subtitle: 'Великолепна'},
    {id: 2, title: 'Вода', subtitle: 'Чистая'},
    {id: 3, title: 'Москва', subtitle: 'Лучший город'},
    {id: 4, title: 'Яблоко', subtitle: 'Красное и сладкое'},
    {id: 5, title: 'Снег', subtitle: 'Хрустит'},
    {id: 6, title: 'Пирог', subtitle: 'Яблоко-вишня'},
  ])

const [filter, setFilter] = useState({sort: '', query: ''})
const [modal, setModal] = useState(false)

const sortedPost = useMemo(()=>{
  console.log('Отработала')

  if(filter.sort) {
    return [...posts].sort((a, b)=> a[filter.sort].localeCompare(b[filter.sort]))
 }
 return posts
}, [filter.sort, posts])

const sortedSearchQuery = useMemo(()=>{
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
}, [filter.query, sortedPost])


const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
}
const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
}


  return (
    <div className="App">
      <MyButton onClick={()=>setModal(true) }>Создать пост</MyButton>
      <MyModal show={modal} setShow={setModal}>
        <PostForm 
        create={createPost}
        />
      </MyModal>
      <PostFilter
      filter={filter}
      setFilter={setFilter}
      />
      <PostList 
      remove={removePost}
      posts={sortedSearchQuery} 
      title={'Список постов'}
       />
    </div>
  );
}

export default App;
