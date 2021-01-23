import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ss from './MyPosts.module.css'
import Post from './Post/Post'






const MyPosts = (props) => {

  let post = props.postData.map((p) => {
    return (
      <Post message={p.message} likeCount={p.likeCount} />
    )
  })
  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

  }


  return (
    <div className={ss.myPosts}>
      <h3>My Post</h3>

     <AddNewPostFormRedux  onSubmit={onAddPost} />
      {post}
    </div>
  )
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText"  component="textarea"/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)
export default MyPosts;