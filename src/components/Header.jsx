import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navbar, Container, NavDropdown, Nav, Image } from "react-bootstrap";

import "./../assets/styles/custom.css";
import NotiIcon from "./../assets/imgs/noti.png";

const Header = () => {
  const auth = useAuth();
  return (
    <Navbar
      expand="md"
      className="bg-body-tertiary px-5 d-flex justify-content-between my-header"
    >
      <Container fluid className="d-flex justify-content-between">
        <Navbar.Brand
          href="#home"
          className="fw-bold text-white"
          style={{ fontSize: "30px" }}
        >
          DOANTOTNGHIEP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {auth.token ? (
              <>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : null}
          </Nav>

          <Nav.Link className="rounded-pill p-1 my-header-bg-icon mx-4">
            <Image
              src={NotiIcon}
              className="my-header-icon text-center m-auto"
            />
          </Nav.Link>
          <Nav.Link className="rounded-pill p-1 my-header-bg-icon">
            <Image
              src={NotiIcon}
              className="my-header-icon text-center m-auto"
            />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
