import React from 'react';
import ss from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  debugger;



  return (

    <div className={ss.content}>
      <ProfileInfo />
      <MyPosts
        postData={props.state.postData}
        addPost={props.addPost} />
    </div>
  )
}
export default Profile;