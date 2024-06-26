import React, { useState, useEffect } from 'react';
import aniStyles from '../../css/animation.module.css';
import styles from '../../css/main.module.css';

// 메인용 코유로 소개글

function Koeuro() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const textWrap = document.querySelector('.koeuro');
      const positionFromTop = textWrap.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (positionFromTop - windowHeight <= 0) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`koeuro`}>
      <section className={`${styles.bannerLayoutFirst} pb-0 bg-parallax vision-layout`}>
        <div className={`${styles.thinking} ${isVisible ? aniStyles.appearFromBottom : ''}`}>
          <img src="/assets/images/backgrounds/8.png" alt="img" className={styles.thinkingImg} />
        </div>
        <div className="container-fluid col-padding-0 pb-40">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 vision-text-box-layout flex align-items-center justify-content-end">
              <div className={styles.visionTextBox} data-aos="fade-left">
                <div className={styles.whiteBox}>
                  <h2 className={styles.visionTextTitle}>항상 고객에게 어떤 이점이 있는지에 초점을 두고 있습니다.</h2>
                  <h3 className={styles.visionTextContent} id="subtext">
                    해당 브랜드 본사 또는 라이선스를 보유한 업체가 직접 상품을 판매하고 있습니다.
                    <br />
                    상품에 대한 신뢰도나 사후 관리 등의 측면에서 믿고 구매할 수 있습니다.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Koeuro;
