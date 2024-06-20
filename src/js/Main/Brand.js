import { useEffect, useState } from 'react';

import styles from '../../css/main.module.css';
import brandStyles from '../../css/brands.module.css';
import aniStyles from '../../css/animation.module.css';

// 메인용 코유로 브랜드 안내

function Brand() {
  const brands = [
    {
      name: 'Bukowski',
      hoverImage: '../assets/images/brand/Bukowski.jpg',
      logo: '../assets/images/brand/Bukowski_1.jpg',
      link: 'https://koeuro.shop/category/Bukowski/28/',
      description:
        '디자인강국 스웨덴에서 인정한 유럽명품 부코스키 인형을 한국에서 만나보세요.',
    },
    {
      name: 'Astra',
      hoverImage: '../assets/images/brand/Astra.jpg',
      logo: '../assets/images/brand/Astra_1.jpg',
      link: 'https://koeuro.shop/category/Astra/44/',
      description:
        '100년 전통의 폴란드 미술용품을 코유로샵에서 만날 수 있습니다.',
    },
    {
      name: 'Nowekartonowe',
      hoverImage: '../assets/images/brand/Nowekartonowe.jpg',
      logo: '../assets/images/brand/Nowekartonowe_1.jpg',
      link: 'https://koeuro.shop/category/Nowekartonowe/43/',
      description: '가족과 함께할수 있는 건전한 놀이문화 코유로가 앞장섭니다.',
    },
  ];

  // 이미지 변경을 위한 상태 변수
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const textWrap = document.querySelector('.developing_textwrap');
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
    <section className="developing_textwrap">
      <div className={brandStyles.partnerBrandContainer}>
        <div className={brandStyles.partnerBrandContainer}>
          <div className={brandStyles.partnerBrandTitles}>
            <div className={brandStyles.partnerBrandTitle}>유럽의 명품을</div>
            <div className={brandStyles.logoContainer}>
              <img
                src="../assets/images/logo/logo_o.png"
                className={brandStyles.titleImg}
                alt="유럽의 명품"
              />
              {/* <img
                src="../assets/images/logo/KoeuroLink.png"
                className={`${brandStyles.koeuroLink} ${
                  isVisible ? aniStyles.rotationFromBottom && brandStyles.play : brandStyles.stop
                }`}
              ></img> */}
              <img
                src="../assets/images/logo/KoeuroLink.png"
                className={`${brandStyles.koeuroLink} ${
                  isVisible ? aniStyles.rotationFromBottom : ''
                }`}
              />
            </div>
            <div className={brandStyles.partnerBrandTitle}>에서 만나보세요</div>
          </div>
          <div className={brandStyles.brandsContainer}></div>
        </div>
        <div className={brandStyles.brandsContainer}>
          <div className={brandStyles.brandsGrid}>
            {brands.map((brand, index) => (
              <a
                key={index}
                href={brand.link}
                target="_blank"
                // className={brandStyles.brandLink}
                onMouseEnter={() => setHoveredBrand(index)}
                onMouseLeave={() => setHoveredBrand(null)}
              >
                <div
                  className={brandStyles.bCard}
                  style={{
                    backgroundImage: `url(${
                      hoveredBrand === index ? brand.hoverImage : brand.logo
                    })`,
                  }}
                >
                  <div className="brand-card-content">
                    <h className={brandStyles.brandName}>{brand.name}</h>
                    <p className={brandStyles.brandDescription}>
                      {brand.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;
