import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToPropse = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}
const MyPostsContainer = connect(mapStateToPropse, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;

