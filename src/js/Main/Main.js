import React, { useEffect, useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import ReactDOM from 'react-dom';

import '../../css/main.module.css';
import '../../css/video.module.css';

import Brand from '../Main/Brand.js';
import Koeuro from '../Main/Koeuro.js';
import Customer from '../Main/Customer.js';
import DevelopingComponent from '../Main/DevelopingComponent.js';
import Partners from '../Main/Partners.js';

function Main() {
  const videos = [
    '../assets/video/main/main_video00.mp4',
    '../assets/video/main/main_video01.mp4',
    '../assets/video/main/main_video02.mp4',
    '../assets/video/main/main_video03.mp4',
    '../assets/video/main/main_video04.mp4',
  ];
  const imageURL = '/assets/images/logo/KoeuroLink.png';
  const videoTexts = [' ', '연결', '존중', '설렘', '공유'];
  const videoSubTexts = [
    ' ',
    '코유로는 이로운 제품을 고객과 연결합니다.',
    '코유로는 제품을 사용하는 고객의 의견을 존중합니다.',
    '코유로는 새로움에서 찾아 오는 설렘을 함께 합니다.',
    '코유로는 더 나은 세상을 여러분께 공유합니다.',
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentVideoText, setCurrentVideoText] = useState(videoTexts[0]);
  const [currentVideoSubText, setCurrentVideoSubText] = useState(videoSubTexts[0]);

  // 비디오 전환을 위한 함수
  const changeVideo = (nextIndex) => {
    setCurrentVideoIndex(nextIndex);
    setCurrentVideoText(videoTexts[nextIndex]);
    setCurrentVideoSubText(videoSubTexts[nextIndex]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentVideoIndex + 1;
      if (nextIndex >= videos.length) {
        nextIndex = 0;
      }
      changeVideo(nextIndex);
    }, 4500);

    return () => clearInterval(interval);
  }, [currentVideoIndex, videoTexts]);

  // 이전 비디오로 전환
  const prevVideo = () => {
    let prevIndex = currentVideoIndex - 1;
    if (prevIndex < 0) {
      prevIndex = videos.length - 1;
    }
    changeVideo(prevIndex);
  };

  // 다음 비디오로 전환
  const nextVideo = () => {
    let nextIndex = currentVideoIndex + 1;
    if (nextIndex >= videos.length) {
      nextIndex = 0;
    }
    changeVideo(nextIndex);
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <div className="container mt-5">
        <main>
          <section className="video-section">
            <div className="video-container">
              <video
                autoPlay
                muted
                loop
                preload="auto"
                id="video-background"
                className="video-element"
                src={videos[currentVideoIndex]}
                key={videos[currentVideoIndex]} // 비디오 변경 시 새로운 키를 생성하여 리렌더링되도록 함
              />
              <div className="video-content">
                <h1 className="title">{currentVideoText}</h1>
                <h4 className="subtitle">{currentVideoSubText}</h4>
              </div>
            </div>
            <div className="buttons">
              <button onClick={prevVideo}>
                <span className="directionPrev">Prev</span>
              </button>
              <button onClick={nextVideo}>
                <span className="directionNext">Next</span>
              </button>
            </div>
          </section>
          <div className="empty"></div>
          <DevelopingComponent />
          <Brand />
          <div className="empty"></div>
          <Koeuro />
          <div className="empty"></div>
          <Customer />
          <div className="empty"></div>
          <Partners />
          <div className="empty" style={{ height: '50px' }}></div>
        </main>
      </div>
      <footer className="bg-dark text-white py-4">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="footercontents">
            <a className="footersub" href="#">
              이용약관
            </a>
            <a className="footersub" href="#">
              개인정보 처리 방침
            </a>
            <a className="footersub" href="#">
              콘텐츠 산업 진흥법에 따른 표기
            </a>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <Nav className="gap-4 text-center">
            <Nav.Link href="#" className="text-decoration-none text-white">
              <div className="footerNav">
                Contact
                <br />
                <div style={{ height: '15px' }}></div>
                <span className="subfooter">E : Koeuro@koeuro.com</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#" className="text-decoration-none text-white">
              <div className="footerNav">
                Poland Office
                <br />
                <div style={{ height: '15px' }}></div>
                <span className="subfooter">
                  ul. Stanis awa Dubois 36, 44-100
                  <br />
                  Gliwice, Poland
                </span>
              </div>
            </Nav.Link>
            <Nav.Link href="#" className="text-decoration-none text-white">
              <div className="footerNav">
                Korea Office
                <br />
                <div style={{ height: '15px' }}></div>
                <span className="subfooter">
                  24, Daewon-ro 39beon-gil, Osan-si,
                  <br />
                  Gyeonggi-do, Republic of korea
                </span>
              </div>
            </Nav.Link>
            <Nav.Link href="#" className="text-decoration-none text-white">
              <div className="footerNav">
                Social
                <br />
                <div style={{ height: '15px' }}></div>
                <span className="subfooter">
                  <img src="../assets/images/icon/free-icon-facebook-3128208.png" className="footerImg" />
                </span>
                <span className="subfooter">
                  <img src="../assets/images/icon/free-icon-instagram-717392.png" className="footerImg" />
                </span>
                <span className="subfooter">
                  <img src="../assets/images/icon/free-icon-youtube-152810.png" className="footerImg" />
                </span>
              </div>
            </Nav.Link>
          </Nav>
        </div>
        <div style={{ marginTop: '50px' }}>
          <p className="m-0">
            © 2023 KOEURO. All Rights Reserved{' '}
            <a href="/" style={{ color: 'white' }}>
              koeuro.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export const MemoizedMain = React.memo(Main);
