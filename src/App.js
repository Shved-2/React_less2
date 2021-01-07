import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
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
