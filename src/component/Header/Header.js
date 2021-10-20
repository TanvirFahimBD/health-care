import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();
  console.log(user);
  return (
    <div>
      {/* whole navbar  */}
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/home"}>
            <h2>MHealth</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/home"}>
                <h5>HOME</h5>
              </Nav.Link>
              <Nav.Link as={Link} to={"/departments"}>
                <h5>DEPARTMENTS</h5>
              </Nav.Link>
              <Nav.Link as={Link} to={"/events"}>
                <h5>EVENTS</h5>
              </Nav.Link>
              {!user.displayName && (
                <Nav.Link as={Link} to={"/login"}>
                  <h5>LOGIN</h5>
                </Nav.Link>
              )}
              {user.displayName && (
                <span className="mt-2 mx-3">{user.displayName}</span>
              )}
              {user.displayName && <button onClick={logOut}>Logout</button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
