import React, { useEffect, useRef } from 'react';
import about from '../../css/about.module.css';

function BrandShop() {
  const brands = [
    {
      name: '소비자 최우선 원칙',
      description: 'KOEURO는 소비자 최우선 원칙에서',
      img: '../assets/images/icon/01.png',
      description1: ' 고객과 제품을 연결 합니다.',
    },
    {
      name: '최고 품질 제품 우선',
      description: 'KOEURO는 최고의 품질 ',
      img: '../assets/images/icon/02.png',
      description1: '우선으로 제품을 선정 합니다.',
    },
    {
      name: '가족중심 사업 중시',
      description: 'KOEURO는 이윤추구 이전 모든 ',
      img: '../assets/images/icon/03.png',
      description1: '가족 중심의 사업 가치를 중시 합니다.',
    },
    {
      name: '보다 이로운 제품 모색',
      description: 'KOEURO는 우리에게 이로운',
      img: '../assets/images/icon/04.png',
      description1: '제품을 연결합니다.',
    },
  ];

  const brandsContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains(about.slideStart)
          ) {
            entry.target.classList.add(about.slideStart);
          }
        });
      },
      {
        threshold: 0.1, // 임계값을 낮추어 요소가 더 빨리 인식되도록 합니다.
      }
    );

    const brandsContainerElement = brandsContainerRef.current;
    if (brandsContainerElement) {
      const brandCards = brandsContainerElement.querySelectorAll(
        `.${about.brandCard}`
      );
      brandCards.forEach((card) => {
        observer.observe(card);
      });
    }

    return () => {
      if (brandsContainerElement) {
        const brandCards = brandsContainerElement.querySelectorAll(
          `.${about.brandCard}`
        );
        brandCards.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, []);

  return (
    <div
      className="brands-container"
      ref={brandsContainerRef}
      style={{ marginRight: '0%', marginTop: '15em', marginBottom: '15em' }}
    >
      <h3 className={about.AboutTitle}>
        I want to create a richer daily life.
      </h3>
      <h2 className={about.AboutBrandStory}>Our Vision</h2>
      <div className={about.brandsgrid} style={{ display: 'flex' }}>
        {brands.map((brand, index) => (
          <div className={about.brandCard} key={index}>
            <div
              className={about.brandCardContent}
              style={{ textAlign: 'center' }}
            >
              <img src={brand.img} alt={brand.name} className={about.imgBox} />
              <br />
              <h2 className="brand-name" style={{ textAlign: 'center' }}>
                {brand.name}
              </h2>
              <p
                className="brand-description"
                style={{ fontSize: '14px', textAlign: 'center' }}
              >
                {brand.description}
              </p>
              <p
                className="brand-description"
                style={{ fontSize: '14px', textAlign: 'center' }}
              >
                {brand.description1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandShop;
