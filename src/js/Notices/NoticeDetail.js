import React from 'react';
import { useLocation } from 'react-router-dom';
import about from '../../css/about.module.css';

function NoticeDetail() {
  const location = useLocation();
  const notice = location.state.notice;

  if (!notice) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container mt-5">
      <div className={about.main}></div>
      <h2 className={about.AboutBrandStory} style={{ marginBottom: '1em' }}>
        {notice.title}
      </h2>
      <div>
        {notice.content.map((item, index) => {
          if (item.type === 'text') {
            return <p key={index}>{item.value}</p>;
          } else if (item.type === 'image') {
            return (
              <div key={index}>
                <img
                  src={item.value}
                  alt={item.alt}
                  style={{ width: '50%', margin: '20px 0' }}
                />
              </div>
            );
          } else if (item.type === 'map') {
            return (
              <div
                key={index}
                style={{
                  width: '100%',
                  height: '400px',
                  margin: '20px 0',
                  overflow: 'hidden',
                }}
                dangerouslySetInnerHTML={{ __html: item.value }}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default NoticeDetail;
