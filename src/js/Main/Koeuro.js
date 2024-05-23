import React, { useState, useEffect } from 'react';
import '../../css/animation.css';

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
    <div className={`koeuro ${isVisible ? 'appear_from_bottom' : ''}`}>
      <section className="banner-layout1 pb-0 bg-parallax vision-layout">
        <div className="thinking">
          <img
            src="/assets/images/backgrounds/8.png"
            alt="img"
            className="thinkingImg"
          />
        </div>
        <div className="container-fluid col-padding-0 pb-40">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 vision-text-box-layout flex align-items-center justify-content-end">
              <div className="vision-text-box" data-aos="fade-left">
                <div className="white-box">
                  <h2 className="vision-text-title">
                    항상 고객에게 어떤 이점이 있는지에 초점을 두고 있습니다.
                  </h2>
                  <h3 className="vision-text-content" id="subtext">
                    해당 브랜드 본사 또는 라이선스를 보유한 업체가 직접 상품을
                    판매하고 있습니다.
                    <br />
                    상품에 대한 신뢰도나 사후 관리 등의 측면에서 믿고 구매할 수
                    있습니다.
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
