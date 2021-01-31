import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/login/Login';
import { initialaizeApp } from './Redux/appReducer'


import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initialaizeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (

      <div className="App">
        <HeaderContainer />
        <Nav />
        <div className="App-content">

          <Route path="/profile/:userId?" render={() => <ProfileContainer />}
          />

          <Route path="/dialogs"
            render={() => <DialogsContainer />}
          />

          <Route path="/users"
            render={() => <UsersContainer />}
          />
          <Route path="/login"
            render={() => <LoginPage />}
          />


        </div>

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initialaizeApp }))(App);