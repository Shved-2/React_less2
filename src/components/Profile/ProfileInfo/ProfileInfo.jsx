import React from 'react';
import ss from './ProfileInfo.module.css'

const Profile = () => {
    return (
        <div className={ss.content}>
            <div>
                <img src="https://vokrugsveta.ua/wp-content/uploads/2020/03/shutterstock_1606266022-918x590.jpg" />
            </div>
            <div className={ss.description}>
                ava+ description
            </div>

        </div>
    )
}
export default Profile;