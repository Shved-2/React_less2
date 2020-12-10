import React from 'react';
import { addPostActionCreator, UpdateNewPostTextActionCreator } from '../../../Redux/state';
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
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = UpdateNewPostTextActionCreator(text);
    props.dispatch(action);

  }


  return (
    <div className={ss.myPosts}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText} />
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