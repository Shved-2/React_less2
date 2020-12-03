import React from 'react';
import ss from './MyPosts.module.css'
import Post from './Post/Post'





const MyPosts = (props) => {
  let post = props.postData.map((p)=>{
    return(
      <Post message={p.message} likeCount={p.likeCount} />
    )
  })
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

      {post}
    </div>
  )
}
export default MyPosts;