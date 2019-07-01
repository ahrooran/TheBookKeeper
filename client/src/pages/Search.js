import React, { Component } from 'react';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import ViewBtn from '../components/ViewBtn';
import SaveBtn from '../components/SaveBtn';
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import './style.css';

document.body.style = 'background: #e3f2fd;';
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

  showBooks = data => {
    this.setState({ books: data.data.items });
  }

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
    })
  }




  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>
            
            <h1 class ="underline">Search 🔎</h1>
          </Jumbotron>
        </Row>
        <Row> 
          <Container>
            <h2> Search for books:</h2>
            <form>
              <Input
                name='title'
                value={this.state.title}
                onChange={this.handleInputChange}
                placeholder='Book Title'
              />
              <FormBtn onClick={this.searchBook}>
                Search
              </FormBtn>
            </form>
          </Container>
        </Row>
        <Row>
          <Container>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <Row>
                      <Col size='8'>
                      <strong>
                        {book.volumeInfo.title}
                      </strong>
                      </Col>
                      <Col size='4'>
                        <SaveBtn onClick={() => this.saveBook(book.id)} />
                        <ViewBtn onClick={() => this.viewBook(book.volumeInfo.previewLink)} />
                      </Col>
                    </Row>
                    <p>By {book.volumeInfo.authors[0] || "Not provided by Google Books API"}</p>
                    <p className='text-justify'>{book.volumeInfo.description}</p>
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
export default Detail;
