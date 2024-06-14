import React, { Component } from 'react';
import {Link } from 'react-router-dom'
export class Navbar extends Component {
render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark text-light " style={{fontSize:'larger',padding:'20px',paddingLeft:'10px'}}>
      <div className="container-fluid ">
     <Link className="navbar-brand text-light" to="/" style={{fontSize:'larger'}}>NewsMonkey</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/technology">Technology</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
