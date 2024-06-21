import hutenCss from '../../css/huten.module.css';

function History() {
  const hutenImg = [
    '../assets/images/huten/h1.png',
    '../assets/images/huten/h2.png',
    '../assets/images/huten/h3.png',
    '../assets/images/huten/h4.jpg',
    '../assets/images/huten/h5.png',
  ];
  return (
    <div>
      <h2 className="AboutBrandStory">HutenGroup History</h2>
      <div className={hutenCss.imageContainer}>
        {hutenImg.map((hutenImg, index) => (
          <img
            key={index}
            src={hutenImg}
            alt={`img-${index}`}
            className={hutenCss.imageItem}
          />
        ))}
      </div>
      <h2 className="AboutBrandStory"> Business location</h2>
      <img
        src="../assets/images/huten/hutenMap.png"
        className={hutenCss.hutenMap}
      />
    </div>
  );
}

export default History;
