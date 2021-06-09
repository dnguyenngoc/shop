import React from 'react';
import VietLogo from "../../assets/img/flags/vietnam.svg";
import { Nav, Card, Navbar, Container } from '@themesberg/react-bootstrap';


const NavbarThemes = [
  { themeVariant: 'primary', navbarColor: 'dark', brandIcon: VietLogo },
  { themeVariant: 'secondary', navbarColor: 'light', brandIcon: VietLogo },
  { themeVariant: 'soft', navbarColor: 'light', brandIcon: VietLogo }
];

const Logo = () => {
  const [themeIndex, setThemeIndex] = React.useState(2);
  const { themeVariant, navbarColor, brandIcon } = NavbarThemes[themeIndex];
  return (
    <Navbar variant={navbarColor} expand="lg" className={`navbar-transparent navbar-theme-${themeVariant} my-2 nav-link`}>
    <Container className="position-relative">
      <Navbar.Brand href="#home" className="me-lg-3">
        <img src={brandIcon}  className="max-width-none"/>
      </Navbar.Brand>
      <Navbar.Collapse id="navbar-default-primary" className="w-100">
        <Nav className="navbar-nav-hover align-items-lg-center">
          <Nav.Link href="/"className='color-black font-size-20 font-weight-600'>A.PoT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Toggle aria-controls="navbar-default-primary" />
    </Container>
  </Navbar>
  );
};

export default Logo;