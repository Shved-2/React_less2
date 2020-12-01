import React from 'react';
import ss from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {
  return (
    <div className={ss.myPosts}>
      My Post
      <div>
        <textarea></textarea>
        <button>Add post</button>
          </div>

      <Post  message="ну че кого???" likeCount = '12'/>
      <Post message="та пока не понятно" likeCount = '3'/>
    </div>
  )
}
export default MyPosts;