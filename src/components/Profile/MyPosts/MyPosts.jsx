import React from 'react';
import ss from './MyPosts.module.css'
import Post from './Post/Post'

let postData =[
  {id:0, message: 'ну че кого???', likeCount: 12},
  {id:0, message: 'та пока не понятно', likeCount: 34},
  {id:0, message: 'учим react', likeCount: 1},
  {id:0, message: 'тра-та-та', likeCount: 74},
]
let post = postData.map((p)=>{
  return(
    <Post message={p.message} likeCount={p.likeCount} />
  )
})

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

      {post}
    </div>
  )
}
export default MyPosts;