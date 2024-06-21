import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useLocation } from 'react-router-dom';
import NavigationComponent from './js/NavigationComponent';
import { MemoizedMain as Main } from './js/Main/Main';
import About from './js/About/About';
import Madang from './js/Madang/Madang';
import Notices from './js/Notices/Notices';
import Contact from './js/Contact/Contact';
import ContactDetail from './js/Contact/ContactDetail';
import NoticeDetail from './js/Notices/NoticeDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App" style={{ overflowX: 'hidden' }}>
        <NavigationComponent />
        <main>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/madang" element={<Madang />} />
            <Route path="/Notices" element={<Notices />} />
            <Route path="/notices/:id" element={<NoticeDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/:id" element={<ContactDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
