import React from 'react';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
import classes from './App.module.css';
import MainContainer from './MainContainer/MainContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Route path='/:vId' component={MainContainer}/>
      <Route exact path="/" render={() => <Redirect to="/1"/>} />
      </div>
    </BrowserRouter>
  );
}

export default App;
