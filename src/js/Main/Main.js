import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import ReactDOM from 'react-dom';

import styles from '../../css/main.module.css';
import videoStyles from '../../css/video.module.css';

import Brand from '../Main/Brand.js';
import Koeuro from '../Main/Koeuro.js';
import Customer from '../Main/Customer.js';
import DevelopingComponent from '../Main/DevelopingComponent.js';
import Partners from '../Main/Partners.js';

// 메인 홈

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
  const [currentVideoSubText, setCurrentVideoSubText] = useState(
    videoSubTexts[0]
  );

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
  const goToUrl = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <div className="mt-5">
        <main>
          {/* 메인페이지 배너 */}
          <section className={videoStyles.videoSection}>
            <div className={videoStyles.videoContainer}>
              <video
                autoPlay
                muted
                loop
                preload="auto"
                // id="video-background"
                className={videoStyles.videoElement}
                src={videos[currentVideoIndex]}
                key={videos[currentVideoIndex]} // 비디오 변경 시 새로운 키를 생성하여 리렌더링되도록 함
              />
              <div className={videoStyles.videoContent}>
                <h1 className={styles.title}>{currentVideoText}</h1>
                <h4 className={styles.subtitle}>{currentVideoSubText}</h4>
              </div>
            </div>
            <div className={videoStyles.bannerWave}>
              <div className={videoStyles.waveOpacity}>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="#ffffff"
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    opacity=".5"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className={styles.buttons}>
              <button onClick={prevVideo}>
                <span className={styles.directionPrev}>Prev</span>
              </button>
              <button onClick={nextVideo}>
                <span className={styles.directionNext}>Next</span>
              </button>
            </div>
          </section>

          {/* 메인페이지 컨텐츠 */}
          <div className={styles.empty}></div>
          <DevelopingComponent />
          <Brand />
          <div className={styles.empty}></div>
          <Koeuro />
          {/* <div className={styles.empty}></div>
          <Customer /> */}
          <div className={styles.empty}></div>
          <Partners />
          <div className={styles.empty} style={{ height: '50px' }}></div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className={styles.footerContents}>
            <a className={styles.footerSub} href="#">
              이용약관
            </a>
            <a className={styles.footerSub} href="#">
              개인정보 처리 방침
            </a>
            <a className={styles.footerSub} href="#">
              콘텐츠 산업 진흥법에 따른 표기
            </a>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <Nav className="gap-4 text-center">
            <Nav.Link href="#" className="text-decoration-none text-white">
              <div className={styles.footerNav}>
                Contact
                <br />
                <div style={{ height: '15px' }}></div>
                <span className={styles.subFooter}>E : Koeuro@koeuro.com</span>
              </div>
            </Nav.Link>
            <Nav.Link href="#" className="text-decoration-none text-white">
              <div className={styles.footerNav}>
                Poland Office
                <br />
                <div style={{ height: '15px' }}></div>
                <span className={styles.subFooter}>
                  ul. Stanis awa Dubois 36, 44-100
                  <br />
                  Gliwice, Poland
                </span>
              </div>
            </Nav.Link>
            <Nav.Link href="#" className="text-decoration-none text-white">
              <div className={styles.footerNav}>
                Korea Office
                <br />
                <div style={{ height: '15px' }}></div>
                <span className={styles.subFooter}>
                  24, Daewon-ro 39beon-gil, Osan-si,
                  <br />
                  Gyeonggi-do, Republic of korea
                </span>
              </div>
            </Nav.Link>
            <div className="text-decoration-none text-white">
              <div className={styles.footerNav}>
                Social
                <br />
                <div style={{ height: '15px' }}></div>
                <span className={styles.subFooter}>
                  <button
                    onClick={() =>
                      goToUrl(
                        'https://www.facebook.com/people/Koeuro/61553874607457'
                      )
                    }
                    className={styles.footerBtn}
                  >
                    <img
                      src="../assets/images/icon/free-icon-facebook-3128208.png"
                      className={styles.footerImg}
                    />
                  </button>
                </span>
                <span className={styles.subFooter}>
                  <button
                    onClick={() =>
                      goToUrl('https://www.instagram.com/koeuro.shop/')
                    }
                    className={styles.footerBtn}
                  >
                    <img
                      src="../assets/images/icon/free-icon-instagram-717392.png"
                      className={styles.footerImg}
                    />
                  </button>
                </span>
                <span className={styles.subFooter}>
                  <button
                    onClick={() => goToUrl('https://www.youtube.com/@koeuro')}
                    className={styles.footerBtn}
                  >
                    <img
                      src="../assets/images/icon/free-icon-youtube-152810.png"
                      className={styles.footerImg}
                    />
                  </button>
                </span>
              </div>
            </div>
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
