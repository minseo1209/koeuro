import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavComponent() {
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary "
        style={{
          height: '70px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="../assets/images/logo/logo_o.png"
              className="log"
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className="navfont"
                href="#home"
                style={{ fontWeight: 'bold' }}
              >
                홈
              </Nav.Link>
              <Nav.Link href="#link" style={{ fontWeight: 'bold' }}>
                회사소개
              </Nav.Link>
              <Nav.Link href="#link" style={{ fontWeight: 'bold' }}>
                코유로 몰
              </Nav.Link>
              <Nav.Link href="#link" style={{ fontWeight: 'bold' }}>
                사업소개
              </Nav.Link>
              <Nav.Link href="#link" style={{ fontWeight: 'bold' }}>
                공지사항
              </Nav.Link>
              <NavDropdown
                title="채용"
                id="basic-nav-dropdown"
                style={{ fontWeight: 'bold' }}
              >
                <NavDropdown.Item href="#action/3.1">
                  코유로 채용
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  파트너스 채용
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="비지니스 문의"
                id="basic-nav-dropdown"
                style={{ fontWeight: 'bold' }}
              >
                <NavDropdown.Item href="#action/3.1">마당</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">제휴</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Language"
                id="basic-nav-dropdown"
                style={{ fontWeight: 'bold' }}
              >
                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Korean</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavComponent;
