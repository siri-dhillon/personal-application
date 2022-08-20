import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Blog from './Blog';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';

import { Route, Routes} from 'react-router-dom';


function Navigation() {
  return (
    <>
          <Navbar bg="light" expand="lg">
          <Container>
          <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Sirpreet Dhillon
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Home} to='/home'>Home</Nav.Link>
                <Nav.Link as={Skills} to="/skills">Skills</Nav.Link>
                <Nav.Link as={Projects} to="/projects">Projects</Nav.Link>
                <Nav.Link as={Blog} to="/blog">Blog</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>




        <Routes>  
          <Route exact path='/' component={Home}/>              
          <Route path='/home' component={Home}/>  
          <Route path='/skills' component={Skills}/>               
          <Route path='/projects' component={Projects}/> 
          <Route path='/blog' component={Blog}/>             
        </Routes>
        </>
  );
}

export default Navigation;
