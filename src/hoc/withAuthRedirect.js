import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropseforRedirect = (state) => ({
    isAuth: state.auth.isAuth
})
export const widthAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />;
            return <Component {...this.props} />
        }
    }
    

    let ConnectedAuthRedirectComponent = connect(mapStateToPropseforRedirect)(RedirectComponent);


    return ConnectedAuthRedirectComponent;
}