import React from 'react';
import { Link } from 'react-router-dom';

const contact = [
  {
    id: 1,
    title: '웹 디자이너 인원 모집',
    day: '24.04.09',
    state: '채용중',
    content: [
      {
        type: 'table',
        value: [
          { label: '모집부분', text: '웹 디자이너' },
          {
            label: '담당업무',
            text: '- 자사몰, 오픈마켓 디자인 및 관리\n- 상세 페이지, 이벤트 프로모션 기획 및 디자인\n- 소셜 미디어 홍보 페이지 디자인',
          },
          {
            label: '지원자격',
            text: '- 경력 1년 이상 \n- 포토샵 일러스트레이트등 디자인 툴 사용 가능자',
          },
          {
            label: '우대사항',
            text: '- 디자인 경력자\n- 컴퓨터 활용능력 중급 이상 엑셀 워드 파워포인트 등 활용 가능자',
          },
          { label: '지원방법', text: '이메일 접수' },
          { label: '전형절차', text: '서류전형 > 면접전형 > 최종합격' },
          {
            label: '근무조건',
            text: '주 5일 근무\n * 법정 공휴일 휴무, 휴게시간 1시간',
          },
          { label: '회사위치', text: '경기도 오산시 대원로39번길 24 3층' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: '온라인 쇼핑몰 총무 및 물류 지원업무 인원 모집',
    day: '24.05.27',
    state: '채용중',
    content: [
      {
        type: 'table',
        value: [
          { label: '모집부분', text: '물류총무' },
          {
            label: '담당업무',
            text: '- 총무 업무 (구매 의뢰, 지출검토)\n- 수출입 시 전반적인 업체 핸들링 및 컨택\n- 물류창고 관리및 제품 관리 (재고관리, 물품발송 등)\n- 회의록 작성 및 업무 SOP 지원',
          },
          { label: '지원자격', text: '경력 무관' },
          {
            label: '우대사항',
            text: '- 운전 면허 소지자\n- 영어 회화 가능자\n- 컴퓨터 활용능력 초급이상 (엑셀,한글,파워포인트 등)\n- 총무파트 유경험자',
          },
          { label: '지원방법', text: '잡코리아 이력서 접수' },
          { label: '전형절차', text: '서류전형 > 면접전형 > 최종합격' },
          {
            label: '근무조건',
            text: '주 5일 근무 (09:00 - 18:00)\n* 법정 공휴일 휴무, 휴게시간 1시간',
          },
          { label: '회사위치', text: '경기도 오산시 대원로39번길 24 3층' },
        ],
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
                <span className="bordDay">{contact.day}</span>
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
