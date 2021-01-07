import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
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


      </div>

    </div>

  );
}


export default App;
