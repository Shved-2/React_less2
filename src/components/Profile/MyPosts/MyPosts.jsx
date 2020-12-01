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

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
export default MyPosts;