import React from 'react';
import Header from './Header';
import ShowModal from './ShowModal.js';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Login from './Login.js';
import MyFavoriteBooks from './BestBooks.js';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  makeRequest = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    const config = {
      headers: {"Authorization" : `Bearer ${jwt}`}
    };

    const serverResponse = await axios.get('http://localhost:3001/books', config);

    console.log(serverResponse);
  }

  revealModal = () => {
    this.setState({ show: true});
  }

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {isAuthenticated ?  <><MyFavoriteBooks /> <ShowModal revealModal= {this.revealModal} /></> : <Login />}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile">
              {isAuthenticated ?  <Profile /> : <h1>Hey there!</h1>}
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
