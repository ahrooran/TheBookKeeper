import React, { Component } from 'react';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import API from "../utils/API";  
import './style.css';

class Detail extends Component {
  state = {
    books: {},
    title: ''
  };

  searchBook = event => {
    event.preventDefault();

    API.getTitles(this.state.title)
    .then(results => this.showBooks(results))
    .catch(err => console.log(err));
  }

  viewBook = url => {
    window.location = url;
  }

  saveBook = bookID => {
    const book = this.state.books.find(book => book.id === bookID);
    API.saveBook({
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.previewLink
    }).then(() => {
      this.setState({
        books: this.state.books.filter(book => book.id !== bookID)
      });
    }).catch(err => console.log(err));
  }

  showBooks = data => {
    this.setState({ books: data.data.items });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    this.setState({ books: {}, title: '' });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>
            <h1  class ="underline">FAQ 🙋</h1>
          </Jumbotron>
        </Row>
        <Row>
          <Container>
            <h2>FAQ</h2>
          </Container>
        </Row>
        <row>
          <Container>
          <h6>How do you install and run The book Keeper</h6>
          <ul>

        <li>bullet point</li>
          </ul>

          </Container>
        </row>
      
      </Container>
    );
  }
}

export default Detail; 
