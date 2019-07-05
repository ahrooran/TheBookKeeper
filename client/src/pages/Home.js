import React, { Component } from 'react';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import './style.css';
import { List, ListItem } from '../components/List';

class Detail extends Component {

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