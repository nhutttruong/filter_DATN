import React from 'react'
import {Navbar, Nav, Form, InputGroup, Col, Row, Button, Container, NavLink} from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'


const Header = () => {
    const {onLogout, onLogin, token} = useAuth()
  return (
    <Navbar className="bg-body-tertiary">
      <Container style={{display: "flex", justifyContent: "space-between"}} className='bg-white'>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header