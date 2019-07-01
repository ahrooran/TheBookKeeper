import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import ViewBtn from '../components/ViewBtn'
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link:""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data,
          title: "",
          author: "",
          description: "",
          image: "",
          link:""
        })
      )
      .catch(err => console.log(err));
  };

  viewBook = url => {
    window.location = url;
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron fluid>
            <h1 class ="underline">Saved 💾</h1>
          </Jumbotron>
        </Row>
        <Row>
          <Container>
            <h2>Saved Books</h2>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <img className="float-left mb-1 mr-4" src={book.image} alt={book.title} />
                    <Row>
                      <Col lPadding="0" size="8">
                      <strong>{book.title}</strong>
                      </Col>
                      <Col size="4">
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                        <ViewBtn onClick={() => this.viewBook(book.link)} />
                      </Col>
                    </Row>
                    <p>Written by {book.author}</p>
                    <p className="text-justify">{book.description}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results</h3>
            )}
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Books;
