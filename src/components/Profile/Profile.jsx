import React from 'react';
import ss from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile =()=>{
    return(
        <div className={ss.content}>
        <ProfileInfo />
        <MyPosts />
      </div>
    )
}
export default Profile;