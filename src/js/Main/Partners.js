import React, { useEffect, useState } from 'react';

import styles from '../../css/main.module.css';

// 메인용 코유로 파트너 안내

const Client = [
  {
    id: 0,
    imgSrc: '../assets/images/Client/huten.png',
  },
  {
    id: 1,
    imgSrc: '../assets/images/Client/boguslawa.png',
  },
  {
    id: 2,
    imgSrc: '../assets/images/Client/1.png',
  },
  {
    id: 3,
    imgSrc: '../assets/images/Client/2.png',
  },
  {
    id: 4,
    imgSrc: '../assets/images/Client/3.png',
  },
  {
    id: 5,
    imgSrc: '../assets/images/Client/huten.png',
  },
  {
    id: 6,
    imgSrc: '../assets/images/Client/boguslawa.png',
  },
  {
    id: 7,
    imgSrc: '../assets/images/Client/1.png',
  },
  { id: 8, imgSrc: '../assets/images/Client/2.png' },
  { id: 9, imgSrc: '../assets/images/Client/3.png' },
];

// ClientSlide 컴포넌트: 클라이언트 이미지를 순환하여 보여주는 컴포넌트입니다.
function ClientSlide({ startIdx }) {
  const [currentIndex, setCurrentIndex] = useState(startIdx);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Client.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* 
        현재 인덱스(currentIndex)를 기준으로 Client 배열에서 4개씩 이미지를 가져옴.
        배열의 끝에 도달했을 때, 다시 배열의 처음부터 이미지를 가져올 수 있도록 조건을 추가.
      */}
      {Array.from({ length: 4 }).map((_, index) => {
        const clientIndex = (currentIndex + index) % Client.length;
        return (
          <img
            key={Client[clientIndex].id}
            src={Client[clientIndex].imgSrc}
            alt={`Client ${Client[clientIndex].id}`}
          />
        );
      })}
    </div>
  );
}

// Partner 컴포넌트: 각 파트너 정보를 표현.
function Partner({ title, imgSrc, name, position }) {
  return (
    <div>
      <table className={styles.exordiumTable}>
        <tr>
          <th className={styles.exordiumTitle}>{title}</th>
        </tr>
      </table>
      <table className={styles.exordiumTable}>
        <tr>
          <th className="exordiumImg" id="partnerImg">
            <img src={imgSrc} alt="Partner" className="partnerImg" />
          </th>
          <td className="exordium">
            <span className="exordiumName">{name}</span> <br />
            <span className="exordiumPosition">{position}</span>
          </td>
        </tr>
      </table>
    </div>
  );
}

// Partners 컴포넌트: 파트너 정보를 포함하는 컴포넌트
function Partners() {
  // 파트너 정보 배열
  const partners = [
    {
      title:
        'KOEURO는 파트너사와 함께 최고의 가치를 위하여 좋은 품질의 제품을 지향 하겠습니다.',
      imgSrc: '../assets/images/blog/author/1.jpg',
      name: 'Gon Jo',
      position: 'HutenGroup General representative, CEO',
    },
    {
      title: '여러분의 Feedback은 저희 KOEURO의 최고 자산입니다.',
      imgSrc: '../assets/images/blog/author/2.jpg',
      name: 'Yoon, Yong-woon',
      position: 'HutenGroup COO',
    },
    {
      title:
        '모든 제품은 직접 방문 실사 후 선정이 되며, 더욱 믿을 수 있는 제품을 제공하겠습니다.',
      imgSrc: '../assets/images/blog/author/3.jpg',
      name: 'Song, In-seob',
      position: 'KOEURO Team Director',
    },
  ];

  // 현재 화면에 보여지는 파트너의 인덱스를 상태로 관리
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

  // 다음 파트너 보여주기 함수
  const nextPartner = () => {
    setCurrentPartnerIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  useEffect(() => {
    // 5초마다 다음 파트너 보여주기
    const intervalId = setInterval(nextPartner, 5000);
    // 컴포넌트가 언마운트될 때 clearInterval로 인터벌 제거
    return () => clearInterval(intervalId);
  }, [currentPartnerIndex]); // currentPartnerIndex가 변경될 때마다 실행

  // 이전 파트너 보여주기 함수
  const prevPartner = () => {
    setCurrentPartnerIndex(
      (prevIndex) => (prevIndex - 1 + partners.length) % partners.length
    );

    const slideImgBox = document.querySelector('.slideImgBox');
    if (slideImgBox) {
      slideImgBox.classList.add('animateSlide');
    }
  };
  function FaceBook() {
    const destination = 'https://www.facebook.com/people/Koeuro/61553874607457';
    window.location.href = destination;
  }
  function instargram() {
    const destination = 'https://www.instagram.com/koeuro.shop/';
    window.location.href = destination;
  }
  function Youtube() {
    const destination = 'https://www.youtube.com/@koeuro';
    window.location.href = destination;
  }

  return (
    <div className="px-5">
      <h2 className={styles.partnersTitle}>Our happy Partners</h2>
      <div>
        <img
          src="../assets/images/backgrounds/line_bg4.png"
          className={styles.partnersImg}
          alt="line"
        />
        <Partner {...partners[currentPartnerIndex]} />
      </div>
      {/* <div>
        <button onClick={prevPartner}>Previous</button>
        <button onClick={nextPartner}>Next</button>
      </div> */}
      <div className={styles.slideContainer}>
        <div className={styles.clientSlideBox}>
          <div className={styles.slideImgBox}>
            <ClientSlide startIdx={0} />
          </div>
        </div>
      </div>

      {/* Social */}
      <div className={styles.socialContainer}>
        <div className={styles.socialInterval}>
          <button className={styles.socialBtn} onClick={FaceBook}>
            <img
              src="../assets/images/icon/free-icon-facebook-3128208.png"
              className={styles.socialIcon}
              alt="facebook"
            />
            <div className={styles.socialTitle}>Facebook</div>
            <span className={styles.socialSubTitle}>
              Follow us now @ KOEURO
            </span>
          </button>
        </div>
        <div className={styles.socialInterval}>
          <button className={styles.socialBtn} onClick={instargram}>
            <img
              src="../assets/images/icon/free-icon-instagram-717392.png"
              className={styles.socialIcon}
              alt="instargram"
            />
            <div className={styles.socialTitle}>instargram</div>
            <span className={styles.socialSubTitle}>
              Follow us now @ koeuro.shop
            </span>
          </button>
        </div>
        <div className={styles.socialInterval}>
          <button className={styles.socialBtn} onClick={Youtube}>
            <img
              src="../assets/images/icon/free-icon-youtube-152810.png"
              className={styles.socialIcon}
              alt="youtube"
            />
            <div className={styles.socialTitle}>Youtube</div>
            <span className={styles.socialSubTitle}>
              Follow us now @ KOEURO
            </span>
          </button>
        </div>
      </div>

      {/* Question */}
      <div class="container" style={{ height: '600px' }}>
        <img
          src="../assets/images/backgrounds/line_bg5.png"
          className={styles.helpImg}
          alt="line"
        />
        <div class="row">
          <div class="col">
            <table>
              <tr>
                <th rowSpan={3} className={styles.helpTable}>
                  <br />
                </th>
                <th className={styles.subHelpTitle}>
                  Please take a moment to fill out the form.
                </th>
              </tr>
              <tr>
                <th className={styles.mainHelpTitle}>
                  질문이나 도움이 필요할 때 언제든지 문의하십시요
                </th>
              </tr>
              <tr>
                <td className={styles.additional}>
                  우리는 각 작업에 통합적으로 접근하는 것의 중요성을 이해하고
                  있으며 간단하고 쉬운 의사소통의 힘을 믿습니다.
                </td>
              </tr>
            </table>
          </div>

          {/* About */}
          <div class="col">
            <table>
              <tr style={{ height: '30px' }}></tr>
              <tr>
                <td>
                  <input placeholder="성명" className={styles.inputBox} />
                </td>
              </tr>
              <tr>
                <td>
                  <input placeholder="이메일" className={styles.inputBox} />
                </td>
              </tr>
              <tr>
                <td>
                  <input placeholder="연락처" className={styles.inputBox} />
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    placeholder="문의내용"
                    required="true"
                    className={styles.inputBox}
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.inquiryTable} id="aboutCheck">
                  개인정보 동의
                  <input type="checkbox" style={{ marginLeft: '5px' }} />
                </td>
              </tr>
              <tr>
                <td className={styles.inquiryTable}>
                  <button
                    type="submit"
                    className={`${styles.btn} ${styles.btnPrimary}`}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
