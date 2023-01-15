import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = ({title}) => {
    
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Container>
      </Navbar>
    );
}


export default Header;