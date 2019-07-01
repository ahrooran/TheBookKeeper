import React, { Component } from 'react';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import API from "../utils/API";  
import './style.css';

  function Faq() {
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


export default Faq; 
