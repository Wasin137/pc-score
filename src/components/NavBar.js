import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BoxSeam } from 'react-bootstrap-icons'

function NavBar() {
  return (
    <Container fluid className='mb-2'>
    <Navbar expand="lg" style={{ borderBottom: '1px solid #333' }}>
      <Container fluid>
        <BoxSeam />
        <Navbar.Brand href="/" className='mx-1'>FM-Toolkits</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/mdd">MDD</Nav.Link>
            <Nav.Link href="/minicog">MiniCog</Nav.Link>
            <Nav.Link href="/mnashort">MNA Short</Nav.Link>
            <Nav.Link href="/msra5">MSRA-5</Nav.Link>
            <Nav.Link href="/frail">FRAIL Scale</Nav.Link>
            <Nav.Link href='/cci'>CCI</Nav.Link>
            <Nav.Link href='/wexner'>Wexner</Nav.Link>
            <Nav.Link href='/insomnia'>ISI</Nav.Link>
            <Nav.Link href='/anxiety'>GAD-7</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  )
}

export default NavBar