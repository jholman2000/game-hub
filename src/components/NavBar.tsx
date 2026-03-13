import { Nav, Navbar, NavDropdown, Container, Image } from "react-bootstrap";

import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary p-0 ">
      <Container fluid className="d-flex align-items-center gap-3 p-0 g-0">
        {/* Logo and Brand */}
        <Navbar.Brand href="#home">
          <Image src={logo} width={60} height={60} rounded />
        </Navbar.Brand>

        <Navbar.Text>NavBar</Navbar.Text>

        {/* Toggle for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar.Collapse purpose is to contain the navigation links for mobile view */}
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Jeff Holman</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
