import React, { useEffect, useRef } from 'react';
import BrandShop from './BrandShop';
import OurValue from './OurValue';
import HutenHistroy from './History';
import Vision from './Vision';
import about from '../../css/about.module.css';

function About() {
  const brandStoryRef = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const brandStoryElement = brandStoryRef.current;
    if (brandStoryElement) {
      observer1.observe(brandStoryElement);
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className={about.main}></div>
      <h3 className={about.AboutTitle}>
        Beautiful design and specialty are added to my daily life to enrich my
        daily life
      </h3>
      <h2 className={about.AboutBrandStory}>
        아름다운 디자인과 특별함이 일상에 더해져 일상을 풍요롭게 해줍니다.
      </h2>
      <div className="row">
        <div className="col">
          <img
            src="../assets/images/banner/1.png"
            className={about.AboutBanner}
            alt="About banner"
          />
        </div>
        <div className="col">
          <div className={about.BrandStor} ref={brandStoryRef}>
            <h2 className={about.BrandStorytext}>Brand Story</h2>
            <div className={about.BrandStorydetail}>
              <p>
                한국과 유럽의 줄임 합성어로 한국과 유럽을 연결 한다는
                의미입니다.
              </p>
              <p>
                저희 코유로는 유럽 폴란드 현지에 상품 기획 거점을 두고 어린이,
                취미, 시니어 <br />
                건강, 뷰티 아이템을 스웨덴, 폴란드, 독일, 체코 등 유럽에서
                한국으로 또는 한국에서
                <br />
                유럽으로 판매하고 있습니다.
                <br />
                유럽 현지에 회사를 운영하고 있어 유럽 제품에 빠른 접근성과
                인프라를 가지고 <br />
                있습니다.
              </p>
              <p>
                자신의 취향을 존중하며 트렌드에 앞서가는 소비자들에게 유럽
                문화에 대한 정보와
                <br /> 이전까지 소개되지 않았던 퀄리티 높고 경쟁력 있는 제품들을
                제공합니다.
                <br />
                이를 통해 고객분들께서 합리적인 소비를 할 수 있도록 돕는
                플랫폼입니다.
              </p>
              <table>
                <tr>
                  <td>
                    <video
                      video
                      muted
                      autoPlay
                      loop
                      playsInline
                      className={about.videoBannerLeft}
                      width={'100%'}
                      height={'auto'}
                    >
                      <source
                        src="../assets/video/banner/baner_video02.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </td>
                  <td>
                    <video
                      video
                      muted
                      autoPlay
                      loop
                      playsInline
                      className={about.videoBannerRight}
                      width={'100%'}
                      height={'auto'}
                    >
                      <source
                        src="../assets/video/banner/baner_video03.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h3 className={about.AboutTitle}>&nbsp;</h3>
      <h2 className={about.AboutBrandStory}>
        Our Mission
        <span className={about.koeuromallLink}>
          <a href="https://koeuro.shop/">브랜드쇼핑몰 바로가기 &gt; </a>
        </span>
      </h2>
      <div>
        <video video muted autoPlay loop playsInline className="video-box">
          <source
            src="../assets/video/banner/baner_video01.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <BrandShop />
      <OurValue />
      <div className={about.box}></div>
      <Vision />
      <HutenHistroy />
    </div>
  );
}

export default About;
