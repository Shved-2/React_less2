import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (

    <div className="App">
      <Header />
      <Nav />
      <div className="App-content">
        <Route path="/profile" render={() => <Profile
        /*store={props.store}
        
          profilePage={props.state.profilePage}
          dispatch={props.dispatch}*/ />}
        />

        <Route path="/dialogs"
          render={() => <DialogsContainer
          //state={props.state.dialogsPage}
          //store={props.store}
          />}
        />

      </div>

    </div>

  );
}


export default App;
