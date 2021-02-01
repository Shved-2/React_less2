import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from "../../Redux/profileReducer";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { widthAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }


    render() {
        console.log("render profile");
        return (

            <Profile  {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}


let mapStateToPropse = (state) => {
    console.log("mapstate to props -profile");
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    })
}

export default compose(
    connect(mapStateToPropse, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    widthAuthRedirect
)(ProfileContainer)
