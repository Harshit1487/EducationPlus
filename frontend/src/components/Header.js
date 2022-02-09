import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = (props) => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Education Plus</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/Quiz">Quiz</Nav.Link>
            <Nav.Link href="/Livechat">Live Chat</Nav.Link>
            <Nav.Link href="/Uploadnote">Upload Notes</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
}

export default Header
