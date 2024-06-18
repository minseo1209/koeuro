import React, { useEffect, useRef } from 'react';
import '../../css/about.module.css';

function BrandShop() {
  const brands = [
    {
      name: '',
      description: '',
      img: '',
    },
    {
      name: '소비자 최우선 원칙',
      description: 'KOEURO는 소비자 최우선 원칙에서',
      img: '../assets/images/icon/brandshop-children003.png',
      description1: ' 고객과 제품을 연결 합니다.',
    },
    {
      name: '최고 품질 제품 우선',
      description: 'KOEURO는 최고의 품질 ',
      img: '../assets/images/icon/brandshop-hobby004.png',
      description1: '우선으로 제품을 선정 합니다.',
    },
    {
      name: '가족중심 사업 중시',
      description: 'KOEURO는 이윤추구 이전 모든 ',
      img: '../assets/images/icon/brandshop-healthy003.png',
      description1: '가족 중심의 사업 가치를 중시 합니다.',
    },
    {
      name: '보다 이로운 제품 모색',
      description: 'KOEURO는 우리에게 이로운',
      img: '../assets/images/icon/brandshop-pet004.png',
      description1: '제품을 연결합니다.',
    },
    {
      name: '',
      description: '',
      img: '',
    },
  ];

  const brandsContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(
          '관찰 대상 엘리먼트:',
          entries.map((entry) => entry.target)
        );
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains('slide-start')
          ) {
            entry.target.classList.add('slide-start');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const brandsContainerElement = brandsContainerRef.current;
    if (brandsContainerElement) {
      const brandCards = brandsContainerElement.querySelectorAll('.brand-card');
      brandCards.forEach((card) => {
        observer.observe(card);
      });
    }

    return () => {
      if (brandsContainerElement) {
        const brandCards =
          brandsContainerElement.querySelectorAll('.brand-card');
        brandCards.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, []);

  return (
    <div>
      <h3 className="AboutTitle">I want to create a richer daily life.</h3>
      <h2 className="AboutBrandStory">Our Vision</h2>

      <div
        className="brands-container"
        ref={brandsContainerRef}
        style={{ marginRight: '0%' }}
      >
        <div className="brands-grid" style={{ display: 'flex' }}>
          {brands.map((brand, index) => (
            <div className="brand-card" key={index} id="brand-card">
              <div
                className="brand-card-content"
                style={{ textAlign: 'center' }}
              >
                <img src={brand.img} alt={brand.name} className="img_box" />
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
    </div>
  );
}

export default BrandShop;
