import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/main.css';

function NavigationComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed-top bg-white px-4 py-3 shadow-sm">
      <div
        className="container d-flex justify-content-between align-items-center"
        id="navbar"
      >
        <Link to="/" className="text-decoration-none text-dark fs-4">
          <img src="../assets/images/logo/logo_o.png" className="logo" />
        </Link>
        <nav className="d-none d-md-flex gap-4">
          <Link to="/" className="text-decoration-none text-dark">
            홈
          </Link>
          <Link to="/about" className="text-decoration-none text-dark">
            회사소개
          </Link>
          <a
            href="https://koeuro.shop/"
            className="text-decoration-none text-dark"
            target="_blank"
            rel="noopener noreferrer"
            id="koeuromall"
          >
            코유로 몰
          </a>
          <Link to="/contact" className="text-decoration-none text-dark">
            사업소개
          </Link>
          <Link to="/Notices" className="text-decoration-none text-dark">
            공지사항
          </Link>
          <Link to="/contact" className="text-decoration-none text-dark">
            채용
          </Link>
          <Link to="/madang" className="text-decoration-none text-dark">
            비지니스 문의
          </Link>
        </nav>
        <Button
          variant="outline-secondary"
          className="d-md-none"
          onClick={toggleMenu}
        >
          Toggle navigation
        </Button>
      </div>
    </header>
  );
}

export default NavigationComponent;
