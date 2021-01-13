import React from 'react';
import ss from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  

  return (
    <div className={ss.content}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer /*store={props.store}*/ />
    </div>
  )
}
export default Profile;