import React from 'react';
import { addPostActionCreator, UpdateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  debugger;
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = UpdateNewPostTextActionCreator(text);
    props.store.dispatch(action);

  }

  return (
    <MyPosts addPost={addPost}
      updateNewPostText={onPostChange}
      postData={state.profilePage.postData}
      newPostText={state.profilePage.newPostText} />
  )
}
export default MyPostsContainer;


/*


        postData={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}

        dispatch={props.dispatch}
*/