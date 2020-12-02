import React from 'react';
import ss from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {
  return (
    <div className={ss.myPosts}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>

      </div>

      <Post message="ну че кого???" likeCount='12' />
      <Post message="та пока не понятно" likeCount='3' />
    </div>
  )
}
export default MyPosts;