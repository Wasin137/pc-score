import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BoxSeam } from 'react-bootstrap-icons'

const menuLink = [
  {name: 'MDD', link: '/mdd'},
  {name: 'MiniCog', link: '/minicog'},
  {name: 'MNA Short', link:'/mnashort'},
  {name: 'MSRA-5', link:'/msra5'},
  {name: 'CCI', link:'/cci'},
  {name: 'Wexner', link:'/wexner'},
  {name: 'ISI', link:'/insomnia'},
  {name: 'GAD-7', link:'/anxiety'},
  {name: 'IPSS', link:'/ipss'}
]

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
            {menuLink.map((link, index) => (
              <Nav.Link key={index} href={link.link}>{link.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  )
}

export default NavBar