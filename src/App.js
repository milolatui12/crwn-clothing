import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/homepage/HomePage';
import ShopPage from './Pages/shoppage/ShopPage';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/SignIn-SignUp'
import Header from './components/header/Header';
import './App.css';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
