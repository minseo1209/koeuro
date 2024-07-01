import React, { useEffect, useRef } from 'react';
import hutenCss from '../../css/huten.module.css';
import about from '../../css/about.module.css';

function History() {
  const hutenImg = [
    '../assets/images/huten/h1.png',
    '../assets/images/huten/h2.png',
    '../assets/images/huten/h3.png',
    '../assets/images/huten/h4.jpg',
    '../assets/images/huten/h5.png',
  ];
  const leftImages = hutenImg.slice(0, 2);
  const rightImages = hutenImg.slice(2);

  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(hutenCss.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const images = containerRef.current.querySelectorAll('img');
    images.forEach((img) => observer.observe(img));

    return () => {
      images.forEach((img) => observer.unobserve(img));
    };
  }, []);

  return (
    <div>
      <h2 className="AboutBrandStory">HutenGroup History</h2>
      <div className={hutenCss.imageContainer} ref={containerRef}>
        {leftImages.map((hutenImg, index) => (
          <img
            key={index}
            src={hutenImg}
            alt={`img-${index}`}
            className={`${hutenCss.imageItem} ${hutenCss.left}`}
          />
        ))}
        {rightImages.map((hutenImg, index) => (
          <img
            key={index + 2}
            src={hutenImg}
            alt={`img-${index + 2}`}
            className={`${hutenCss.imageItem} ${hutenCss.right}`}
          />
        ))}
      </div>
      <div style={{ marginTop: '10em' }}></div>
      <h3 className={about.AboutTitle}></h3>
      <h2 className={about.AboutBrandStory}>Business location</h2>
      <img
        src="../assets/images/huten/hutenMap.png"
        className={hutenCss.hutenMap}
      />
    </div>
  );
}

export default History;
