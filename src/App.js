import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/homepage/HomePage';
import ShopPage from './Pages/shoppage/ShopPage';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/SignIn-SignUp'
import Header from './components/header/Header';
import { auth } from './firebase/Firebase';
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
