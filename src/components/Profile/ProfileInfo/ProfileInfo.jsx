import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import ss from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={ss.content}>
            {/*
            <div>
                <img src="https://vokrugsveta.ua/wp-content/uploads/2020/03/shutterstock_1606266022-918x590.jpg" alt="gfh"/>
            </div>*/}
            <div className={ss.description}>
                <img className={ss.large} src={props.profile.photos.small} alt="dfghdgf" />
                <p>Имя : {props.profile.fullName}</p>
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                //status={props.profile.status}
                />

                <p>обо мне : {props.profile.aboutMe}</p>
                {
                    Object.keys(props.profile.contacts).map(elem => {
                        return (<p>{elem}: {props.profile.contacts[elem]}</p>)

                    })
                }
                {/* <p>Коротко обо мне : {props.profile.aboutMe}</p>*/}
                <hr />

                <p>Цель в жизни : {props.profile.lookingForAJobDescription}</p>
                ava+ description
            </div>

        </div>
    )
}
export default Profile;