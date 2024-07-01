import React from 'react';

import styles from '../../css/main.module.css';

// 메인용 코유로 안내

function DevelopingComponent() {
  return (
    <section className={'py-5'}>
      <div>
        <h2 className={styles.koeuroTitle}>코유로 &#40;KOEURO&#41;</h2>
        <h4 className={`${styles.koeurosubtitle}`}>
          한국&#40;Koera&#41;과 유럽&#40;Europe&#41;간의 링크를 상징하는
          이름입니다.
        </h4>
        <div className={styles.koeuroExplanation}>
          <p>
            우리는 현지에 회사를 운영하고 있어 유럽 제품에 빠른 접근성과
            인프라를 가지고 있습니다.
            <br />
            트렌드에 앞서가는 소비자에게 유럽 문화에 대한 정보 및 소개되지
            않았던 하이퀄리티 제품을 제공합니다.
            <br />
            합리적 소비의 동반자 코유로와 함께해요.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DevelopingComponent;
