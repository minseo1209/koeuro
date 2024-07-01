import React, { useEffect, useRef } from 'react';
import about from '../../css/about.module.css';

function BrandShop() {
  const brands = [
    {
      name: '어린이 용품',
      description:
        '코유로는 유럽에서 검증된 어린이 용품들은 CE와 EN71 인증을 거친 후 한국의 KC 안전 인증을 취득한 제품만을 판매합니다.',
      img: '../assets/images/icon/brandshop-children003.png',
    },
    {
      name: '취미 용품',
      description:
        '우리의 삶의 질은 여러 취미 활동을 통하여 따뜻해지며, 코유로는 가족, 친구, 동료들과 함께 할 수 있는 취미 용품 판매에 정성을 다합니다.',
      img: '../assets/images/icon/brandshop-hobby004.png',
    },
    {
      name: '건강 용품',
      description:
        '더욱 건강한 삶은 더욱 행복한 삶의 가장 기본입니다. 코유로는 유무형 적으로 건강을 도모합니다.',
      img: '../assets/images/icon/brandshop-healthy003.png',
    },
    {
      name: '반려동물 용품',
      description:
        '반려동물은 우리와 함게하는 가족입니다. 코유로는 반려동물을 보호하고 케어하는 것에 의미를 두고 있습니다.',
      img: '../assets/images/icon/brandshop-pet004.png',
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
      style={{ marginRight: '0%' }}
    >
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandShop;
