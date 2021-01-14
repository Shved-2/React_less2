import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from "../../Redux/profileReducer";
import {  withRouter } from 'react-router-dom';
import { widthAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);

    }


    render() {
        
        return (

            <Profile  {...this.props} profile={this.props.profile} />
        )
    }

}
let AuthRedirectComponent = widthAuthRedirect(ProfileContainer);

let mapStateToPropse = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToPropse, { getUserProfile })(WithUrlDataContainerComponent);