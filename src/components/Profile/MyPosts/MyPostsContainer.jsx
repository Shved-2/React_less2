import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, UpdateNewPostTextActionCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
/*
const MyPostsContainer = (props) => {
  //let state = props.store.getState();
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {
          let action = UpdateNewPostTextActionCreator(text);
          store.dispatch(action);

        }
        return <MyPosts addPost={addPost}
          updateNewPostText={onPostChange}
          postData={state.profilePage.postData}
          newPostText={state.profilePage.newPostText} />

      }
      }

    </StoreContext.Consumer>
  )
}*/
let mapStateToPropse = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = UpdateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}
const MyPostsContainer = connect(mapStateToPropse, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;


/*


        postData={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}

        dispatch={props.dispatch}
*/
