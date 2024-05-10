import React, { useEffect, useState } from 'react';
import '../../App.css';
import '../css/video.css';
import '../css/main.css';

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
    }, 4000);

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
    <div>
      <section className="video-section">
        <div className="video-container">
          <video
            autoPlay
            muted
            loop
            id="video-background"
            className="video-element"
            src={videos[currentVideoIndex]}
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
      <div className="KOEURO">
        <h3 className="KOEURONAME">코유로 &#40;KoEuro&#41;</h3>
        <p className="textBox">
          한국&#40;KOREA&#41;과 유럽&#40;EUROPE&#41; 간의 링크를 상징하는
          이름입니다.
        </p>
        <p>
          우리는 현지에 회사를 운영하고 있어 유럽 제품에 빠른 접근성과 인프라를
          가지고 있습니다.
          <br />
          트렌드에 앞서가는 소비자에게 유럽 문화에 대한 정보 및 소개되지 않았던
          하이퀄리티 제품을 제공합니다.
          <br />
          합리적 소비의 동반자 코유로와 함께해요.
        </p>
      </div>
      <div>
        <h2>유럽의 명품을</h2>
        <div className="logo-background" id="logoAnimation">
          <div className="logo-background-img"></div>
          <div
            className="logo-background-link"
            id="initialView"
            style={{
              animation: 'logo-link-ani 6s ease 1s 1 normal forwards running',
              backgroundImage: `url(${imageURL})`, // 배경 이미지 추가
              backgroundSize: 'cover', // 배경 이미지 크기 조정
              backgroundPosition: 'center', // 배경 이미지 위치 조정
            }}
          ></div>
        </div>
        <h2>에서 만나보세요</h2>
      </div>
    </div>
  );
}

export default Main;
