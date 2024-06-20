import { useEffect, useState } from 'react';

function OurValue() {
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
    <div className="space">
      <h3 className="AboutTitle">Everything starts from the person.</h3>
      <h2 className="AboutBrandStory">Our Value</h2>

      <div className={`koeuro ${isVisible ? 'appear_from_bottom' : ''}`}>
        <section className="banner-layout1 pb-0 bg-parallax vision-layout">
          <div className="thinking">
            <img
              src="/assets/images/backgrounds/huten.png"
              alt="img"
              className="thinkingImg"
            />
          </div>
          <div className="container-fluid col-padding-0 pb-40">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6 vision-text-box-layout flex align-items-center justify-content-end">
                <div className="vision-text-box" data-aos="fade-left">
                  <div className="about-box">
                    <p className="about-text-title">
                      "모든 것은 그 사람으로부터 시작됩니다."
                    </p>
                    <h3 className="vision-text-content" id="textsub">
                      "Everything starts from the person."
                    </h3>
                    <p className="about-text-title">
                      <br />
                      전 세계에 퍼져있는 다른 문화들은 인류 안에서만 표현될 수
                      있습니다.
                      <br />
                      HUTEN은 그 안에서 사람들이 빛나기를 원합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurValue;
