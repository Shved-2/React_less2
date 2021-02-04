import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import ss from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHook from './ProfileStatusWithHook';

const Profile = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div className={ss.content}>
           
            <div className={ss.description}>
                <img className={ss.large}
                    src={profile.photos.small}
                    alt="dfghdgf"
                    updateStatus={updateStatus}
                />
                <p>Имя : {profile.fullName}</p>
                <ProfileStatusWithHook
                    status={status}
                    updateStatus={updateStatus}
                //status={props.profile.status}
                />

                <p>обо мне : {profile.aboutMe}</p>
                {
                    Object.keys(profile.contacts).map(elem => {
                        return (<p>{elem}: {profile.contacts[elem]}</p>)

                    })
                }
                {/* <p>Коротко обо мне : {props.profile.aboutMe}</p>*/}
                <hr />

                <p>Цель в жизни : {profile.lookingForAJobDescription}</p>
                ava+ description
            </div>

        </div>
    )
}
export default Profile;