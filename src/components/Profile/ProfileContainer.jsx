import React from 'react';
import Profile from './Profile';
import * as Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from "../../Redux/profileReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }


    render() {
        return (

            <Profile  {...this.props}  profile={this.props.profile}/>
        )
    }

}
let mapStateToPropse = (state) => ({
  profile: state.profilePage.profile
})
export default connect(mapStateToPropse, { setUserProfile })(ProfileContainer);