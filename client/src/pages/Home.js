import React, { Component } from 'react';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import API from "../utils/API";
import './style.css';
import { List, ListItem } from '../components/List';

class Detail extends Component {
  state = {
    books: {},
    title: ''
  };
  
  componentDidMount() {
    this.setState({ books: {}, title: '' });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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

  viewBook = url => {
    window.location = url;
  }

  showBooks = data => {
    this.setState({ books: data.data.items });
  }

  searchBook = event => {
    event.preventDefault();

    API.getTitles(this.state.title)
    .then(results => this.showBooks(results))
    .catch(err => console.log(err));
  }

  render() {
    return (
      
      <Container fluid>

        <Row>
          <Jumbotron>
            <h1 class ="underline">Home 🏡</h1>
          </Jumbotron>
          
        </Row>
        <List>
          
          <ListItem>
        <Row>
          <Container>
            <h2>Introduction </h2>
          </Container>
        </Row>

        
        <Row>
        <Container>
            <h5>Introduction This is a simple book management web app that is being created using MERN stack:</h5>

<h6>This system is built with the following technologies:</h6>
<ul>

<li>MongoDB [A document-based open source database]</li>

<li>Express.js [A Fast, unopinionated, minimalist web framework for Node.js]</li>

<li>React.js [A JavaScript front-end library for building user interfaces]</li>

<li> Node.js [Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js brings JavaScript to the server]</li>
</ul>
        </Container>
        </Row>
      
      <Row>
      <Container>
        <h2>Prerequisite</h2>
      </Container>
    </Row>
    <Row>
      <Container>
        <h2>Project Management</h2>
        <h5>This project uses an agile methodology. Please see trello board at the following link: </h5>
        <a href="https://trello.com/b/GhRqWXx0/the-book-keeper">https://trello.com/b/GhRqWXx0/the-book-keeper</a>
      </Container>
    </Row>
    <Row>
      <Container>
        <h2>Architecture </h2>
      </Container>
    </Row>
    </ListItem>
        </List>
    </Container>
    );
  }
}

export default Detail;