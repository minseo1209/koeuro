import React, { useEffect, useRef } from 'react';
import '../../css/about.css';

function BrandShop() {
  const brands = [
    {
      name: '',
      description: '',
      img: '',
    },
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
    <div
      className="brands-container"
      ref={brandsContainerRef}
      style={{ marginRight: '0%' }}
    >
      <div className="brands-grid" style={{ display: 'flex' }}>
        {brands.map((brand, index) => (
          <div className="brand-card" key={index} id="brand-card">
            <div className="brand-card-content" style={{ textAlign: 'center' }}>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandShop;
