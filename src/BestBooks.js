import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import Carousel from 'react-bootstrap/Carousel';

class MyFavoriteBooks extends React.Component {
  async componentDidMount() {
    // this is going to be the same, always, for making requests to the server including the token
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    const config = {
      headers: { "Authorization": `Bearer ${jwt}` }
    };
    let bookData = await axios.get(`http://localhost:3001/books`, config);
    console.log(bookData);
    this.setState({ bookData: bookData.data })
  }
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>My Favorite Books</h3>
            <p>This is a collection of my favorite books.

            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
export default withAuth0(MyFavoriteBooks);
