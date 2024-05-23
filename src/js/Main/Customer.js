import React, { useState } from 'react';
import '../../css/brands.css';

function Customer() {
  const brands = [
    {
      name: '코유로 몰',
      link1: '코유로 몰',
      link2: '파트너스 문의',
      link3: 'B to B 문의',
      href1: '#',
      href2: '#',
      href2: '#',
      description: '유럽의 명품을 코유로에서 만나보세요.',
    },
    {
      name: '코코스 몰',
      link1: '코코스 몰',
      link2: '입점 문의',
      href1: '#',
      href2: '#',
      description: 'K-뷰티를 유럽에서 실현시킵니다.',
    },
    {
      name: '마당',
      link1: '마당문의',
      href1: '#',
      description:
        '소상공인을 위한 극 최적화 맞춤형 마케팅 서비스 마당에서 시작하세요.',
    },
  ];

  // 이미지 변경을 위한 상태 변수
  const [hoveredBrand, setHoveredBrand] = useState(null);

  return (
    <section>
      <div className="partner-brand-container">
        <div className="partner-brand-container">
          <div className="partner-brand-titles">
            <div className="partner-brand-title">고객 만족 실현을</div>
            <img
              src="../assets/images/logo/logo_o.png"
              className="titleimg"
              alt="유럽의 명품"
            />
            <div className="partner-brand-title">에서 만나보세요</div>
          </div>
          <div className="brands-container"></div>
        </div>
        <div className="brands-container">
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div className="b-card">
                <div className="brand-card-content">
                  <h className="brand-name">{brand.name}</h>
                  <p className="brand-description" style={{ fontSize: '14px' }}>
                    {brand.description}
                  </p>
                  <ul
                    key={index}
                    className="List"
                    style={{ margin: '0', padding: '0', fontSize: '11px' }}
                  >
                    <li className="Listli">
                      <a href={brand.href1} target="_blank">
                        {brand.link1}
                      </a>
                    </li>
                    <li className="Listli">
                      <a href={brand.href2} target="_blank">
                        {brand.link2}
                      </a>
                    </li>
                    <li className="Listli">
                      <a href={brand.href3} target="_blank">
                        {brand.link3}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customer;
