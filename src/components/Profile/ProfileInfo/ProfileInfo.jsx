import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import ss from './ProfileInfo.module.css'

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={ss.content}>
            <div>
                <img src="https://vokrugsveta.ua/wp-content/uploads/2020/03/shutterstock_1606266022-918x590.jpg" />
            </div>
            <div className={ss.description}>
                <img className={ss.large} src={props.profile.photos.small} />
                <h3>Я здесь на связи</h3>
                {
                    Object.keys(props.profile.contacts).map(elem => {
                        return (<p>{elem}: {props.profile.contacts[elem]}</p>)

                    })
                }
                <p>Коротко обо мне : {props.profile.aboutMe}</p>
                <hr />
                <p>Цель в жизни : {props.profile.lookingForAJobDescription}</p>
                ava+ description
            </div>

        </div>
    )
}
export default Profile;