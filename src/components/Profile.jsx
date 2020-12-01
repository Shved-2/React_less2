import React from 'react';
import ss from './Profile.module.css'

const Profile =()=>{
    return(
        <div className={ss.content}>
        <div>
          <img src="https://vokrugsveta.ua/wp-content/uploads/2020/03/shutterstock_1606266022-918x590.jpg" />
        </div>
        <div>
          ava+ description
        </div>
        <div>
          My Post
          <div>
            New Post
          </div>

          <div className={ss.item}>
            post1
          </div>
          <div className={ss.item}>
            post2
          </div>
          <div className={ss.item}>
            post3
          </div>
        </div>
      </div>
    )
}
export default Profile;