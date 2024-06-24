import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import '../css/main.css';
import styles from '../css/main.module.css';

//Header
function NavigationComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed-top bg-white px-4 py-4 shadow-sm">
      <div className={`container ${styles.headerBar}`}>
        <Link to="/" className="fs-4">
          <img src="../assets/images/logo/logo_o.png" className={styles.logo} />
        </Link>
        <nav className="d-none d-md-flex gap-4">
          <Link to="/">홈</Link>
          <Link to="/about">회사소개</Link>
          <a
            href="https://koeuro.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.koeuromall}
          >
            코유로 몰
          </a>
          <Link to="/Notices">공지사항</Link>
          <Link to="/contact">채용</Link>
          <Link to="/madang">비지니스 문의</Link>
        </nav>
        <Button
          variant="outline-secondary"
          className="d-md-none"
          onClick={toggleMenu}
        >
          三
        </Button>
      </div>
    </header>
  );
}

export default NavigationComponent;
