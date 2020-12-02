import React from 'react';
import ss from './MyPosts.module.css'
import Post from './Post/Post'

let postData =[
  {id:0, message: 'ну че кого???', likeCount: 12},
  {id:0, message: 'та пока не понятно', likeCount: 34},
]

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

      <Post message={postData[0].message} likeCount={postData[0].likeCount} />
      <Post message={postData[1].message} likeCount={postData[1].likeCount} />
    </div>
  )
}
export default MyPosts;