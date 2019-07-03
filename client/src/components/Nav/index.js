import React from "react";
import './style.css';

function Nav() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  
      <a className="nav-logo" href="/"><img src={require("./logo.png")} width="40" height="40"></img></a>
        <a className="navbar-brand" href="/"> The Book, Keeper</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            
          <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/search">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/books">Saved</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Nav;
