import styles from "./NavBar.module.scss";
import { Navbar, Nav } from "react-bootstrap";

const MainNav = () => {
  return (
    <Navbar className={styles.navbar} expand="lg">
      <div className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Facebook</Nav.Link>
            <Nav.Link href="#link">Instagram</Nav.Link>
            <Nav.Link href="#link">Youtube</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MainNav;
