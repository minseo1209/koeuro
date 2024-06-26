import styles from '../../css/main.module.css';
import brandStyles from '../../css/brands.module.css';

// 메인용 고객 문의 안내

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

  return (
    <section>
      <div className={brandStyles.partnerBrandContainer}>
        <div className={brandStyles.partnerBrandContainer}>
          <div className={brandStyles.partnerBrandTitles}>
            <div className={brandStyles.partnerBrandTitle}>
              고객 만족 실현을
            </div>
            <img
              src="../assets/images/logo/logo_o.png"
              className={brandStyles.titleImg}
              alt="유럽의 명품"
            />
            <div className={brandStyles.partnerBrandTitle}>에서 만나보세요</div>
          </div>
          <div className={brandStyles.brandsContainer}></div>
        </div>
        <div className={brandStyles.brandsContainer}>
          <div className={brandStyles.brandsGrid}>
            {brands.map((brand, index) => (
              <div className={brandStyles.bCard}>
                <div className={brandStyles.brandCardContent}>
                  <h className={brandStyles.brandName}>{brand.name}</h>
                  <p
                    className={brandStyles.brandDescription}
                    style={{ fontSize: '14px' }}
                  >
                    {brand.description}
                  </p>
                  <ul
                    key={index}
                    className={styles.ulList}
                    style={{ margin: '0', padding: '0', fontSize: '11px' }}
                  >
                    <li className={styles.liList}>
                      <a href={brand.href1} target="_blank" rel="noreferrer">
                        {brand.link1}
                      </a>
                    </li>
                    <li className={styles.liList}>
                      <a href={brand.href2} target="_blank" rel="noreferrer">
                        {brand.link2}
                      </a>
                    </li>
                    <li className={styles.liList}>
                      <a href={brand.href3} target="_blank" rel="noreferrer">
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
