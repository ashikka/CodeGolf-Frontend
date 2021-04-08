import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './header.css';
import codegolf from '../../assets/footer/codegolf.png';

const Header = () => (
  <Navbar className="header d-flex flex-row justify-content-between">
    <Navbar.Brand className="text-white mt-2">
      <img
        alt=""
        src={codegolf}
        width="50"
        height="50"
        className="d-inline-block align-top ml-3"
      />
      {' '}
      Codegolf
    </Navbar.Brand>
    <div className="d-flex flex-row nav-links">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/">About</Nav.Link>
      <Nav.Link href="/">Contact us</Nav.Link>
    </div>
  </Navbar>
);

export default Header;
