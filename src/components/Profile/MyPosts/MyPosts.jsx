import React from 'react';
import ss from './MyPosts.module.css'
import Post from './Post/Post'





const MyPosts = (props) => {

  let post = props.postData.map((p) => {
    return (
      <Post message={p.message} likeCount={p.likeCount} />
    )
  })
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange=()=>{
    let text = newPostElement.current.value;
    //props.newPostText();
    console.log(text);
    props.updateNewPostText(text);

  }


  return (
    <div className={ss.myPosts}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>

      </div>

      {post}
    </div>
  )
}
export default MyPosts;