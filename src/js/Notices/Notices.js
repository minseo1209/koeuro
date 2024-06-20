import React from 'react';
import { Link } from 'react-router-dom';

const notices = [
  {
    id: 1,
    title: '수원 메쎄 코베 베이비 페어 부스 참가',
    day: '2024/01/08',
    content: [
      {
        type: 'text',
        value: '팀 코유로는 제 70회 수원 코베 베이비페어에 참여합니다.',
      },
      {
        type: 'image',
        value: '../assets/images/post/sowon/post1.jpg',
        alt: '부스 이미지 1',
      },
      {
        type: 'image',
        value: '../assets/images/post/sowon/post2.jpg',
        alt: '부스 이미지 2',
      },
      {
        type: 'image',
        value: '../assets/images/post/sowon/post3.jpg',
        alt: '부스 이미지 3',
      },
      {
        type: 'image',
        value: '../assets/images/post/sowon/post4.jpg',
        alt: '부스 이미지 4',
      },
      { type: 'text', value: '행사 기한.' },
      { type: 'text', value: '2024.01.18 (목) - 21 (일).' },
      { type: 'text', value: '10:00 - 18:00.' },
      { type: 'text', value: '행사 장소.' },
      { type: 'text', value: '수원메쎄 (수원역).' },
      {
        type: 'map',
        value:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.7764394680553!2d127.0326513156244!3d37.286381379848735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5ff17b64fcf1%3A0x2820c7d59a42e4c2!2z7ISc7Jq47YOd7ISc7KeA!5e0!3m2!1sko!2skr!4v1624297073891!5m2!1sko!2skr&markers=color:red%7Clabel:S%7C37.286381379848735,127.0326513156244" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" scrolling="no"></iframe>',
      },
    ],
  },
  {
    id: 2,
    title: '프랑스 파리 메종 오브제 박람회 참여',
    day: '2024/01/15',
    content: [
      {
        type: 'text',
        value:
          '팀 코유로는 2024/01 프랑스 파리 메종 오브제 박람회 초청을 받아 참가하였습니다.',
      },
      {
        type: 'image',
        value: '../assets/images/post/pari/post4.jpg',
        alt: '파리 1',
      },
      {
        type: 'image',
        value: '../assets/images/post/pari/post2.jpg',
        alt: '부스 이미지 2',
      },
      {
        type: 'image',
        value: '../assets/images/post/pari/post3.jpg',
        alt: '부스 이미지 3',
      },
      { type: 'text', value: '행사 정보' },
      { type: 'text', value: '행사기한' },
      { type: 'text', value: '2024.01,18 (목) - 21 (일) : 09:30 - 19:00' },
      { type: 'text', value: '2024.01.22 (월) : 09:30 - 18:00' },
      { type: 'text', value: '행사 장소' },
      {
        type: 'map',
        value:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8792890156276!2d2.5137913156753454!3d48.96943307929909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61670e83d816d%3A0xbdea11e58b79e9e7!2sParc%20des%20Expositions%20de%20Paris-Nord%20Villepinte!5e0!3m2!1sen!2sfr!4v1624297073891!5m2!1sen!2sfr&markers=color:red%7Clabel:P%7C48.969433,2.515980" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" scrolling="no"></iframe>',
      },
      { type: 'text', value: '프랑스 파리 (France Paris)' },
      { type: 'text', value: 'Parc des Expositions de Villepinte' },
      {
        type: 'image',
        value: '../assets/images/post/pari/post1.png',
        alt: '부스 이미지 4',
      },
      {
        type: 'image',
        value: '../assets/images/post/pari/post9.jpg',
        alt: '부스 이미지 4',
      },
      {
        type: 'image',
        value: '../assets/images/post/pari/post6.jpg',
        alt: '부스 이미지 4',
      },
      {
        type: 'image',
        value: '../assets/images/post/pari/post7.jpg',
        alt: '부스 이미지 4',
      },
      {
        type: 'image',
        value: '../assets/images/post/pari/post8.jpg',
        alt: '부스 이미지 4',
      },
      {
        type: 'image',
        value: '../assets/images/post/pari/post5.jpg',
        alt: '부스 이미지 4',
      },
    ],
  },
  {
    id: 3,
    title: '송도 컨벤시아 코베 베이비 페어 부스 참가',
    day: '2024/01/08',
    content: [
      {
        type: 'text',
        value:
          '팀 코유로는 제 71회 송도 컨벤시아 코베 베이비페어에 참여합니다.',
      },
      {
        type: 'image',
        value: '../assets/images/post/songdo/post1.jpg',
        alt: '파리 1',
      },
      {
        type: 'image',
        value: '../assets/images/post/songdo/post2.jpg',
        alt: '부스 이미지 2',
      },
      {
        type: 'image',
        value: '../assets/images/post/songdo/post3.jpg',
        alt: '부스 이미지 3',
      },
      {
        type: 'image',
        value: '../assets/images/post/songdo/post4.jpg',
        alt: '부스 이미지 3',
      },
      { type: 'text', value: '행사 정보' },
      { type: 'text', value: '행사기한' },
      { type: 'text', value: '2024.02.22 (목) - 25 (일) : 10:30 - 18:00' },
      { type: 'text', value: '행사 장소' },
      { type: 'text', value: '송도컨베시아(인천)' },
      {
        type: 'map',
        value:
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.054195163701!2d126.646194!3d37.389083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7c9f0b9ad4cf%3A0x957c6a5b5c2a6b4d!2sSongdo%20Convensia!5e0!3m2!1sen!2skr!4v1624297073891!5m2!1sen!2skr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" scrolling="no"></iframe>',
      },

      { type: 'text', value: '주최' },
      { type: 'text', value: '메쎄이상' },
      { type: 'text', value: '주관' },
      { type: 'text', value: '코베' },
    ],
  },
];

function Notices() {
  return (
    <div className="container mt-5">
      <div className="main"></div>
      <div>
        <h3 className="AboutTitle">This is a notice for the customer.</h3>
        <h2 className="AboutBrandStory">공지사항</h2>
        <div className="bordlist">
          <ul>
            {notices.map((notice) => (
              <li key={notice.id} className="bordTitle">
                <Link to={`/notices/${notice.id}`} state={{ notice }}>
                  <span className="news">새소식</span>
                  <br />
                  <span className="bordDay">{notice.day}</span>
                  <span className="bordName">{notice.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Notices;
