import React from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Login from './Login.js';
import MyFavoriteBooks from './BestBooks.js';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile.js';
import AddBookModal from './AddBookModal';
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
                {this.state.show ? <AddBookModal /> : ''}
                {isAuthenticated ? <><MyFavoriteBooks /><Button onClick= {this.revealModal}> Add a Book!</Button></> : <Login />}
              </Route>
              <Route exact path="/profile">
              {isAuthenticated ?  <Profile /> : <h2>Please Log in!</h2>}
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
