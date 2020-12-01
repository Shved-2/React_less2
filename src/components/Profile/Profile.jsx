import React from 'react';
import ss from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
const Profile =()=>{
    return(
        <div className={ss.content}>
        <div>
          <img src="https://vokrugsveta.ua/wp-content/uploads/2020/03/shutterstock_1606266022-918x590.jpg" />
        </div>
        <div>
          ava+ description
        </div>
        <MyPosts />
      </div>
    )
}
export default Profile;