import React from 'react';
import { Link } from 'react-router-dom';

const contact = [
  {
    id: 1,
    title: '웹 디자이너 인원 모집',
    Day: '24.04.09',
    state: '채용마감',
    content: [{ type: 'text', value: '웹 디자이너 모집 공고 내용입니다.' }],
  },
  {
    id: 2,
    title: '온라인 쇼핑몰 총무 및 물류 지원업무 인원 모집',
    Day: '24.05.27',
    state: '채용중',
    content: [
      {
        type: 'text',
        value: '온라인 쇼핑몰 총무 및 물류 지원업무 모집 공고 내용입니다.',
      },
    ],
  },
];

function Contact() {
  return (
    <div className="container mt-5">
      <div className="main"></div>
      <div className="main"></div>
      <h3 className="AboutTitle">
        코유로에서 지금 채용 중인 포지션을 확인해보세요.
      </h3>
      <h2 className="AboutBrandStory">채용중인 공고</h2>
      <div className="bordlist">
        <ul>
          {contact.map((contact) => (
            <li key={contact.id} className="bordTitle">
              <Link to={`/contact/${contact.id}`} state={{ contact }}>
                <span className="news">{contact.state}</span>
                <br />
                <span className="bordDay">{contact.Day}</span>
                <span className="bordName">{contact.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
