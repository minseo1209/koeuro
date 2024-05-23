import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationComponent from './js/NavigationComponent';
import { MemoizedMain as Main } from './js/Main/Main';
import About from './js/About/About';
import Madang from './js/Madang/Madang';

function App() {
  return (
    <Router>
      <div className="App" style={{ overflowX: 'hidden' }}>
        <NavigationComponent />
        <main>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/madang" element={<Madang />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
